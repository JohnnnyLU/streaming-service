import clsx from 'clsx';
import type { FaqItemType } from '../../model/faq.types';
import styles from './FaqItem.module.scss';

type Props = {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({ item, isOpen, onToggle }: Props) {
  return (
    <div className={clsx(styles.item, isOpen && styles.open)}>
      <button type="button" className={styles.trigger} onClick={onToggle}>
        <div className={clsx(styles.header, isOpen && styles.openHeader)}>
          <div className={styles.id}>{item.id}</div>
          <h3 className={styles.question}>{item.question}</h3>
        </div>

        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div className={styles.content}>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      )}
    </div>
  );
}
