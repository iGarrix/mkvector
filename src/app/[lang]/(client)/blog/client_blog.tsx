'use client'

import BlogCard from '@/components/commons/cards/blogCard/blog_card.component'
import s from './blog.style.module.scss'
import { IBlogProps, blogsPreview } from '@/api/blogs'

export default function ClientBlog({ languagedata, ...props }: IBlogProps) {
	return (
		<main className={s.cont}>
			<section className={s.section1}>
				<h1>{languagedata.root.title}</h1>
			</section>
			<section className={s.section2}>
				{blogsPreview.map((item, key) => (
					<BlogCard key={key}>
						<BlogCard.Image
							href='/'
							image={{
								src: item.img,
								alt: `${key}_blog_img`,
							}}
						/>
						<BlogCard.Title>{item.title}</BlogCard.Title>
						<BlogCard.Detail>{item.detail}</BlogCard.Detail>
						<BlogCard.Action locale={languagedata.locale} href={`/blog/${key}`}>
							{languagedata.blogcard.action}
						</BlogCard.Action>
					</BlogCard>
				))}
			</section>
		</main>
	)
}
