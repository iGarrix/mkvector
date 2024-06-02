'use client'

import { Locale } from '@/config/i18.config'
import s from '../../portfolio.style.module.scss'
import { Work, works } from '@/api/works'
import { useEffect, useState } from 'react'
import { Loader } from 'lucide-react'
import Link from '@/components/Link/link.component'
import { usePathname } from 'next/navigation'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
interface IPostClientParams {
	locale: Locale
	langdata: any
	post: number
}

export default function PostClientPage({ ...props }: IPostClientParams) {
	const pathname = usePathname()
	const [currently, setCurrently] = useState<Work | null | 'loading'>('loading')

	useEffect(() => {
		if (!currently || currently === 'loading') {
			const find = works[props.post]
			if (find) {
				setCurrently(find)
			} else {
				setCurrently(null)
			}
		}
	}, [currently])

	if (currently === 'loading') {
		return (
			<main className={s.notfoundContainer}>
				<Loader className='animate-spin' />
			</main>
		)
	}
	if (!currently) {
		return (
			<main className={s.notfoundContainer}>
				<h1>nf</h1>
				<div>
					<Link
						href={'/' + pathname.split('/').slice(2, -1).join('/')}
						lang={props.locale}>
						return away
					</Link>
				</div>
			</main>
		)
	}

	return (
		<main className={s.servicePostContainer}>
			<section className={s.sect1}>
				<aside className={s.s1}>
					<h1 className='text-4xl font-black uppercase'>{currently.title}</h1>
					<p>{currently.details}</p>
				</aside>
				<aside className={s.s2}></aside>
			</section>
			<section className='border-b'>
				<Carousel className={s.carousel} opts={{ align: 'start' }}>
					<CarouselContent className={s.content}>
						{[currently.previewImage, ...currently.images].map((item, key) => (
							<CarouselItem
								key={key}
								className='flex items-center justify-center min-h-[300px] basis-1/2 xs:basis-auto xs:w-full md:w-auto md:basis-1/2'>
								<Image
									src={item}
									alt={`${key}_image_post`}
									width={0}
									height={0}
									priority
									sizes='350px'
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
			<section className={s.steps}>
				{currently.steps.map((item, key) => (
					<aside key={key}>
						<div className='w-[3.5rem] h-[3.5rem] bg-accent/10 p-4 rounded-xl text-accent flex items-center justify-center'>
							<item.icon className='w-[3rem] h-[3rem]' />
						</div>
						<div>
							<h2 className='uppercase'>{item.heading}</h2>
							<p>{item.description}</p>
						</div>
					</aside>
				))}
			</section>
		</main>
	)
}
