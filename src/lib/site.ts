export const SITE_NAME = 'TableVysion'

export const OFFICIAL_SITE_URL = 'https://www.tablevysion.com'

export const MAIN_PLATFORM_URL = 'https://www.vysion-kassa.com'

export const ORDER_SITE_URL = 'https://www.vysionorder.com'

export const PRODUCT_LINE = 'restaurant_reservaties' as const

/** Intern pad op tablevysion.com; redirect naar platformlogin met productlijn. */
export const LOGIN_PATH = '/inloggen'

export const LOGIN_URL = `${MAIN_PLATFORM_URL}/login?lang=nl&productLine=${PRODUCT_LINE}`

/** Alleen TableVysion-registratie op deze site — geen 4 pakketten op kassa. */
export const REGISTER_URL = '/registreer'

export const KASSA_REGISTER_API = `${MAIN_PLATFORM_URL}/api/auth/register`
