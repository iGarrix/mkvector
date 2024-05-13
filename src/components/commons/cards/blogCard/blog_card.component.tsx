'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import BlogCardImage from './blog_card_image.component'
import BlogCardTitle from './blog_card_title.component'
import BlogCardDetail from './blog_card_detail.component'
import BlogCardAction from './blog_card_action.component'
interface IBlogCardProps extends ComponentPropsWithoutRef<'div'> {}

function BlogCard({ className, children, ...props }: IBlogCardProps) {
	return (
		<div
			className={cn('flex flex-col gap-4 min-w-[10rem]', className)}
			{...props}>
			{children}
		</div>
	)
}

BlogCard.Image = BlogCardImage
BlogCard.Title = BlogCardTitle
BlogCard.Detail = BlogCardDetail
BlogCard.Action = BlogCardAction
export default BlogCard
