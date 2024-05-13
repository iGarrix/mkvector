'use client'

import BlogCard from '@/components/commons/cards/blogCard/blog_card.component'
import s from './blog.style.module.scss'
const blogsPreview: Array<{
	img: string
	title: string
	detail: string
}> = [
	{
		img: 'https://mkvector.com/wp-content/uploads/xsmall-kitchen-ideas-1-768x768.jpg.pagespeed.ic.G8zwhC55Bo.webp',
		title: 'Як використовувати обмежений простір кухні по максимуму',
		detail:
			'Кутові шафи, Використання кухонних фартуків, Дротовий посуд, Стеллаж для сушіння посуду, Корзина для мусора',
	},
	{
		img: 'https://mkvector.com/wp-content/uploads/2019/12/salon-bibliotheque-768x441.jpg',
		title: 'Книжкові шафи в інтер’єрі',
		detail:
			'Организація по кольору, Використання старинного стилю, Використання рослин в вашему декорі, Використання сторонніх об`єктів, Про декорі дитячих книжкових полиць,',
	},
	{
		img: 'https://mkvector.com/wp-content/uploads/2019/12/изображение_viber_2019-12-12_16-23-43.jpg',
		title: 'Баффелі — новый тренд интер’єру',
		detail: 'Який розмір бафелів вибрати, Які розміри баффелів ми виробляємо?',
	},
	{
		img: 'https://mkvector.com/wp-content/uploads/2019/12/Screenshot_12.jpg',
		title: 'Тумба під телевізор для спальні — як підібрати і замовити',
		detail:
			'Тумби під телевізор в спальню на замовлення, Урахування функціоналу',
	},
	{
		img: 'https://mkvector.com/wp-content/uploads/kitchen-design-modern-contemporary.jpg',
		title: '5 порад, перш ніж замовляти меблі для кухні',
		detail:
			'У цій статті ви отримаєте 5 найбільш корисних порад як уникнути помилки при замовленні меблів для кухні, які допоможуть вам не упустити важливі ключові моменти при замовленні',
	},
	{
		img: 'https://mkvector.com/wp-content/uploads/изображение_viber_2020-04-24_08-25-50-1.jpg',
		title: 'Гардеробна на замовлення на что звернути увагу і як вібрати',
		detail:
			'Які виміри необхідно зробити перед установкою гардероба, Де потрібно встановлювати гардероб, Якого кольору повинна бути моя гардеробна',
	},
	{
		img: 'https://mkvector.com/wp-content/uploads/1-4.png',
		title: '10 відмінних порад для дизайну кухні',
		detail:
			'Урахування органомікі кухні, Правильно використовуйте кухонний трикутник, Підсвідка на кухні - стиль і функціональність, Оптимізація простору для кухонних приборів',
	},
]

export default function ClientBlog() {
	return (
		<main className={s.cont}>
			<section className={s.section1}>
				<h1>Наш блог</h1>
			</section>
			<section className={s.section2}>
				{blogsPreview.map((item, key) => (
					<BlogCard key={key}>
						<BlogCard.Image
							href='/'
							image={{
								src: item.img,
								alt: `${key}_blog_img`,
							}}
						/>
						<BlogCard.Title>{item.title}</BlogCard.Title>
						<BlogCard.Detail>{item.detail}</BlogCard.Detail>
						<BlogCard.Action href='/'>Детальніше</BlogCard.Action>
					</BlogCard>
				))}
			</section>
		</main>
	)
}
