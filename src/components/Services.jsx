import brushIcon from "../assets/images/paintbrush.png";
import editIcon from "../assets/images/editing.png";
import marketingIcon from "../assets/images/marketing.png";
import designIcon from "../assets/images/graphic-design.png";
import packageIcon from "../assets/images/package.png";
import devIcon from "../assets/images/code.png";

function ServiceCard({ icon, name, desc }) {
  return (
    <div className="flex flex-col lg:relative items-center gap-[16px] py-[32px]">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:self-start gap-[16px]">
        <img src={icon} alt={`${name} Icon`} className="w-[48px] lg:w-[64px]" />
        <p className="font-satoshiBold text-xl md:text-4xl lg:text-left">
          {name}
        </p>
      </div>
      <p className="font-satoshiMed text-med-gray md:w-[456px] md:text-lg lg:text-left lg:leading-loose">
        {desc}
      </p>
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
    <section id="services" className="py-[64px] md:py-[80px] lg:px-[64px]">
      <h2 className="text-fresh-green">WHAT WE DO</h2>
      <h3 className="md:text-4xl">
        We have got everything you need to launch and grow your business
      </h3>
      <hr className="mt-[48px] mb-[32px] mx-auto max-w-[50%]" />
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-y-[32px] lg:gap-x-[48px]">
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
