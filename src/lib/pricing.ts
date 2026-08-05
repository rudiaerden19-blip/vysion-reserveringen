/** TableVysion reserveringsabonnement (excl. BTW). */
export const TABLEVYSION_MONTHLY = 39

export function displayPrice(monthlyBase: number, isYearly: boolean): number {
  return isYearly ? Math.round(monthlyBase * 12 * 0.9) : monthlyBase
}
