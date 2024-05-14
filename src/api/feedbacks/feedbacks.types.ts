import { z } from 'zod'

export const FeedbackSchema = z.object({
	name: z.string().min(3, { message: 'Name must have at least 3 characters' }),
	content: z
		.string()
		.min(10, { message: 'Feedback must have at least 10 characters' })
		.max(100, { message: 'Feedback must have less then 100 characters' }),
})

export type FeedbackValues = z.infer<typeof FeedbackSchema>
