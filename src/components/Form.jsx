export default function Form() {
  return (
    <form className="bg-eerie-black py-[48px] px-[32px]">
      <h4 className="font-satoshiBold text-lg text-white text-center py-[24px]">
        SEND US A MESSAGE
      </h4>
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
      <button
        type="submit"
        className="w-full py-[16px] bg-fresh-green font-satoshiBold text-white text-sm mt-[32px]"
      >
        SUBMIT
      </button>
    </form>
  );
}
