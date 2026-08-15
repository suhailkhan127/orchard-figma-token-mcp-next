// Generate Next.js route pages from the _HTML build. For each page:
// extract <main> inner HTML, fix asset/link paths for Next, and emit a
// page.tsx that renders the content inside <PageShell> with per-page
// metadata + active/solid/pageClass. Chrome (header/footer/visit/widgets)
// comes from PageShell (real React components).
import fs from "node:fs";

const H = "_HTML";
// slug -> { route, active, solid, title fallback }
const PAGES = {
  index: { route: "", active: "", solid: false, pageClass: "" },
  inset: { route: "inset", active: "treatments", solid: true },
  "how-to-choose-orthodontist": { route: "how-to-choose-orthodontist", active: "treatments", solid: true },
  "how-remote-monitoring-works": { route: "how-remote-monitoring-works", active: "treatments", solid: true },
  booking: { route: "booking", active: "", solid: false },
  contact: { route: "contact", active: "contact", solid: true },
  pricing: { route: "pricing", active: "pricing", solid: true },
  "smile-gallery": { route: "smile-gallery", active: "smile-gallery", solid: true },
  "before-after": { route: "before-after", active: "", solid: true },
  "meet-team": { route: "meet-team", active: "about", solid: true },
  "meet-dr-saqud": { route: "meet-dr-saqud", active: "about", solid: true },
  blog: { route: "blog", active: "about", solid: true },
  "blog-detail": { route: "blog-detail", active: "about", solid: true },
  "dentist-referral": { route: "dentist-referral", active: "", solid: true },
  "thank-you": { route: "thank-you", active: "", solid: true },
};

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
const attr = (html, re) => { const m = html.match(re); return m ? m[1].trim() : ""; };

function fixPaths(html) {
  // assets -> absolute /images
  html = html.replace(/(src|href)="images\//g, '$1="/images/');
  // internal links: X.html -> /X , index.html -> /
  html = html.replace(/href="index\.html"/g, 'href="/"');
  html = html.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, (_, p, hash) => `href="/${p}${hash || ""}"`);
  // drop the page-specific inline <style> (already merged into globals.css)
  html = html.replace(/<style>[\s\S]*?<\/style>/g, "");
  // drop inline <script> (inert in innerHTML; behaviour ported to SiteScripts)
  html = html.replace(/<script[\s\S]*?<\/script>/g, "");
  return html.trim();
}

let count = 0;
for (const [slug, cfg] of Object.entries(PAGES)) {
  const file = `${H}/${slug === "index" ? "index" : slug}.html`;
  if (!fs.existsSync(file)) { console.log(`MISS ${file}`); continue; }
  const html = fs.readFileSync(file, "utf8");
  const title = attr(html, /<title>([^<]*)<\/title>/i).replace(/\s*\|\s*Orchard Orthodontics.*$/i, "").trim();
  const desc = attr(html, /<meta name="description" content="([^"]*)"/i);
  const mainM = html.match(/<main[^>]*id="main"[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainM) { console.log(`NOMAIN ${slug}`); continue; }
  const content = fixPaths(mainM[1]);
  const pageClass = cfg.pageClass !== undefined ? cfg.pageClass : `page-${slug}`;

  const dir = slug === "index" ? "src/app" : `src/app/${cfg.route}`;
  fs.mkdirSync(dir, { recursive: true });

  const meta = slug === "index"
    ? "" // home metadata comes from layout default
    : `export const metadata: Metadata = {\n  title: ${JSON.stringify(title || slug)},\n  description: ${JSON.stringify(desc)},\n};\n\n`;
  const metaImport = slug === "index" ? "" : 'import type { Metadata } from "next";\n';

  const tsx = `${metaImport}import PageShell from "@/components/PageShell";

${meta}const CONTENT = \`${esc(content)}\`;

export default function Page() {
  return (
    <PageShell active=${JSON.stringify(cfg.active)} solid={${cfg.solid}} pageClass=${JSON.stringify(pageClass)}>
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </PageShell>
  );
}
`;
  fs.writeFileSync(`${dir}/page.tsx`, tsx);
  console.log(`OK ${slug} -> ${dir}/page.tsx  (active:${cfg.active || "-"} solid:${cfg.solid} ${pageClass || "no-class"})`);
  count++;
}
console.log(`\nGenerated ${count} pages.`);
