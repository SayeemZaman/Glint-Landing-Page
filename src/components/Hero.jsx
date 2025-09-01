function Btn({ name, target }) {
  function scrollTo(item) {
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      className="w-full max-w-[600px] lg:max-w-[300px] py-[16px] my-[8px] border-2 text-white font-satoshiBold hover:bg-white hover:text-black transition"
      onClick={() => scrollTo(target)}
    >
      {name}
    </button>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-rich-black md:p-[48px] flex flex-col min-h-[100dvh] xl:gap-[16px]"
    >
      <h1 className="font-satoshiBold text-4xl text-white text-left">Glint.</h1>
      <div className="py-[64px] h-full md:px-[40px] lg:px-[48px] xl:px-[156px] my-auto">
        <h2 className="text-white/50 md:text-left">WELCOME TO GLINT</h2>
        <h3 className="text-white mb-[32px] md:text-left md:text-5xl lg:text-6xl max-w-[600px] md:leading-normal mx-auto lg:mx-0">
          We are a creative group of people who design influential brands and
          digital experiences.
        </h3>
        <div className="flex flex-col md:flex-row md:gap-[16px] items-center lg:justify-start pt-[40px]">
          <Btn name="Start A Project" target="about" />
          <Btn name="More About Us" target="contact" />
        </div>
      </div>
    </section>
  );
}
