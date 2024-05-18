import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { CustomMiddleware } from './chain'
import { i18n } from '@/config/i18.config'

function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {}
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
	// @ts-ignore locales are readonly
	const locales: string[] = i18n.locales
	const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

	const locale = matchLocale(languages, locales, i18n.defaultLocale)
	return locale
}

export function middleware(request: NextRequest) {}

export function withI18nMiddleware(middleware: CustomMiddleware) {
	return async (
		request: NextRequest,
		event: NextFetchEvent,
		response: NextResponse
	) => {
		const pathname = request.nextUrl.pathname
		const pathnameIsMissingLocale = i18n.locales.every(
			(locale: any) =>
				!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
		)
		if (pathnameIsMissingLocale) {
			const locale = i18n.defaultLocale //getLocale(request)
			const url: URL = new URL(
				`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
				request.url
			)
			// When current lang the same as default, link will be pure as regard lang
			// if (locale === i18n.defaultLocale) {
			// 	return NextResponse.rewrite(url)
			// }
			return NextResponse.redirect(url)
		}

		return middleware(request, event, response)
	}
}
