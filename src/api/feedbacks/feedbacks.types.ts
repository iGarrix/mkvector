import { z } from 'zod'

export const FeedbackSchema = z.object({
	name: z.string().min(3, { message: 'min_error' }),
	content: z
		.string()
		.min(10, { message: 'min_error' })
		.max(100, { message: 'max_error' }),
})

export type FeedbackValues = z.infer<typeof FeedbackSchema>
