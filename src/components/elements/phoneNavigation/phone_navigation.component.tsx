'use client'

import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'
import AskingForm from '../asking/asking.form'
import { usePhoneNavigation } from '@/hooks/uihooks/usePhoneNavigation/phone_navigation.store'
import Link from '@/components/Link/link.component'
import { ChevronRight } from 'lucide-react'
import { Locale } from '@/config/i18.config'

//import style from './scss.style.module.scss';

interface IPhoneNavigationProps {
	locale: Locale
	locale_data: any
}

export const PhoneNavigation: React.FC<IPhoneNavigationProps> = ({
	...props
}) => {
	const { open, onOpen } = usePhoneNavigation()
	return (
		<Drawer open={open} onOpenChange={onOpen}>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle className='font-sheppard text-2xl tracking-widest'>
						<span className='text-amber-500'>MK</span>Vector
					</DrawerTitle>
				</DrawerHeader>
				<DrawerFooter>
					<nav className='list-none'>
						<li
							onClick={() => {
								onOpen(false)
							}}>
							<Link
								href={'/portfolio'}
								lang={props.locale}
								className='flex items-start justify-between gap-5 transition-all hover:text-accent group/link py-2'>
								{props.locale_data.root.portfolio.title}
								<ChevronRight className='w-[1.2rem] h-[1.2rem] group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</li>
						<li
							onClick={() => {
								onOpen(false)
							}}>
							<Link
								href={'/blog'}
								lang={props.locale}
								className='flex items-start justify-between gap-5 transition-all hover:text-accent group/link py-2'>
								{props.locale_data.root.blog}
								<ChevronRight className='w-[1.2rem] h-[1.2rem] group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</li>
						<li
							onClick={() => {
								onOpen(false)
							}}>
							<Link
								href={'/feedbacks'}
								lang={props.locale}
								className='flex items-start justify-between gap-5 transition-all hover:text-accent group/link py-2'>
								{props.locale_data.root.feedbacks}
								<ChevronRight className='w-[1.2rem] h-[1.2rem] group-hover/link:translate-x-1 transition-transform' />
							</Link>
						</li>
					</nav>
					<br />
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
