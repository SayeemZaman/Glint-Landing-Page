export default function Footer() {
  return (
    <footer className="bg-rich-black py-[48px] px-[32px]">
      <p className="font-satoshiBold text-center text-3xl text-fresh-green">
        Glint.
      </p>
      <p className="ftext">
        Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
        nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
        egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
        pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan
        tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
      </p>
      <p className="font-satoshiBold text-white text-left">Get Notified</p>
      <p className="ftext">
        Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut
        non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto
        porro.
      </p>
      <form className="py-[24px]">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border-none text-center"
        />
        <button type="submit" name="submit" className="submit !mt-[16px]">
          Subscribe
        </button>
      </form>
      <p className="text-white text-center text-sm pt-[24px]">
        © 2025, Design by ColorLib Template
      </p>
    </footer>
  );
}
