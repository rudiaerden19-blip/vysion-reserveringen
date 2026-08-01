import { redirect } from 'next/navigation'
import { LOGIN_URL } from '@/lib/site'

/** Doorverwijzing naar platformlogin (reserveringsproductlijn). */
export default function InloggenPage() {
  redirect(LOGIN_URL)
}
