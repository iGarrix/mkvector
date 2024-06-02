'use client'

import BlogCard from '@/components/commons/cards/blogCard/blog_card.component'
import s from '../portfolio.style.module.scss'
import { Locale } from '@/config/i18.config'
import { useEffect, useState } from 'react'
import { Work, works } from '@/api/works'
import { Loader } from 'lucide-react'
import Link from '@/components/Link/link.component'

interface IServiceParams {
	locale: Locale
	langdata: any
	service: string
}

export default function ServiceClientPage({
	langdata,
	...props
}: IServiceParams) {
	const [services, setServices] = useState<Work[] | null | 'loading'>('loading')
	useEffect(() => {
		if (!services || services === 'loading') {
			const find = works.filter(f => f.type === props.service)
			if (find && find.length > 0) {
				setServices(find)
			} else {
				setServices(null)
			}
		}
	}, [services])

	if (services === 'loading') {
		return (
			<main className={s.notfoundContainer}>
				<Loader className='animate-spin' />
			</main>
		)
	}

	if (!services) {
		return (
			<main className={s.notfoundContainer}>
				<h1>{langdata.root['[notfound]'].title}</h1>
				<div>
					<Link href='/portfolio' lang={props.locale}>
						{langdata.root['[notfound]'].return}
					</Link>
				</div>
			</main>
		)
	}

	return (
		<main className={s.serviceContainer}>
			{services.map((item, key) => (
				<BlogCard key={key}>
					<BlogCard.Image
						href='/'
						image={{
							src: item.previewImage,
							alt: `${key}_service_img`,
						}}
					/>
					<BlogCard.Title>{item.title}</BlogCard.Title>
					<BlogCard.Action
						locale={props.locale}
						href={`/portfolio/${props.service}/${key}`}>
						{langdata.root.action}
					</BlogCard.Action>
				</BlogCard>
			))}
		</main>
	)
}
