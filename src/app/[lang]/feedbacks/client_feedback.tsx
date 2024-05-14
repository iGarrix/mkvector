'use client'
import s from './feedback.style.module.scss'
import { FeedbackForm } from './feedback.form'
import FeedbackCard, {
	IFeedbackCardProps,
} from '@/components/commons/cards/feedbackCard/feedbackCard.component'
import { ImageProps } from 'next/image'

interface Feedback {
	image: Omit<ImageProps, 'alt'>
	name: string
	stars: IFeedbackCardProps['stars']
	status: string
	date: Date
	content: string
}

const feedbackArray: Feedback[] = [
	{
		image: {
			src: 'https://mkvector.com/wp-content/uploads/1-5.jpg',
		},
		name: 'Максим',
		stars: 5,
		status: 'Покупець',
		date: new Date(2024, 3, 2),
		content:
			'Замовили гардероб в передпокій. Зроблено швидко і круто. Цілком задоволений. Порадила кума. Сподіваюся, не підведе',
	},
	{
		image: {
			src: 'https://mkvector.com/wp-content/uploads/2-6.jpg',
		},
		name: 'Анна',
		stars: 5,
		status: 'Покупець',
		date: new Date(2024, 4, 2),
		content:
			'Замовляла комп`ютерний стіл в МК Вектор, дуже задоволена - ціна, якість дизайн, терміни виконання робіт. Всі мої побажання були враховані. Отримала саме те, що хотіла - ідеальне і комфортне місце для продуктивної роботи вдома! Дякую!',
	},
	{
		image: {
			src: 'https://mkvector.com/wp-content/uploads/3-4.jpg',
		},
		name: 'Тетяна',
		stars: 5,
		status: 'Покупець',
		date: new Date(2023, 10, 23),
		content:
			'Ми замовили кухонні меблі, завдяки Mk Vector для консультації, розробки дизайну і реалізації, через 2 тижні все було готово, як хотілося.',
	},
	{
		image: {
			src: 'https://mkvector.com/wp-content/uploads/hotpng.com_-2.png',
		},
		name: 'Тетяна',
		stars: 5,
		status: 'Покупець',
		date: new Date(2023, 9, 14),
		content:
			'Ми замовили меблі в дитячу кімнату. Вони допомогли нам з проектом, вони реалізували всі побажання. Все зроблено якісно і вчасно! Монтаж і монтаж теж варто відзначити - швидко і чисто! Ми зв`яжемося і порекомендуємо друзів!',
	},
	{
		image: {
			src: 'https://mkvector.com/wp-content/uploads/hotpng.com_-2.png',
		},
		name: 'Анастасія',
		stars: 5,
		status: 'Покупець',
		date: new Date(2023, 10, 23),
		content:
			'Якщо ви хочете взяти роботу, вам доведеться взяти роботу, і ви побачите результати на іншій стороні велосипеда. Дякую за гарну консультацію',
	},
]

export default function FeedbackClient() {
	return (
		<main className={s.cont}>
			<section className={s.sect1}>
				<aside className={s.s1}>
					<h1 className='text-4xl font-black uppercase'>Відгуки</h1>
					<p>Відгуки наших клієнтів, ви також можете залишити свій відгук</p>
				</aside>
				<aside className={s.s2}>
					<FeedbackForm />
				</aside>
			</section>
			<section className={s.sect2}>
				{feedbackArray.map(({ image, ...item }, key) => (
					<FeedbackCard
						key={key}
						image={{ alt: `${key}_image_feedback`, ...image }}
						{...item}
					/>
				))}
			</section>
		</main>
	)
}
