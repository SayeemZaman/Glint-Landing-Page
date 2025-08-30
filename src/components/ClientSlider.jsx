import { useSlider } from "../hooks/useSlider";
import Indicator from "./Indicator";
import user1 from "../assets/images/user-01.jpg.webp";
import user2 from "../assets/images/user-05.jpg.webp";
import user3 from "../assets/images/user-02.jpg.webp";

const slides = [
  {
    txt: "Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.",
    img: user1,
    name: "Tim Cook",
    title: "CEO, Apple",
  },
  {
    txt: "Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.",
    img: user2,
    name: "Sundar Pichai",
    title: "CEO, Google",
  },
  {
    txt: "Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.",
    img: user3,
    name: "Satya Nadella",
    title: "CEO, Microsoft",
  },
];

function Slide({ txt, img, name, title }) {
  return (
    <div className="flex flex-col items-center w-full flex-shrink-0 object-cover px-[16px]">
      <p className="font-satoshiMed mb-[48px] max-w-[95dvw] text-charcoal-gray text-lg px-[16px]">
        {txt}
      </p>
      <img
        className="rounded-full w-[80px]"
        src={img}
        alt={`Profile Picture of ${name}`}
      />
      <p className="font-satoshiBold text-lg">{name}</p>
      <p className="font-satoshiMed text-charcoal-gray">{title}</p>
    </div>
  );
}

export default function ClientSlider() {
  const { current, handlers, setCurrent } = useSlider({
    length: slides.length,
  });

  return (
    <div
      {...handlers}
      className="flex flex-col items-center gap-[32px] pt-[64px] overflow-hidden"
    >
      <div
        className="flex flex-row transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((item, i) => (
          <Slide
            key={i}
            txt={item.txt}
            img={item.img}
            name={item.name}
            title={item.title}
          />
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
