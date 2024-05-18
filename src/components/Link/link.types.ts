import { Locale, i18n } from '@/config/i18.config'

export function languageRedirect(locale: Locale, href: string) {
	const isDefaultLang = locale === i18n.defaultLocale
	return isDefaultLang ? href : `/${locale}${href}`
}
