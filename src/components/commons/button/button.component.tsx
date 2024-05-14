'use client'
import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'
import s from './button.style.module.scss'
interface IButtonProps extends ComponentPropsWithoutRef<'button'> {}

function Button({ className, children, ...props }: IButtonProps) {
	return (
		<button className={cn(s.container, className)} {...props}>
			{children}
		</button>
	)
}

export default Button
