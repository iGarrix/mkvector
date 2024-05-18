'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import s from './portfolio_card.style.module.scss'
interface IPortfolioCardTitleProps extends ComponentPropsWithoutRef<'h2'> {}

function PortfolioCardTitle({
	className,
	children,
	...props
}: IPortfolioCardTitleProps) {
	return (
		<h2 className={cn(s.title, className)} {...props}>
			{children}
		</h2>
	)
}

PortfolioCardTitle.DEF = <></>
export default PortfolioCardTitle
