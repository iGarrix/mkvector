'use client'
import { languageRedirect } from '@/components/Link/link.types'
import { Locale } from '@/config/i18.config'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ComponentPropsWithoutRef } from 'react'
interface IBlogCardLinkProps extends ComponentPropsWithoutRef<'button'> {
	href: string
	locale: Locale
}

function BlogCardAction({
	className,
	children,
	href,
	locale,
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
				push(languageRedirect(locale, href))
			}}>
			{children}
		</button>
	)
}

export default BlogCardAction
