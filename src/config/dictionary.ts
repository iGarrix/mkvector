import 'server-only'
import { Locale } from './i18.config'

const dictionaries = {
	ua: () => import('@/dictionaries/ua.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
