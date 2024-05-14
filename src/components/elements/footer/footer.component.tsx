'use client'

import Link from 'next/link'
import s from './footer.style.module.scss'
import {
	BadgePlus,
	BriefcaseBusiness,
	Copyright,
	ExternalLink,
	MessagesSquare,
	PhoneCallIcon,
} from 'lucide-react'
import Button from '@/components/commons/button/button.component'

export const Footer: React.FC = ({ ...props }) => {
	return (
		<footer className={s.footer}>
			<aside className={s.mainpart}>
				<div className={s.heading}>
					<h1 className={s.title}>MKVector</h1>

					<p className={s.right}>
						<Copyright /> Всі права захищені
					</p>
				</div>
				<ul className={s.list}>
					<li className={s.head}>Навігація</li>
					<li>
						<BriefcaseBusiness />{' '}
						<Link
							href={'/portfolio'}
							className='hover:underline underline-offset-2'>
							Портфоліо
						</Link>
					</li>
					<li>
						<BadgePlus />{' '}
						<Link href={'/blog'} className='hover:underline underline-offset-2'>
							Блог
						</Link>
					</li>
					<li>
						<MessagesSquare />{' '}
						<Link
							href={'/feedbacks'}
							className='hover:underline underline-offset-2'>
							Відгуки
						</Link>
					</li>
				</ul>
				<ul className={s.list}>
					<li className={s.head}>Контакти</li>
					<li>
						<PhoneCallIcon /> <span>+38-067-392-78-32</span>
					</li>
					<li>
						<PhoneCallIcon /> <span>+38-067-392-78-50</span>
					</li>
					<li>
						<PhoneCallIcon /> <span>+38-066-278-85-35</span>
					</li>
				</ul>
				<ul className={s.list}>
					<li className={s.head}>Місце розташування</li>
					<li>Київ, вул. Жмеринська, 1</li>
					<li className=''>
						<Button>Зв'язатись з нами</Button>
						{/* <button className={s.contactButton}></button> */}
					</li>
				</ul>
			</aside>
			<aside className={s.devpart}>
				<Link href={'https://webcraft.rivne.ua'} target='_blank'>
					<span>developed by webcraft</span> <ExternalLink />
				</Link>
			</aside>
		</footer>
	)
}
