import { Locale } from '@/config/i18.config'
import PortfolioClientPage from './portfolio.client'
import { getDictionary } from '@/config/dictionary'
import { opengraph } from '@/lib/metadata.helper'
import { Metadata } from 'next'

export async function generateMetadata(props: {
	params: { lang: Locale }
}): Promise<Metadata> {
	const { metadata } = await getDictionary(props.params.lang)
	return {
		title: metadata['/portfolio'].title,
		description: metadata['/portfolio'].description,
		metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'https://nextjs.org'),
		...opengraph({
			title: metadata['/portfolio'].title,
			description: metadata['/portfolio'].description,
		}),
	}
}

export default async function PortfolioPage(props: {
	params: { lang: Locale }
}) {
	const langdata = await getDictionary(props.params.lang)
	return (
		<PortfolioClientPage
			locale={props.params.lang}
			langdata={Object.assign(
				{ root: langdata.pages['/portfolio'] },
				{
					services: langdata.globalHeader.navigation.portfolio.subset,
				}
			)}
		/>
	)
}
