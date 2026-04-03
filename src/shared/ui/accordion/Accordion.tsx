import type {ReactNode} from "react";
import clsx from "clsx";
import styles from "./Accordion.module.scss";

type AccordionProps = {
  title: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
};

export function Accordion({
  title,
  content,
  isOpen,
  onToggle,
  className,
}: AccordionProps) {
  return (
    <div className={clsx(styles.accordion, className, isOpen && styles.open)}>
      <button
        type="button"
        className={styles.trigger}
        onClick={onToggle}
      >
        <div className={styles.title}>{title}</div>
        <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className={styles.content}>
          {content}
        </div>
      )}
    </div>
  );
}
