// import Social from "./Social";

const address = [
  {
    head: "Where to Find Us",
    content: ["1600 Amphitheatre Parkway", "Mountain View, CA", "94043 US"],
  },
  {
    head: "Email Us At",
    content: ["contact@glintsite.com", "info@glintsite.com"],
  },
  {
    head: "Call Us At",
    content: [
      "Phone: (+63) 555 1212",
      "Mobile: (+63) 555 0100",
      "Fax: (+63) 555 0101",
    ],
  },
];

function Item({ txt }) {
  return <p className="text-cloud-gray/50 font-satoshiMed">{txt}</p>;
}

function List({ head, content }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="font-satoshiBold text-fresh-green">{head}</p>
      {content.map((item, i) => (
        <Item key={i} txt={item} />
      ))}
    </div>
  );
}

export default function Address() {
  return (
    <div className="bg-eerie-black flex flex-col gap-[32px] pt-[32px] pb-[64px]">
      {address.map((item, i) => (
        <List key={i} head={item.head} content={item.content} />
      ))}
    </div>
  );
}
