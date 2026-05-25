import { useState } from "react";
import styles from "./Steps.module.css";

const steps = [
  { label: "Košík" },
  { label: "Doprava a platba" },
  { label: "Dodací údaje" },
  { label: "Souhrn" },
];

export default function Steps({ initialStep = 1 }) {
  const [current, setCurrent] = useState(initialStep);

  return (
    <div>
      <ol className={styles.steps}>
        {steps.map((step, i) => {
          const num = i + 1;
          const isActive    = num === current;
          const isAvailable = num < current;

          const className = [
            styles.item,
            isActive    ? styles.active    : "",
            isAvailable ? styles.available : "",
          ].join(" ");

          const inner = (
            <span className={styles.step}>
              <span className={styles.icon}>{num}</span>
              <span className={styles.label}>{step.label}</span>
            </span>
          );

          return (
            <li key={num} className={className}>
              {isAvailable ? (
                <span
                  className={`${styles.step} ${styles.clickable}`}
                  onClick={() => setCurrent(num)}
                >
                  {inner}
                </span>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ol>

      <div className={styles.controls}>
        <button
          className={styles.btnSecondary}
          onClick={() => setCurrent(c => c - 1)}
          disabled={current === 1}
        >
          ‹ Zpět
        </button>

        <span className={styles.stepInfo}>
          {current} / {steps.length}
        </span>

        <button
          className={styles.btnPrimary}
          onClick={() => setCurrent(c => c + 1)}
          disabled={current === steps.length}
        >
          {current === steps.length - 1 ? "Dokončit" : "Dále ›"}
        </button>
      </div>
    </div>
  );
}