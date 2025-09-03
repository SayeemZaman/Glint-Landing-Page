export default function Form() {
  return (
    <form className="bg-eerie-black py-[48px] px-[32px] md:px-[96px] lg:px-[48px]">
      <h4>SEND US A MESSAGE</h4>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        aria-label="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        aria-label="Your Email"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        aria-label="Subject"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        aria-label="Message"
        className="pb-[156px]"
        required
      ></textarea>
      <button type="submit" className="submit">
        SUBMIT
      </button>
    </form>
  );
}
