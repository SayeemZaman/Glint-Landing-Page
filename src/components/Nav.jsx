import menu from "../assets/images/menu-burger.png";
import close from "../assets/images/close-w.png";
import { useState } from "react";
import Social from "./Social";

const data = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Clients", link: "#clients" },
  { name: "Contact", link: "#contact" },
];

function NavBtn({ toggle }) {
  return (
    <button
      onClick={toggle}
      className="fixed bg-rich-black top-[16px] right-[16px] w-[40px] aspect-square flex justify-center items-center"
      aria-label="Open Navigation Menu"
    >
      <img src={menu} className="h-[28px] w-[24px]" />
    </button>
  );
}

function NavBar({ isOpen, toggleNav }) {
  return (
    <div
      className={`fixed top-0 right-0 bg-rich-black min-h-[100dvh] w-[256px] p-[32px] transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-[0]" : "translate-x-[500px]"
      }`}
    >
      <div className="flex justify-between">
        <p className="font-satoshiBold text-sm text-fresh-green">NAVIGATION</p>
        <button
          onClick={toggleNav}
          aria-label="Close Navigation Menu"
          className="w-[12px]"
        >
          <img src={close} />
        </button>
      </div>
      <ul className="flex flex-col py-[48px] gap-[20px]">
        {data.map((item, i) => (
          <li key={i}>
            <a
              href={item.link}
              onClick={toggleNav}
              className="text-white font-satoshiBold"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="font-satoshiMed text-sm text-cloud-gray/50 text-left">
        Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem
        porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis
        neque reprehenderit.
      </p>
      <div className="opacity-50 py-[24px]">
        <Social />
      </div>
    </div>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      <NavBtn toggle={toggleNav} />
      <NavBar isOpen={isOpen} toggleNav={toggleNav} />
    </>
  );
}
