import Form from "./Form";
import Address from "./Address";

export default function Contact() {
  return (
    <section id="contact" className="bg-jet p-0">
      <div className="py-[48px] px-[32px]">
        <h2 className="text-fresh-green">CONTACT US</h2>
        <h3 className="text-white">
          Reach out for a new project or just say hello
        </h3>
      </div>
      <Form />
      <Address />
    </section>
  );
}
