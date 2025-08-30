import { useSlider } from "../hooks/useSlider";
import Indicator from "./Indicator";
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
      className="w-[96px] opacity-50 hover:opacity-100 transition duration-300 ease-in-out"
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

export default function BrandSlider() {
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
