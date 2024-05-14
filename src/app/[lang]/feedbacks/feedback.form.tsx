'use client'

import { useForm } from 'react-hook-form'
import s from './feedback.style.module.scss'
import { FeedbackSchema, FeedbackValues } from '@/api/feedbacks/feedbacks.types'
import { zodResolver } from '@hookform/resolvers/zod'
import ZodField from '@/components/commons/fields/zodField/zodField.component'
import Button from '@/components/commons/button/button.component'
import ZodFieldArea from '@/components/commons/fields/zodFieldArea/zodFieldArea.component'
import { cn } from '@/lib/utils'

export const FeedbackForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful, isValid },
	} = useForm<FeedbackValues>({
		defaultValues: {
			name: '',
			content: '',
		},
		resolver: zodResolver(FeedbackSchema),
	})

	const onSubmit = (props: FeedbackValues) => {}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.feedbackForm}>
			<div className={s.fieldContainer}>
				<ZodField
					type='text'
					{...register('name')}
					upperPlaceholder={`Ім'я`}
					placeholder='Введіть ім`я'
					errorMessage={errors.name?.message}
				/>
				<ZodFieldArea
					{...register('content')}
					upperPlaceholder='Відгук'
					placeholder='Напишіть відгук'
					errorMessage={errors.content?.message}
				/>
			</div>
			<Button
				type='submit'
				disabled={isSubmitSuccessful}
				className={cn(isSubmitSuccessful && 'bg-emerald-400 text-light')}>
				{isSubmitSuccessful ? 'Відгук надіслано!' : 'Залишити відгук'}
			</Button>
		</form>
	)
}
