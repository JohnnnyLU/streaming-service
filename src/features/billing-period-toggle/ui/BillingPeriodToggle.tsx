import type { BillingPeriod } from '../../../entities/plan/model/plan.types.ts';
import styles from './BillingPeriodToggle.module.scss';
import clsx from 'clsx';

type Props = {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
};

export function BillingPeriodToggle({ value, onChange }: Props) {
  const classNameMonth = clsx(styles.button, {
    [styles.active]: value === 'monthly',
  });

  const classNameYear = clsx(styles.button, {
    [styles.active]: value === 'yearly',
  });

  return (
    <div className={styles.toggle}>
      <button
        className={classNameMonth}
        onClick={() => onChange('monthly')}
        type="button"
      >
        Monthly
      </button>
      <button
        className={classNameYear}
        onClick={() => onChange('yearly')}
        type="button"
      >
        Yearly
      </button>
    </div>
  );
}
