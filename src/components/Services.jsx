import brushIcon from "../assets/images/paintbrush.png";
import editIcon from "../assets/images/editing.png";
import marketingIcon from "../assets/images/marketing.png";
import designIcon from "../assets/images/graphic-design.png";
import packageIcon from "../assets/images/package.png";
import devIcon from "../assets/images/code.png";

function ServiceCard({ icon, name, desc }) {
  return (
    <div className="flex flex-col items-center gap-[16px] py-[32px]">
      <img src={icon} alt={`${name} Icon`} className="w-[48px]" />
      <p className="font-satoshiBold text-xl">{name}</p>
      <p className="font-satoshiMed text-med-gray">{desc}</p>
    </div>
  );
}

const data = [
  { icon: brushIcon, name: "Brand Identity" },
  { icon: editIcon, name: "Illustration" },
  { icon: marketingIcon, name: "Marketing" },
  { icon: designIcon, name: "Web Design" },
  { icon: packageIcon, name: "Packaging Design" },
  { icon: devIcon, name: "Web Development" },
];

export default function Services() {
  return (
    <section className="py-[64px]">
      <h2 className="text-fresh-green">WHAT WE DO</h2>
      <h3>We have got everything you need to launch and grow your business</h3>
      <hr className="mt-[24px]" />
      <div>
        {data.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            name={item.name}
            desc={
              "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint."
            }
          />
        ))}
      </div>
    </section>
  );
}
