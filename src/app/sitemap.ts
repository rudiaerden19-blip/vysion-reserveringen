import type { MetadataRoute } from 'next'
import { OFFICIAL_SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: OFFICIAL_SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${OFFICIAL_SITE_URL}/registreer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
