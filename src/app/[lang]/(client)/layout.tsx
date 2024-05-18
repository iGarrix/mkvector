import type { Metadata } from 'next'
import style from './layout.style.module.scss'
import Header from '@/components/elements/header/header.component'
import { Footer } from '@/components/elements/footer/footer.component'
import { getDictionary } from '@/config/dictionary'
import { Locale } from '@/config/i18.config'

export default async function ClientLayout(props: {
	children: React.ReactNode
	params: { lang: Locale }
}) {
	const locale = await getDictionary(props.params.lang)
	return (
		<main className={style.container}>
			<Header
				locale={props.params.lang}
				datalocale={[locale.globalHeader, locale.routing]}
			/>
			<div className={style.wrapper}>{props.children}</div>
			<Footer
				languagedata={Object.assign(
					{ footerdata: locale.globalFooter },
					{
						assigndata: {
							global: locale.global,
							routing: locale.routing,
						},
						locale: props.params.lang,
					}
				)}
			/>
		</main>
	)
}
