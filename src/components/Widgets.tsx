export default function Widgets() {
  return (
    <>
      <a className="grev" href="#" aria-label="Google reviews 4.8 stars">
        <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.6a4.8 4.8 0 01-2.1 3.1v2.6h3.4c2-1.8 3.1-4.5 3.1-7.5z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.4-2.6c-.9.6-2 1-3.3 1-2.6 0-4.7-1.7-5.5-4.1H3v2.6A10 10 0 0012 22z" /><path fill="#FBBC05" d="M6.5 13.9a6 6 0 010-3.8V7.5H3a10 10 0 000 9z" /><path fill="#EA4335" d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 003 7.5l3.5 2.6C7.3 7.8 9.4 6.1 12 6.1z" /></svg>
        <span><b>4.8</b> <span className="grev__stars">★★★★★</span><br />1,437 Google Reviews</span>
      </a>
      <a className="wa" href="#" aria-label="Chat on WhatsApp">
        <svg className="ico" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.4 5 5.2-1.4A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.7-.1 1.3z" /></svg>
      </a>
    </>
  );
}
