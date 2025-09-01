function Info({ num, name }) {
  return (
    <div className="py-[24px] flex flex-col gap-[16px] md:gap-[48px] w-[356px]">
      <p className="font-satoshiBold text-7xl md:8xl text-white">{num}</p>
      <p className="font-satoshiBold text-lg">{name}</p>
    </div>
  );
}

const data = [
  { name: "Awards Received", num: 127 },
  { name: "Cups of Coffee", num: 1505 },
  { name: "Projects Completed", num: 109 },
  { name: "Happy Clients", num: 102 },
];

export default function About() {
  return (
    <section id="about" className="bg-fresh-green py-[80px]">
      <h2>HELLO THERE</h2>
      <h3 className="text-white text-4xl md:text-5xl lg:text-7xl">
        We Are Glint
      </h3>
      <hr className="mt-[32px] mb-[40px] mx-auto opacity-35 max-w-[512px]" />
      <p className="font-satoshiMed text-base md:text-lg md:leading-relaxed lg:leading-loose md:px-[24px] lg:px-[48px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
      </p>
      <div className="my-[32px] flex flex-wrap justify-center">
        {data.map((item, index) => (
          <Info key={index} name={item.name} num={item.num} />
        ))}
      </div>
    </section>
  );
}
