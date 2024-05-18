import { Locale } from '@/config/i18.config'
import PortfolioClientPage from './portfolio.client'
import { getDictionary } from '@/config/dictionary'

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
