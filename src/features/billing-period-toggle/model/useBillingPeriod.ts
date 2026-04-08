import { useState } from 'react';
import type { BillingPeriod } from '../../../entities/plan/model/plan.types.ts';

export function useBillingPeriod() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  const onChange = (period: BillingPeriod) => {
    setBillingPeriod(period);
  };

  return {
    billingPeriod,
    onChange,
  };
}
