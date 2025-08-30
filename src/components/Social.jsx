import fb from "../assets/images/facebook-white.png";
import tw from "../assets/images/twitter-white.png";
import ig from "../assets/images/instagram-white.png";
import bh from "../assets/images/behance.png";
import db from "../assets/images/dribble-w.png";

const data = [
  { name: "Facebook", icon: fb },
  { name: "Twitter", icon: tw },
  { name: "Instagram", icon: ig },
  { name: "Behance", icon: bh },
  { name: "Dribble", icon: db },
];

function Link({ name, img }) {
  return (
    <button className="w-[20px]">
      <img src={img} alt={`${name} Logo`} />
    </button>
  );
}

export default function Social() {
  return (
    <div className="flex gap-[12px] py-[16px] mx-auto">
      {data.map((item, i) => (
        <Link key={i} name={item.name} img={item.icon} />
      ))}
    </div>
  );
}
