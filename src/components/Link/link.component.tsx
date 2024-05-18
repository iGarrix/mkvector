import { i18n } from '@/config/i18.config'
import OriginLink from 'next/link'

interface LanguageLinkProps {
	href: string
	lang: string
	children: React.ReactNode
	[key: string]: any
}

export default function Link({ href, lang, ...props }: LanguageLinkProps) {
	const isDefaultLang = lang === i18n.defaultLocale
	const path = isDefaultLang ? href : `/${lang}${href}`
	return <OriginLink href={path} {...props} />
}
