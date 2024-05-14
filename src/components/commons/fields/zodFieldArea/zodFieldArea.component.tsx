'use client'
import { ComponentPropsWithoutRef, useId } from 'react'
import { cn } from '@/lib/utils'
import s from './zodFieldArea.style.module.scss'
import React from 'react'
import { AlertCircleIcon } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { ZodProps } from '../zodProps'
interface IZodFieldAreaProps
	extends ComponentPropsWithoutRef<'textarea'>,
		ZodProps {}

const ZodFieldArea = React.forwardRef<HTMLTextAreaElement, IZodFieldAreaProps>(
	(
		{ className, errorMessage, upperPlaceholder, ...props }: IZodFieldAreaProps,
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
				<textarea className={cn(className)} ref={ref} {...props} id={id} />
			</div>
		)
	}
)

export default ZodFieldArea
