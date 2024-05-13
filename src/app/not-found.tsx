import { Copyright } from 'lucide-react'
import Link from 'next/link'

export default function NotFound(props: { params: { lang: string } }) {
	return (
		<main className='flex flex-col items-center justify-center h-svh relative'>
			<div className='border-r absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-light/5 to-light-200'></div>
			<div className='bg-gradient-to-r from-light to-light-200 p-8 rounded-lg shadow-xl shadow-dark/5 border z-10'>
				<h1 className='uppercase font-black text-4xl font-sheppard'>
					MKVector
				</h1>
				<p className='text-zinc-500 test-sm flex gap-1 items-center'>
					<Copyright className='w-[16px]' /> Всі права захищені
				</p>
				<br></br>
				<h2 className='uppercase font-black text-3xl'>
					Виникла помилка
					<br />
					сторінку не знайдено
				</h2>
				<br></br>
				<Link href={'/'} className='transition-colors hover:text-accent'>
					Перейти на головну
				</Link>
			</div>
		</main>
	)
}
