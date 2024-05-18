import { getDictionary } from '@/config/dictionary'
import BlogPostClientPage from './blogpost.client'
import { Locale } from '@/config/i18.config'

export default async function BlogPostPage(props: {
	params: { blogPost: number; lang: Locale }
}) {
	const data = await getDictionary(props.params.lang)
	return (
		<BlogPostClientPage routePost={props.params.blogPost} languagedata={data} />
	)
}
