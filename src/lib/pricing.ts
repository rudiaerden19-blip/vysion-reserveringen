/** Zelfde basisprijzen als vysion-kassa.com/prijzen (excl. BTW). */
export const TABLEVYSION_STARTER_MONTHLY = 69
export const TABLEVYSION_PRO_MONTHLY = 99

export function displayPrice(monthlyBase: number, isYearly: boolean): number {
  return isYearly ? Math.round(monthlyBase * 12 * 0.9) : monthlyBase
}
