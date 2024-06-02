'use client'
import { useEffect, useState } from 'react'
import s from './blogpost.style.module.scss'
import { BlogType, blogs } from '@/api/blogs'
import { Locale } from '@/config/i18.config'
import Link from '@/components/Link/link.component'
import { ChevronRight, Loader } from 'lucide-react'

interface IBlogPostPageParams {
	routePost: number
	languagedata: any
	lang: Locale
}

export default function BlogPostClientPage({
	routePost,
	languagedata,
	...params
}: IBlogPostPageParams) {
	const [post, setPost] = useState<BlogType | null | 'loading'>('loading')
	useEffect(() => {
		if (!post || post === 'loading') {
			const find = blogs[routePost]
			if (find) {
				setPost(find)
			} else {
				setPost(null)
			}
		}
	}, [post])

	if (post === 'loading') {
		return (
			<main className={s.notfoundContainer}>
				<Loader className='animate-spin' />
			</main>
		)
	}

	if (!post) {
		return (
			<main className={s.notfoundContainer}>
				<h1>{languagedata.root['[notfound]'].title}</h1>
				<div>
					<span>{languagedata.root['[notfound]'].return1}</span>{' '}
					<Link href='/blog' lang={params.lang}>
						{languagedata.root['[notfound]'].return2}
					</Link>
				</div>
			</main>
		)
	}

	return (
		<main className={s.container}>
			<section className={s.sect1}>
				<aside className={s.s1}>
					<h1>{post.preview.title}</h1>
					<br />
					<p>{post.preview.detail}</p>
				</aside>
				<aside className={s.s2}>
					<Link href='/blog' lang={params.lang} className='group/glink'>
						{languagedata.root.redirect}
						<ChevronRight className='transition-all group-hover/glink:translate-x-1' />
					</Link>
				</aside>
			</section>
			<div className={s.wrapperSect2}>
				{post.article.map((item, key) => (
					<article key={key} className={s.sect2}>
						<h2>{item.title}</h2>
						<br />
						<p className='flex flex-col'>
							{item.content.map((item, key2) => (
								<span key={key2}>{item}</span>
							))}
						</p>
					</article>
				))}
			</div>
		</main>
	)
}
