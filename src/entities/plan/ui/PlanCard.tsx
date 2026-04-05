import {Button} from "../../../shared/ui/button/Button";
import type {BillingPeriod, Plan} from "../model/plan.types.ts";

type Props = {
  plan: Plan;
  billingPeriod: BillingPeriod;
}

export function PlanCard({plan, billingPeriod}: Props) {
  const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const suffix = billingPeriod === 'monthly' ? '/month' : '/year';

  return (
    <div>
      <h3>{plan.title}</h3>

      <p>{plan.description}</p>

      <div>
        <span>${price}</span>
        <span>{suffix}</span>
      </div>

      <div>
        <Button children={plan.trialLabel} />
        <Button children={plan.actionLabel} />
      </div>
    </div>
  )
}
