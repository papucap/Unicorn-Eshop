import styles from "./Steps.module.css";
import { cartTranslations } from "../cartTranslations";

export default function Steps({ currentStep, onStepChange, lang = "cs" }) {
  const stepsData = cartTranslations.steps;

  return (
    <div>
      <ol className={styles.steps}>
        {stepsData.map((step, i) => {
          const num = i + 1;
          const isActive = num === currentStep;
          const isDone = num < currentStep;
          const className = [
            styles.item,
            isActive ? styles.active : "",
            isDone ? styles.available : "",
          ].join(" ");

          return (
            <li key={num} className={className}>
              <span
                className={`${styles.step} ${isDone ? styles.clickable : ""}`}
                onClick={() => isDone && onStepChange(num)}
              >
                <span className={styles.icon}>{num}</span>
                <span className={styles.label}>{step[lang]}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
