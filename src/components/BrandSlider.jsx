import { useSlider } from "../hooks/useSlider";
import Indicator from "./Indicator";
import { useState, useEffect } from "react";
import apple from "../assets/images/apple.png.webp";
import atom from "../assets/images/atom.png.webp";
import blackberry from "../assets/images/blackberry.png.webp";
import dropbox from "../assets/images/dropbox.png.webp";
import envato from "../assets/images/envato.png.webp";
import firefox from "../assets/images/firefox.png.webp";
import joomla from "../assets/images/joomla.png.webp";
import magento from "../assets/images/magento.png.webp";

function Logo({ img, alt }) {
  return (
    <img
      className="w-[96px] md:min-w-[156px] lg:min-w-[128px] opacity-50 hover:opacity-100 transition duration-300 ease-in-out"
      src={img}
      alt={alt}
    />
  );
}

function Slide({ img, img2, name, name2 }) {
  return (
    <div className="flex gap-[16px]">
      <Logo img={img} alt={`${name} Logo`} />
      <Logo img={img2} alt={`${name2} Logo`} />
    </div>
  );
}

const slides = [
  <Slide img={apple} img2={atom} name="Apple" name2="Atom" />,
  <Slide img={blackberry} img2={dropbox} name="Blackberry" name2="Dropbox" />,
  <Slide img={envato} img2={firefox} name="Envato" name2="Firefox" />,
  <Slide img={joomla} img2={magento} name="Joomla" name2="Magento" />,
];

function MobileSlider() {
  const { current, handlers, setCurrent } = useSlider({
    length: slides.length,
  });

  return (
    <div
      {...handlers}
      className="flex flex-col items-center gap-[40px] w-full pt-[48px] pb-[16px] relative overflow-hidden"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((item, index) => (
          <div
            key={index}
            className="flex justify-center w-full flex-shrink-0 object-cover"
          >
            {item}
          </div>
        ))}
      </div>
      <Indicator
        current={current}
        length={slides.length}
        setCurrent={setCurrent}
      />
    </div>
  );
}

const brands = [
  <Logo img={apple} alt="Apple" />,
  <Logo img={atom} alt="Atom" />,
  <Logo img={blackberry} alt="Blackberry" />,
  <Logo img={dropbox} alt="Dropbox" />,
  <Logo img={envato} alt="Envato" />,
  <Logo img={firefox} alt="Firefox" />,
  <Logo img={joomla} alt="Joomla" />,
  <Logo img={magento} alt="Magento" />,
];

function ScrollBrand() {
  return (
    <div className="flex items-center md:!gap-[40px] lg:gap-[24px] px-[96px] lg:px-[48px] pt-[48px] pb-[32px] overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent snap-x snap-mandatory">
      {brands.map((item, i) => (
        <div key={i} className="snap-start">
          {item}
        </div>
      ))}
    </div>
  );
}

export default function BrandSlider() {
  const [screenW, setScreenW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenW(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{screenW > 700 ? <ScrollBrand /> : <MobileSlider />}</>;
}
