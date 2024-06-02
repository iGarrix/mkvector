'use client'

import { useForm } from 'react-hook-form'
import s from './feedback.style.module.scss'
import { FeedbackSchema, FeedbackValues } from '@/api/feedbacks/feedbacks.types'
import { zodResolver } from '@hookform/resolvers/zod'
import ZodField from '@/components/commons/fields/zodField/zodField.component'
import Button from '@/components/commons/button/button.component'
import ZodFieldArea from '@/components/commons/fields/zodFieldArea/zodFieldArea.component'
import { cn } from '@/lib/utils'

export const FeedbackForm: React.FC<any> = (props: any) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<FeedbackValues>({
		defaultValues: {
			name: '',
			content: '',
		},
		resolver: zodResolver(FeedbackSchema),
	})
	const onSubmit = (props: FeedbackValues) => {}
	const data = props.data.feedback
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.feedbackForm}>
			<div className={s.fieldContainer}>
				<ZodField
					type='text'
					{...register('name')}
					upperPlaceholder={data.inputName.label}
					placeholder={data.inputName.placeholder}
					errorMessage={
						errors.name?.message && data.inputName[errors.name.message]
					}
				/>
				<ZodFieldArea
					{...register('content')}
					upperPlaceholder={data.inputContent.label}
					placeholder={data.inputContent.placeholder}
					errorMessage={
						errors.content?.message && data.inputContent[errors.content.message]
					}
				/>
			</div>
			<Button
				type='submit'
				disabled={isSubmitSuccessful}
				className={cn(isSubmitSuccessful && 'bg-emerald-400 text-light')}>
				{isSubmitSuccessful ? 'Відгук надіслано!' : data.submit.placeholder}
			</Button>
		</form>
	)
}
