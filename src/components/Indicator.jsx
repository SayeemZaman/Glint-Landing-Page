export default function Indicator({ current, length, setCurrent }) {
  return (
    <div className="flex gap-[12px]">
      {Array.from({ length }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={`w-[12px] aspect-square rounded-full transition ${
            current === i ? "bg-black/75" : "bg-black/40"
          }`}
        ></button>
      ))}
    </div>
  );
}
