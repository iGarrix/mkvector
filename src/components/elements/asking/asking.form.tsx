'use client'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { AskingLocalizationSchema, AskingValues } from './asking.types'
import { zodResolver } from '@hookform/resolvers/zod'
import ZodField from '@/components/commons/fields/zodField/zodField.component'
import Button from '@/components/commons/button/button.component'
interface Params {
	locale_data: any
	onClose: (open: boolean) => void
}
function AskingForm({ locale_data, ...params }: Params) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<AskingValues>({
		defaultValues: {
			name: '',
			email: '',
		},
		resolver: zodResolver(AskingLocalizationSchema),
	})
	const onSubmit = (props: AskingValues) => {
		setTimeout(() => {
			params.onClose(false)
		}, 1000)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={'flex flex-col gap-4'}>
				<ZodField
					type='text'
					{...register('name')}
					upperPlaceholder={locale_data.inputName.label}
					placeholder={locale_data.inputName.placeholder}
					errorMessage={
						errors.name?.message && locale_data.inputName[errors.name.message]
					}
				/>
				<ZodField
					type='text'
					{...register('email')}
					upperPlaceholder={locale_data.inputEmail.label}
					placeholder={locale_data.inputEmail.placeholder}
					errorMessage={
						errors.email?.message &&
						locale_data.inputEmail[errors.email.message]
					}
				/>
			</div>
			<br />
			<div className='flex justify-end'>
				<Button
					type='submit'
					disabled={isSubmitSuccessful}
					className={cn(isSubmitSuccessful && 'bg-emerald-400 text-light')}>
					{isSubmitSuccessful
						? 'Питання надіслано!'
						: locale_data.submit.placeholder}
				</Button>
			</div>
		</form>
	)
}

export default AskingForm
