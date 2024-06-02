'use client'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Image, { type ImageProps } from 'next/image'
import s from './portfolio_card.style.module.scss'
import PortfolioCardTitle from './portfolio_card_title.component'
import { useRouter } from 'next/navigation'
import { languageRedirect } from '@/components/Link/link.types'
import { Locale } from '@/config/i18.config'
interface IPortfolioCardProps
	extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
	image: Omit<ImageProps, 'alt' & 'width' & 'height' & 'priority'>
	cardTitle: ReactNode
	href: string
	locale: Locale
}

function PortfolioCard({
	className,
	image,
	cardTitle,
	href,
	locale,
	...props
}: IPortfolioCardProps) {
	const { push } = useRouter()
	return (
		<div
			className={cn(s.cont, className)}
			{...props}
			onClick={(e: any) => {
				props.onClick?.(e)
				push(languageRedirect(locale, href))
			}}>
			<aside>
				<Image width={0} height={0} priority sizes='250px' {...image} />
			</aside>
			<div className={s.wrap}>{cardTitle}</div>
		</div>
	)
}

PortfolioCard.Title = PortfolioCardTitle
export default PortfolioCard
