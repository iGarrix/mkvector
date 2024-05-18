'use client'

import { Locale } from '@/config/i18.config'
import s from './portfolio.style.module.scss'
import PortfolioCard from '@/components/commons/cards/portfolioCard/portfolio_card.component'

interface Params {
	locale: Locale
	langdata: any
}

export default function PortfolioClientPage({
	langdata,
	locale,
	...props
}: Params) {
	return (
		<main className={s.container}>
			<div className={s.central}>
				<aside>
					<h1>{langdata.root.title}</h1>
					<p>{langdata.root.description}</p>
				</aside>
				<br />
				<section>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/2.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.kitchens}
							</PortfolioCard.Title>
						}
						href={'/portfolio/kitchens'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/9.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.cases}
							</PortfolioCard.Title>
						}
						href={'/portfolio/cases'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/1.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.kids}
							</PortfolioCard.Title>
						}
						href={'/portfolio/kids'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/4.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.hallways}
							</PortfolioCard.Title>
						}
						href={'/portfolio/hallways'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/8.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.bathrooms}
							</PortfolioCard.Title>
						}
						href={'/portfolio/bathrooms'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/7.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.bedrooms}
							</PortfolioCard.Title>
						}
						href={'/portfolio/bedrooms'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/3.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.tables}
							</PortfolioCard.Title>
						}
						href={'/portfolio/tables'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/6.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.wardrobes}
							</PortfolioCard.Title>
						}
						href={'/portfolio/wardrobes'}
					/>
					<PortfolioCard
						locale={locale}
						image={{ src: 'https://mkvector.com/images/6.svg', alt: 'root' }}
						cardTitle={
							<PortfolioCard.Title>
								{langdata.services.office}
							</PortfolioCard.Title>
						}
						className='xs:col-span-full md:col-span-1 lg:col-span-full'
						href={'/portfolio/office'}
					/>
				</section>
			</div>
		</main>
	)
}
