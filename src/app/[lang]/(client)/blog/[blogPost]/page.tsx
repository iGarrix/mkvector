import { getDictionary } from '@/config/dictionary'
import BlogPostClientPage from './blogpost.client'
import { Locale } from '@/config/i18.config'
import { Metadata } from 'next'
import { BlogPreviewType, blogsPreview } from '@/api/blogs'
import { opengraph } from '@/lib/metadata.helper'

export async function generateMetadata(props: {
	params: { lang: Locale; blogPost: number }
}): Promise<Metadata> {
	const { pages } = await getDictionary(props.params.lang)
	const post: BlogPreviewType | null = blogsPreview[props.params.blogPost]
	if (post) {
		return {
			title: post.title,
			description: post.detail,
			metadataBase: new URL(
				process.env.NEXT_PUBLIC_URL || 'https://nextjs.org'
			),
			...opengraph({
				title: post.title,
				description: post.detail,
			}),
		}
	}
	return {
		title: pages['/blog']['[notfound]'].title,
		description: `${pages['/blog']['[notfound]'].return1} ${pages['/blog']['[notfound]'].return2}`,
	}
}

export default async function BlogPostPage(props: {
	params: { blogPost: number; lang: Locale }
}) {
	const data = await getDictionary(props.params.lang)
	return (
		<BlogPostClientPage
			routePost={props.params.blogPost}
			lang={props.params.lang}
			languagedata={Object.assign({ root: data.pages['/blog'] })}
		/>
	)
}
