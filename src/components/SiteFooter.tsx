import Link from 'next/link'
import { MAIN_PLATFORM_URL, OFFICIAL_SITE_URL, SITE_NAME } from '@/lib/site'

const footerLinkClass = 'text-gray-400 hover:text-white transition-colors'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-dark py-8 text-white sm:py-10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-8 md:grid-cols-3 md:gap-6">
          <div>
            <p className="text-xl font-bold text-accent">{SITE_NAME}</p>
            <address className="mt-4 not-italic text-sm leading-snug text-gray-400">
              <span className="font-semibold text-white">Adres:</span>
              <br />
              Vysion Group International
              <br />
              Siberiëstraat 24
              <br />
              3900 Pelt, België
              <br />
              BTW BE 1003.226.953
            </address>
            <div className="mt-4 flex flex-col gap-1.5 text-sm">
              <a
                href="https://www.vysionapps.io"
                className="font-medium text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.vysionapps.io
              </a>
              <a href={OFFICIAL_SITE_URL} className="font-medium text-accent hover:underline">
                {SITE_NAME} — officiële website
              </a>
              <a
                href="https://www.webvysion.tech"
                className="font-medium text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.webvysion.tech
              </a>
            </div>
          </div>

          <nav aria-label="Product">
            <p className="mb-2 font-semibold text-white">Product</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#functies" className={footerLinkClass}>
                  Functies &amp; platform
                </Link>
              </li>
              <li>
                <Link href="/#prijzen" className={footerLinkClass}>
                  Prijzen
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Bedrijf">
            <p className="mb-2 font-semibold text-white">Bedrijf</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`${MAIN_PLATFORM_URL}/over-ons`} className={footerLinkClass}>
                  Over ons
                </a>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/#contact`} className={footerLinkClass}>
                  Contact
                </a>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/support`} className={footerLinkClass}>
                  Support
                </a>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/privacy`} className={footerLinkClass}>
                  Privacy
                </a>
              </li>
              <li>
                <a href={`${MAIN_PLATFORM_URL}/juridisch`} className={footerLinkClass}>
                  Juridisch
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Vysion Group. Alle rechten voorbehouden.
          </p>
          <p>Design by Vysion</p>
        </div>
      </div>
    </footer>
  )
}
