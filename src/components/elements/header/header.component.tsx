'use client'
import { cn } from '@/lib/utils'
import sass from './header.style.module.scss'
import { ChevronRight, Menu, MessageCircle } from 'lucide-react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import React, { Fragment } from 'react'
import { PathHeader } from './pathheader.component'
import { usePathname } from 'next/navigation'
import Link from '@/components/Link/link.component'
import { Locale } from '@/config/i18.config'
import { useAsking } from '@/hooks/uihooks/ask/asking.store'
import { usePhoneNavigation } from '@/hooks/uihooks/usePhoneNavigation/phone_navigation.store'
import { IntlDisclaimer } from '../internationalizateDisclaimer/intl_disclaimer.component'
interface IHeaderProps {
	locale: Locale
	datalocale: any
}

const portfolioNav: Array<{ title: string; href: string }> = [
	{
		title: 'kitchens',
		href: '/portfolio/kitchens',
	},
	// {
	// 	title: 'cases',
	// 	href: '/portfolio/cases',
	// },
	// {
	// 	title: 'kids',
	// 	href: '/portfolio/kids',
	// },
	// {
	// 	title: 'hallways',
	// 	href: '/portfolio/hallways',
	// },
	// {
	// 	title: 'bathrooms',
	// 	href: '/portfolio/bathrooms',
	// },
	// {
	// 	title: 'bedrooms',
	// 	href: '/portfolio/bedrooms',
	// },
	// {
	// 	title: 'tables',
	// 	href: '/portfolio/tables',
	// },
	// {
	// 	title: 'wardrobes',
	// 	href: '/portfolio/wardrobes',
	// },
	// {
	// 	title: 'office',
	// 	href: '/portfolio/office',
	// },
]

function Header({ ...props }: IHeaderProps) {
	const pathname = usePathname()
	const { onOpen: onAsking } = useAsking()
	const { onOpen: onPhoneModal } = usePhoneNavigation()
	return (
		<Fragment>
			<header className={cn(sass.header)} {...props}>
				<IntlDisclaimer
					locale={props.locale}
					locale_data={props.datalocale[2]}
				/>
				<aside className={sass.s1}>
					<div className={sass.logoWrapper}>
						<Link href={'/'} lang={props.locale} className={sass.title}>
							<span className='text-amber-500'>MK</span>Vector
						</Link>
					</div>
					<NavigationMenu>
						<NavigationMenuList className={sass.navbarList}>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className={cn(
										sass.openTrigger,
										pathname.includes('/portfolio') && sass.selected
									)}>
									{props.datalocale[0].navigation.portfolio.title}
								</NavigationMenuTrigger>
								<NavigationMenuContent className={sass.openContent}>
									<nav
										className={`flex flex-col whitespace-nowrap min-w-[15rem] border bg-light text-sm`}>
										{portfolioNav.map((item, key) => (
											<Link
												key={key}
												lang={props.locale}
												href={item.href}
												legacyBehavior
												passHref>
												<NavigationMenuLink
													className={`px-4 py-2 w-full transition-colors hover:bg-light-200 hover:text-accent flex items-center justify-between gap-10 group/item capitalize`}>
													{
														props.datalocale[0].navigation.portfolio.subset[
															item.title
														]
													}

													<ChevronRight className='w-[16px] transition-transform group-hover/item:translate-x-1' />
												</NavigationMenuLink>
											</Link>
										))}
									</nav>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem
								className={cn(
									sass.trigger,
									pathname.includes('/blog') && sass.selected
								)}>
								<Link href='/blog' lang={props.locale} legacyBehavior passHref>
									<NavigationMenuLink>
										{props.datalocale[0].navigation.blog}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem
								className={cn(
									sass.trigger,
									pathname.includes('/feedbacks') && sass.selected
								)}>
								<Link
									href='/feedbacks'
									lang={props.locale}
									legacyBehavior
									passHref>
									<NavigationMenuLink>
										{props.datalocale[0].navigation.feedbacks}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<button
						className={sass.callback}
						aria-label='callbackform'
						onClick={() => {
							onAsking(true)
						}}>
						<MessageCircle />
					</button>
					<button
						className={sass.openNav}
						aria-label='phonemenu'
						onClick={() => {
							onPhoneModal(true)
						}}>
						<Menu />
					</button>
				</aside>
			</header>
			<PathHeader
				routingData={Object.assign(
					{ root: props.datalocale[1] },
					{ subset: props.datalocale[0].navigation.portfolio.subset }
				)}
				locale={props.locale}
			/>
		</Fragment>
	)
}

export default Header
