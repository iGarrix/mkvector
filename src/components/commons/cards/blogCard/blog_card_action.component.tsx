'use client'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ComponentPropsWithoutRef } from 'react'
interface IBlogCardLinkProps extends ComponentPropsWithoutRef<'button'> {
	href: string
}

function BlogCardAction({
	className,
	children,
	href,
	...props
}: IBlogCardLinkProps) {
	const { push } = useRouter()
	return (
		<button
			className={cn(
				'text-accent mt-auto text-start hover:underline underline-offset-4',
				className
			)}
			{...props}
			onClick={() => {
				push(href)
			}}>
			{children}
		</button>
	)
}

export default BlogCardAction
