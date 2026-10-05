export default function SiteFooter() {
  return (
    <footer className="relative z-10 overflow-hidden px-5 pt-20 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-6 text-sm text-mute md:flex-row">
        <p className="max-w-sm leading-relaxed">
          AI automation, websites, e-commerce, SEO and analytics for companies that would rather
          build than babysit.
        </p>
        <div className="flex gap-8">
          <a href="#services" className="hover:text-fg">Services</a>
          <a href="#work" className="hover:text-fg">Work</a>
          <a href="#inquiry" className="hover:text-fg">Contact</a>
        </div>
      </div>
      <p className="display mt-14 select-none whitespace-nowrap text-[15.5vw] leading-[0.78] text-fg translate-y-[12%]">
        IndoInovasi
      </p>
      <p className="relative z-10 -mt-2 pb-5 text-xs text-mute">
        &copy; {new Date().getFullYear()} IndoInovasi
      </p>
    </footer>
  );
}
