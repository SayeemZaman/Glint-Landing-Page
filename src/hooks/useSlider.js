import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export function useSlider({ length }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return { current, handlers };
}
