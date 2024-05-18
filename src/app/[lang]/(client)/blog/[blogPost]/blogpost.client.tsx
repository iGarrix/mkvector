'use client'
import { useEffect, useState } from 'react'
import s from './blogpost.style.module.scss'
import { BlogType, blogsPreview } from '@/api/blogs'
import { notFound } from 'next/navigation'

interface IBlogPostPageParams {
	routePost: number
	languagedata: any
}

export default function BlogPostClientPage({
	routePost,
	languagedata,
	...params
}: IBlogPostPageParams) {
	const [post, setPost] = useState<BlogType | null>(null)

	useEffect(() => {
		if (!post) {
			const find = blogsPreview[routePost]
			if (find) {
				setPost(find)
			} else {
				notFound()
			}
		}
	}, [post])

	return (
		<main className={s.container}>
			<section className={s.sect1}>
				<aside className={s.s1}>
					<h1 className='text-4xl font-black uppercase'>{post?.title}</h1>
				</aside>
				<aside className={s.s2}></aside>
			</section>
		</main>
	)
}
