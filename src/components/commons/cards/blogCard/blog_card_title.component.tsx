'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
interface IBlogCardTitleProps extends ComponentPropsWithoutRef<'h2'> {}

function BlogCardTitle({ className, children, ...props }: IBlogCardTitleProps) {
	return (
		<h2
			className={cn(
				'font-semibold text-lg line-clamp-2 whitespace-pre-wrap text-balance leading-6',
				className
			)}
			{...props}>
			{children}
		</h2>
	)
}

export default BlogCardTitle
