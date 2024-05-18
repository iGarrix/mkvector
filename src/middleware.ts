import { chain } from '@/middlewares/chain'
import { withI18nMiddleware } from '@/middlewares/middleware_i18'

export default chain([withI18nMiddleware])

// Worked without i18n middleware
// '/((?!api|_next/static|_next/image|public/|favicon.ico|robots.txt|sitemap.xml).*)'
export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|public/|favicon.ico|robots.txt|sitemap.xml|manifest.json|manifest.webmanifest|pwa-image-192.png|pwa-image-512.png|favicon-.*.png).*)',
	],
}
// Worked
// /((?!api|_next/static|_next/image|favicon.ico|robots.txt|ads.txt|sitemap.xml|manifest.json|android-chrome-192x192.png|apple-touch-icon.png|browserconfig.xml|mstile-150x150.png|safari-pinned-tab.svg|site.webmanifest|favicon-.*.png).*)
