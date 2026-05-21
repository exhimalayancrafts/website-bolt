export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/WhatsApp_Image_2026-05-21_at_10.37.34_AM.jpeg"
          alt="Himalayan artisan in the mountains"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-32 pb-24">
        <p className="font-sans text-[10px] tracking-widest3 uppercase text-cashmere-light mb-8">
          Est. 1993 &nbsp;&middot;&nbsp; Kathmandu, Nepal
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream-100 leading-[1.05] max-w-4xl mb-8">
          Handmade Cashmere
          <br />
          <em className="italic font-light">from the Himalayas</em>
        </h1>

        <p className="font-sans text-sm md:text-base font-light text-cream-300 max-w-xl leading-relaxed mb-14 tracking-wide">
          Wholesale luxury cashmere crafted by Himalayan artisans. Over three decades of heritage, quality, and care in every thread.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#products"
            className="font-sans text-xs tracking-widest2 uppercase bg-cashmere text-stone-900 px-10 py-4 hover:bg-cashmere-light transition-all duration-300 min-w-[180px] text-center"
          >
            View Collection
          </a>
          <a
            href="#wholesale"
            className="font-sans text-xs tracking-widest2 uppercase border border-cream-300 text-cream-200 px-10 py-4 hover:bg-cream-200 hover:text-stone-900 transition-all duration-300 min-w-[180px] text-center"
          >
            Wholesale Info
          </a>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-10">
        <div className="flex flex-col items-center gap-2 text-cream-400">
          <span className="font-sans text-[9px] tracking-widest2 uppercase text-cream-400">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
