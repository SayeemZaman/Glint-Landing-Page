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
    <section id="home" className="bg-rich-black">
      <h1 className="font-satoshiBold text-4xl text-white">Glint.</h1>
      <div className="py-[64px]">
        <h2 className="text-white text-center text-xl text-slate-gray font-satoshiBold">
          Welcome to glint
        </h2>
        <p className="text-white text-center text-3xl font-satoshiBold my-[8px] mb-[32px]">
          We are a creative group of people who design influential brands and
          digital experiences.
        </p>
        <Btn name="Start A Project" target="#about" />
        <Btn name="More About Us" target="#contact" />
      </div>
    </section>
  );
}
