import { useState, useEffect, useCallback } from "react";
import "./Slider.css";

const slides = [
  {
    src: "./src/assets/SliderPhotos/aero-fit-poster.png",
    label: "Horská krajina",
  },
  {
    src: "./src/assets/SliderPhotos/nike-mind-poster.png",
    label: "Zelený les",
  },
  { src: "./src/assets/SliderPhotos/slider3.jpg", label: "Západ slunce" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const n = slides.length;
  const prev = useCallback(() => setCurrent((c) => (c - 1 + n) % n), [n]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % n), [n]);

  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, i) => (
          <img key={i} src={s.src} alt={s.label} />
        ))}
      </div>

      <button className="slider-btn left" onClick={prev}>
        ‹
      </button>
      <button className="slider-btn right" onClick={next}>
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`slider-dot ${i === current ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
