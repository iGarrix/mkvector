import { Locale, i18n } from '@/config/i18.config'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Mrs_Sheppards } from 'next/font/google'
import localFont from 'next/font/local'
import { getDictionary } from '@/config/dictionary'
import { opengraph } from '@/lib/metadata.helper'
const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }))
}

export async function generateMetadata(props: {
	params: { lang: Locale }
}): Promise<Metadata> {
	const { metadata } = await getDictionary(props.params.lang)

	return {
		title: {
			default: `${metadata['/'].title} — MKVector`,
			template: '%s — MKVector',
		},
		description: metadata['/'].description,
		applicationName: 'MKVector',
		referrer: 'origin-when-cross-origin',
		keywords: ['MKVector'],
		authors: [{ name: 'Illinpayne', url: 'https://webcraft.rivne.ua' }],
		creator: 'Stas Tarnogurskiy',
		publisher: 'Stas Tarnogurskiy',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://nextjs.org'),
		...opengraph({
			title: metadata['/'].title,
			description: metadata['/'].description,
		}),
	}
}
const sheppard = Mrs_Sheppards({
	variable: '--sheppard',
	subsets: ['latin'],
	weight: '400',
})
const proxima = localFont({
	variable: '--proxima',
	src: [
		{
			path: '../../assets/fonts/proximanova/ProximaNova-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-LightIt.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-RegularIt.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-SemiboldIt.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-BoldIt.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-Extrabld.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-ExtrabldIt.woff2',
			weight: '800',
			style: 'italic',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-Black.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../../assets/fonts/proximanova/ProximaNova-BlackIt.woff2',
			weight: '900',
			style: 'italic',
		},
	],
})

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { lang: Locale }
}>) {
	return (
		<html lang={params.lang}>
			<body
				className={`${proxima.className} ${proxima.variable} ${inter.variable} ${sheppard.variable} font-semibold`}>
				{children}
			</body>
		</html>
	)
}
