'use client'
import { ComponentPropsWithoutRef, useId } from 'react'
import { cn } from '@/lib/utils'
import s from './zodField.style.module.scss'
import React from 'react'
import { AlertCircleIcon } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { ZodProps } from '../zodProps'
interface IZodFieldProps extends ComponentPropsWithoutRef<'input'>, ZodProps {}

const ZodField = React.forwardRef<HTMLInputElement, IZodFieldProps>(
	(
		{ className, errorMessage, upperPlaceholder, ...props }: IZodFieldProps,
		ref
	) => {
		const id = useId()
		return (
			<div className={cn(s.cont, !!errorMessage && s.error)}>
				<label htmlFor={id}>
					{upperPlaceholder}{' '}
					{!!errorMessage && (
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<AlertCircleIcon className='text-rose-500' />
								</TooltipTrigger>
								<TooltipContent className='border text-rose-500 shadow-none'>
									{errorMessage}
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)}
				</label>
				<input className={cn(className)} ref={ref} {...props} id={id} />
				{/* { */}
			</div>
		)
	}
)

// function ZodField({
// 	className,
// 	children,
// 	placeholder,
// 	errorMessage,
// 	ref,
// 	...props
// }: IZodFieldProps) {
// 	const id = useId()
// 	return (
// 		<div className={s.cont}>
// 			<label htmlFor={id}>{placeholder}</label>
// 			<input
// 				className={cn(className)}
// 				placeholder={placeholder}
// 				ref={ref}
// 				{...props}
// 				id={id}
// 			/>
// 			{!!errorMessage && <span className='text-red-500'>{errorMessage}</span>}
// 		</div>
// 	)
// }
export default ZodField
