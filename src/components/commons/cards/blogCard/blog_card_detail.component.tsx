'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
interface IBlogCardDetailProps extends ComponentPropsWithoutRef<'p'> {}

function BlogCardDetail({
	className,
	children,
	...props
}: IBlogCardDetailProps) {
	return (
		<p
			className={cn(
				'text-zinc-400 text-sm text-balance line-clamp-4',
				className
			)}
			{...props}>
			{children}
		</p>
	)
}

export default BlogCardDetail
