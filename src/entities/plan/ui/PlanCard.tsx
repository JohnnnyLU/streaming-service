import {Button} from "../../../shared/ui/button/Button";
import type {BillingPeriod, Plan} from "../model/plan.types.ts";
import styles from "./PlanCard.module.scss";

type Props = {
  plan: Plan;
  billingPeriod: BillingPeriod;
}

export function PlanCard({plan, billingPeriod}: Props) {
  const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const suffix = billingPeriod === 'monthly' ? '/month' : '/year';

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{plan.title}</h3>

      <p className={styles.description}>{plan.description}</p>

      <div className={styles.pricing}>
        <span className={styles.price}>${price}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>

      <div className={styles.buttons}>
        <Button children={plan.trialLabel} variant="secondary"/>
        <Button children={plan.actionLabel} variant="primary"/>
      </div>
    </div>
  )
}
