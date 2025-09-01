function Btn({ name, target }) {
  function scrollTo(item) {
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      className="w-full py-[16px] my-[8px] border-2 text-white font-satoshiBold hover:bg-white hover:text-black transition"
      onClick={() => scrollTo(target)}
    >
      {name}
    </button>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="bg-rich-black">
      <h1 className="font-satoshiBold text-4xl text-white text-start">
        Glint.
      </h1>
      <div className="py-[64px]">
        <h2 className="text-white text-slate-gray">WELCOME TO GLINT</h2>
        <h3 className="text-white mb-[32px]">
          We are a creative group of people who design influential brands and
          digital experiences.
        </h3>
        <Btn name="Start A Project" target="contact" />
        <Btn name="More About Us" target="about" />
      </div>
    </section>
  );
}
