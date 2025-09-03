import Form from "./Form";
import Address from "./Address";

export default function Contact() {
  return (
    <section id="contact" className="bg-jet p-0 lg:px-[32px] lg:py-[48px]">
      <div className="py-[48px] px-[32px] md:pt-[96px] md:pb-[64px] flex flex-col items-center">
        <h2 className="text-fresh-green">CONTACT US</h2>
        <h3 className="text-white md:text-4xl max-w-[85dvw]">
          Reach out for a new project or just say hello
        </h3>
      </div>
      <div className="lg:py-[32px] lg:px-[32px] lg:grid lg:grid-cols-[2fr_1fr]">
        <Form />
        <Address />
      </div>
    </section>
  );
}
