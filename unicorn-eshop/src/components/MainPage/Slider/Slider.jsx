import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/img/hora.jpg", label: "Horská krajina" },
  { src: "/img/les.jpg",  label: "Zelený les" },
  { src: "/img/zapad.jpg", label: "Západ slunce" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const n = slides.length;

  const prev = useCallback(() => setCurrent(c => (c - 1 + n) % n), [n]);
  const next = useCallback(() => setCurrent(c => (c + 1) % n), [n]);

  // autoplay
  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: 12 }}>
      {/* track */}
      <div style={{
        display: "flex",
        transform: `translateX(-${current * 100}%)`,
        transition: "transform 0.45s ease",
      }}>
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.label}
            style={{ flex: "0 0 100%", width: "100%", objectFit: "cover" }}
          />
        ))}
      </div>

      {/* šipky */}
      <button onClick={prev} style={btnStyle("left")}>‹</button>
      <button onClick={next} style={btnStyle("right")}>›</button>

      {/* tečky */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: 8, height: 8, borderRadius: "50%", border: "none", padding: 0,
              background: i === current ? "#111" : "#bbb", cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function btnStyle(side) {
  return {
    position: "absolute", top: "50%", [side]: 10,
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.3)", color: "#fff",
    border: "none", borderRadius: "50%",
    width: 36, height: 36, fontSize: 20, cursor: "pointer",
  };
}

