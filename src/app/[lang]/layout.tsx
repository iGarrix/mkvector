import type { Metadata } from 'next'
import style from './layout.style.module.scss'
import Header from '@/components/elements/header/header.component'
import { Footer } from '@/components/elements/footer/footer.component'
export const metadata: Metadata = {
	title: 'Головна',
	description: 'Client description',
}

export default function ClientLayout(props: { children: React.ReactNode }) {
	return (
		<main className={style.container}>
			<Header />
			<div className={style.wrapper}>{props.children}</div>
			<Footer />
		</main>
	)
}
