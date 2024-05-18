import Link from '@/components/Link/link.component'
import { getDictionary } from '@/config/dictionary'
import { Locale } from '@/config/i18.config'
import { Copyright } from 'lucide-react'
import { Metadata } from 'next'

export async function generateMetadata(props: {
	params: { lang: Locale }
}): Promise<Metadata> {
	const { metadata } = await getDictionary(props.params.lang)
	return {
		title: metadata['/[notfound]'].title,
		description: metadata['/[notfound]'].description,
	}
}

export default async function NotFound(props: { params: { lang: Locale } }) {
	const data = await getDictionary(props.params.lang)
	return (
		<main className='flex flex-col items-center justify-center h-svh relative'>
			<div className='border-r absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-light/5 to-light-200'></div>
			<div className='bg-gradient-to-r from-light to-light-200 p-8 rounded-lg shadow-xl shadow-dark/5 border z-10'>
				<h1 className='uppercase font-black text-4xl font-sheppard'>
					MKVector
				</h1>
				<p className='text-zinc-500 test-sm flex gap-1 items-center'>
					<Copyright className='w-[16px]' /> {data.global.rights}
				</p>
				<br></br>
				<h2 className='uppercase font-black text-3xl'>
					{data.not_found.title1}
					<br />
					{data.not_found.title2}
				</h2>
				<br></br>
				<Link
					href={'/'}
					lang={props.params.lang}
					className='transition-colors hover:text-accent'>
					{data.not_found.redirect}
				</Link>
			</div>
		</main>
	)
}
