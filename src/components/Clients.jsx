import BrandSlider from "./BrandSlider";
import ClientSlider from "./ClientSlider";

export default function Clients() {
  return (
    <section className="bg-light-gray py-[64px] flex flex-col w-full overflow-hidden">
      <h2 className="text-fresh-green">OUR CLIENTS</h2>
      <h3>Glint has been honored to partner up with these clients</h3>
      <BrandSlider />
      <hr className="border-0 h-[1px] bg-black/20 mt-[40px]" />
      <ClientSlider />
      <p className="text-charcoal-gray/50 mt-[32px]">! This is fake !</p>
    </section>
  );
}
