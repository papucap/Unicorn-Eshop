import styles from "./Steps.module.css";

const steps = [
  { label: "Košík",           href: "/cs/order/1" },
  { label: "Doprava a platba", href: "/cs/order/2" },
  { label: "Dodací údaje",    href: null },
  { label: "Souhrn",          href: null },
];

export default function Steps({ current = 1 }) {
  return (
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

        const content = (
          <span className={styles.step}>
            <span className={styles.icon}>{num}</span>
            <span className={styles.label}>{step.label}</span>
          </span>
        );

        return (
          <li key={num} className={className}>
            {isActive || isAvailable
              ? <a href={step.href} className={styles.step}>{content}</a>
              : content
            }
          </li>
        );
      })}
    </ol>
  );
}