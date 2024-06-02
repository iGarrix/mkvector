import { Locale } from '@/config/i18.config'
import ClientMainPage from './client_page'
import { getDictionary } from '@/config/dictionary'

export default async function ClientPage(props: { params: { lang: Locale } }) {
	const data = await getDictionary(props.params.lang)
	return (
		<ClientMainPage
			locale={props.params.lang}
			locale_data={Object.assign({ root: data.pages['/'] })}
		/>
	)
}
