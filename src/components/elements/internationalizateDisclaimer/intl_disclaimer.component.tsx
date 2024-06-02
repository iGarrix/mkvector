'use client'

import { Locale } from '@/config/i18.config'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

//import style from './scss.style.module.scss';

interface IIntlDisclaimerProps {
	locale: Locale
	locale_data: any
}

export const IntlDisclaimer: React.FC<IIntlDisclaimerProps> = ({
	...props
}) => {
	const [isDisclaimed, setDisclaimed] = useState(false)
	const pathname = usePathname()
	const { replace } = useRouter()
	useEffect(() => {
		const storage_disclaim = localStorage.getItem('disclaim')
		if (!storage_disclaim) {
			setDisclaimed(true)
		}
	}, [])

	function onDislaimed(_lang: Locale) {
		localStorage.setItem('disclaim', 'yes')
		setDisclaimed(false)
		setTimeout(() => {
			replace('/' + [_lang, ...pathname.split('/').slice(2)].join('/'))
		}, 500)
	}
	return (
		<AnimatePresence>
			{isDisclaimed && (
				<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: 'auto', opacity: 1 }}
					exit={{ height: 0, opacity: 0 }}
					className='border-b bg-gray-200 overflow-hidden flex items-center justify-center py-1 px-2 font-normal gap-4'>
					<h3 className='text-center'>{props.locale_data.warn}</h3>
					<ul className='text-accent font-semibold'>
						<li>
							<button
								className='hover:underline underline-offset-1'
								onClick={() => {
									onDislaimed('ua')
								}}>
								UA
							</button>
						</li>
						<li>
							<button
								className='hover:underline underline-offset-1'
								onClick={() => {
									onDislaimed('en')
								}}>
								EN
							</button>
						</li>
					</ul>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
