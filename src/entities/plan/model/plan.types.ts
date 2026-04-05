export type BillingPeriod = 'monthly' | 'yearly'

export type PlanId = 'basic' | 'standard' | 'premium'

export type Plan = {
  id: PlanId
  title: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features?: string[]
  isPopular?: boolean
  trialLabel: string
  actionLabel: string
}
