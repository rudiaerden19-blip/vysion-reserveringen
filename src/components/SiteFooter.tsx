import { MAIN_PLATFORM_URL, SITE_NAME } from '@/lib/site'

export default function SiteFooter() {
  return (
    <footer className="bg-dark text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <div>
            <span className="text-2xl font-bold text-accent">{SITE_NAME}</span>
            <p className="text-gray-400 max-w-lg leading-relaxed mt-4">
              Reserveringssoftware voor horeca — online boeken, overzicht in admin, minder no-shows.
            </p>
            <address className="not-italic text-gray-400 mt-6 text-sm leading-relaxed">
              Vysion Group International
              <br />
              Siberiëstraat 24, 3900 Pelt, België
            </address>
          </div>
          <nav className="text-sm">
            <p className="font-semibold text-white mb-3">Platform</p>
            <a href={MAIN_PLATFORM_URL} className="text-accent hover:underline block mb-2">
              www.vysion-kassa.com
            </a>
            <p className="text-gray-500 mt-6 text-xs">
              Technologie en registratie via Vysion kassa. TableVysion is het reserveringsmerk.
            </p>
          </nav>
        </div>
        <p className="text-gray-500 text-sm border-t border-gray-800 pt-8">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  )
}
