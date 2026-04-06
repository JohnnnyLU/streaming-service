import {Container} from "../../../shared/ui/container/Container";
import styles from "./PricingSection.module.scss";
import {
  useBillingPeriod
} from "../../../features/billing-period-toggle/model/useBillingPeriod.ts";
import {
  BillingPeriodToggle
} from "../../../features/billing-period-toggle/ui/BillingPeriodToggle.tsx";
import {plans} from "../../../entities/plan/model/plans.data.ts";
import {PlanCard} from "../../../entities/plan/ui/PlanCard.tsx";

export function PricingSection () {
  const {billingPeriod, onChange} = useBillingPeriod();

  return (
    <section className={styles.pricing}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.heading}>
              <h2 className={styles.title}>Choose the plan that's right for you</h2>
              <p className={styles.subtext}>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
            </div>
            <div className={styles.toggle}>
              <BillingPeriodToggle value={billingPeriod} onChange={onChange} />
            </div>
          </div>

          <div className={styles.pricingCards}>
            {plans.map(plan => (
              <PlanCard
                key={plan.id}
                plan={plan}
                billingPeriod={billingPeriod}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
