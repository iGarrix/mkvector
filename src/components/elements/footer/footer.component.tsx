'use client'

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
import Link from '@/components/Link/link.component'
interface IFooterProps {
	languagedata: any
}
export const Footer: React.FC<IFooterProps> = ({ ...props }) => {
	return (
		<footer className={s.footer}>
			<aside className={s.mainpart}>
				<div className={s.heading}>
					<h1 className={s.title}>MKVector</h1>

					<p className={s.right}>
						<Copyright /> {props.languagedata.assigndata.global.rights}
					</p>
				</div>
				<ul className={s.list}>
					<li className={s.head}>
						{props.languagedata.footerdata.navigation_root}
					</li>
					<li>
						<BriefcaseBusiness />{' '}
						<Link
							lang={props.languagedata.locale}
							href={'/portfolio'}
							className='hover:underline underline-offset-2'>
							{props.languagedata.assigndata.routing.portfolio}
						</Link>
					</li>
					<li>
						<BadgePlus />{' '}
						<Link
							lang={props.languagedata.locale}
							href={'/blog'}
							className='hover:underline underline-offset-2'>
							{props.languagedata.assigndata.routing.blog}
						</Link>
					</li>
					<li>
						<MessagesSquare />{' '}
						<Link
							lang={props.languagedata.locale}
							href={'/feedbacks'}
							className='hover:underline underline-offset-2'>
							{props.languagedata.assigndata.routing.feedbacks}
						</Link>
					</li>
				</ul>
				<ul className={s.list}>
					<li className={s.head}>
						{props.languagedata.footerdata.contact_root}
					</li>
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
					<li className={s.head}>
						{props.languagedata.footerdata.placement.root}
					</li>
					<li>{props.languagedata.footerdata.placement.placeaddress}</li>
					<li className=''>
						<Button>{props.languagedata.footerdata.placement.action}</Button>
						{/* <button className={s.contactButton}></button> */}
					</li>
				</ul>
			</aside>
			<aside className={s.devpart}>
				<Link
					lang={props.languagedata.locale}
					href={'https://webcraft.rivne.ua'}
					target='_blank'>
					<span>developed by webcraft</span> <ExternalLink />
				</Link>
			</aside>
		</footer>
	)
}
