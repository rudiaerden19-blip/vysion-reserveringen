export const SITE_NAME = 'TableVysion'

export const MAIN_PLATFORM_URL = 'https://www.vysion-kassa.com'

export const LOGIN_URL = `${MAIN_PLATFORM_URL}/login?lang=nl`

/** Alleen TableVysion-registratie op deze site — geen 4 pakketten op kassa. */
export const REGISTER_URL = '/registreer'

export const KASSA_REGISTER_API = `${MAIN_PLATFORM_URL}/api/auth/register`

export const PRODUCT_LINE = 'restaurant_reservaties' as const
