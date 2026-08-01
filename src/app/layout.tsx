import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { OFFICIAL_SITE_URL, SITE_NAME } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const siteUrl = OFFICIAL_SITE_URL

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: SITE_NAME,
      legalName: 'Vysion Group International',
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description:
        'Reserveringssoftware voor restaurants, hotels en zaalverhuur. Online tafelreservaties, plattegrond en admin in één platform.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Siberiëstraat 24',
        addressLocality: 'Pelt',
        postalCode: '3900',
        addressCountry: 'BE',
      },
      areaServed: [
        { '@type': 'Country', name: 'België' },
        { '@type': 'Country', name: 'Nederland' },
      ],
      sameAs: [
        'https://www.vysion-kassa.com',
        'https://www.vysionapps.io',
        'https://www.webvysion.tech',
        'https://www.vysionorder.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: SITE_NAME,
      description: 'Online tafelreservaties en reserveringsbeheer voor horeca.',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'nl-BE',
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Reserveringssoftware voor restaurants`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Online tafelreservaties, plattegrond, walk-in en gastenbeheer. Reserveringssoftware voor restaurants, hotels en zaalverhuur. Start gratis.',
  keywords: [
    'TableVysion',
    'reserveringssoftware',
    'tafelreserveringen',
    'restaurant reserveren',
    'online reserveren restaurant',
    'reserveringsplatform horeca',
    'tafel reserveren',
    'walk-in restaurant',
    'plattegrond restaurant',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} | Reserveringssoftware voor restaurants`,
    description:
      'Online tafelreservaties, plattegrond en admin. Voor restaurants, hotels en zaalverhuur. Start gratis.',
    type: 'website',
    locale: 'nl_BE',
    url: siteUrl,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Reserveringssoftware`,
    description: 'Online tafelreservaties en reserveringsbeheer voor horeca.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tMipGDvnOGdkd-YO6Uqp6WL66p9GsxC6Y',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
