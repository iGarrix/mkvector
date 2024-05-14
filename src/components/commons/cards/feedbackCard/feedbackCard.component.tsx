'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'
import s from './feedbackCard.style.module.scss'
import { Star } from 'lucide-react'
import { format } from 'date-fns'

export interface IFeedbackCardProps
	extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
	image: Omit<ImageProps, 'alt' & 'width' & 'height' & 'priority'>
	name: string
	status: string
	stars: 1 | 2 | 3 | 4 | 5
	date: Date
	content: string
}

function FeedbackCard({
	className,
	image,
	name,
	status,
	stars,
	date,
	content,
	...props
}: IFeedbackCardProps) {
	return (
		<div className={cn(s.cont, className)} {...props}>
			<Image width={0} height={0} priority sizes='250px' {...image} />
			<aside className={s.s1}>
				<section>
					<h2 className={s.title}>{name}</h2>
					<p className={s.status}>{status}</p>
				</section>
			</aside>
			<aside className={s.s2}>
				<section className={s.heading}>
					<div className='flex gap-1'>
						{[...Array(stars)].map((item, key) => (
							<Star key={key} />
						))}
					</div>
					<p>{format(date, 'dd.MM.yyyy')}</p>
				</section>
				<p className={s.content}>{content}</p>
			</aside>
		</div>
	)
}

FeedbackCard.DEF = <></>
export default FeedbackCard
