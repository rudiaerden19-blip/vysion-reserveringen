export function internalShopPathToTenantHostPath(internalPath: string, tenantSlug: string): string {
  const qIndex = internalPath.indexOf('?')
  const pathOnly = qIndex === -1 ? internalPath : internalPath.slice(0, qIndex)
  const search = qIndex === -1 ? '' : internalPath.slice(qIndex)

  const m = pathOnly.match(/^\/shop\/([^/]+)(\/.*)?$/)
  if (!m) return '/welkom'
  const pathSlug = m[1].toLowerCase().trim()
  const slug = tenantSlug.toLowerCase().trim()
  const rest = m[2] || ''
  if (pathSlug !== slug) return '/welkom'

  if (!rest) return search ? `/${search}` : '/welkom'
  const pathPart = rest.startsWith('/') ? rest : `/${rest}`
  return `${pathPart}${search}`
}
