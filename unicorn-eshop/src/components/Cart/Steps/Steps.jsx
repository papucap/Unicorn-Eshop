import styles from "./Steps.module.css";

const steps = [
  { label: "Košík" },
  { label: "Dodací údaje" },
  { label: "Doprava a platba" },
  { label: "Souhrn" },
];

export default function Steps({ currentStep, onStepChange }) {
  return (
    <div>
      <ol className={styles.steps}>
        {steps.map((step, i) => {
          const num = i + 1;
          const isActive    = num === currentStep;
          const isDone      = num < currentStep;
          const className   = [
            styles.item,
            isActive ? styles.active  : "",
            isDone   ? styles.available : "",
          ].join(" ");

          return (
            <li key={num} className={className}>
              <span
                className={`${styles.step} ${isDone ? styles.clickable : ""}`}
                onClick={() => isDone && onStepChange(num)}
              >
                <span className={styles.icon}>{num}</span>
                <span className={styles.label}>{step.label}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}