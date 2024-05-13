'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import Image, { type ImageProps } from 'next/image'
import { useRouter } from 'next/navigation'
interface IBlogCardImageProps
	extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
	image: Omit<ImageProps, 'width' & 'height'>
	href?: string
}

function BlogCardImage({
	className,
	image,
	href,
	onClick,
	...props
}: IBlogCardImageProps) {
	const { push } = useRouter()
	return (
		<div
			className={cn(
				'flex items-center justify-center bg-light-200 rounded h-[200px] overflow-hidden',
				href && 'cursor-pointer',
				className
			)}
			onClick={(e: any) => {
				if (href) {
					push(href)
				}
				onClick?.(e)
			}}
			{...props}>
			<Image
				className={cn('w-[200px] h-[200px] object-contain', image.className)}
				width={200}
				height={200}
				priority
				{...image}
			/>
		</div>
	)
}
export default BlogCardImage
