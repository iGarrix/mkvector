import { getDictionary } from '@/config/dictionary'
import FeedbackClient from './client_feedback'
import { Locale } from '@/config/i18.config'

export default async function Feedbacks(props: { params: { lang: Locale } }) {
	const data = await getDictionary(props.params.lang)
	return (
		<FeedbackClient
			data={data.forms}
			pageData={data.pages['/feedbacks']}
			feedbackCardData={data.components.cards.feedbackCard}
		/>
	)
}
