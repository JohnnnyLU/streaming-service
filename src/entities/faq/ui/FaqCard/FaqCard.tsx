import {Accordion} from "../../../../shared/ui/accordion/Accordion";
import type {FaqItem} from "../../model/faq.types";
import styles from "./FaqCard.module.scss";

type Props = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqCard({item, isOpen, onToggle}: Props) {
  return (
    <Accordion
      isOpen={isOpen}
      onToggle={onToggle}
      title={
        <div className={styles.header}>
          <div className={styles.id}>{item.id}</div>
          <h3 className={styles.question}>{item.question}</h3>
        </div>
      }
      content={
        <p className={styles.answer}>{item.answer}</p>
      }
    />
  );
}
