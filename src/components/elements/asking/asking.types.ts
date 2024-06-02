import { z } from 'zod'

export const AskingLocalizationSchema = z.object({
	name: z.string().min(1, { message: 'asking_name_required' }),
	email: z.string().email('asking_email_invalid'),
})

export type AskingValues = z.infer<typeof AskingLocalizationSchema>
