import type { Metadata } from 'next'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Gratis account aanmaken',
  description: `Start gratis met ${SITE_NAME}. Reserveringssoftware voor restaurants, hotels en zaalverhuur.`,
  alternates: { canonical: '/registreer' },
}

export default function RegistreerLayout({ children }: { children: React.ReactNode }) {
  return children
}
