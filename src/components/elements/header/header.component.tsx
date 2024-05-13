'use client'
import { cn } from '@/lib/utils'
import sass from './header.style.module.scss'
import Link from 'next/link'
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
interface IHeaderProps {}

const portfolioNav: Array<{ title: string; href: string }> = [
	{
		title: 'Кухні',
		href: '/s',
	},
	{
		title: 'Шафи',
		href: '/',
	},
	{
		title: 'Дитячі',
		href: '/',
	},
	{
		title: 'Передпокої',
		href: '/',
	},
	{
		title: 'Ванні кімнати',
		href: '/',
	},
	{
		title: 'Спальні',
		href: '/',
	},
	{
		title: 'Столи',
		href: '/',
	},
	{
		title: 'Гардеробні',
		href: '/',
	},
]

function Header({ ...props }: IHeaderProps) {
	const pathname = usePathname()

	return (
		<Fragment>
			<header className={cn(sass.header)} {...props}>
				<aside className={sass.s1}>
					<div className={sass.logoWrapper}>
						<Link href={'/'} className={sass.title}>
							MKVector
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
									Портфоліо
								</NavigationMenuTrigger>
								<NavigationMenuContent className={sass.openContent}>
									<nav
										className={`flex flex-col whitespace-nowrap min-w-[15rem] border bg-light text-sm`}>
										{portfolioNav.map((item, key) => (
											<Link
												key={key}
												href={item.href}
												className={`px-4 py-2 w-full transition-colors hover:bg-light-200 hover:text-accent flex items-center justify-between gap-10 group/item`}>
												{item.title}
												<ChevronRight className='w-[16px] transition-transform group-hover/item:translate-x-1' />
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
								<Link href='/blog' legacyBehavior passHref>
									<NavigationMenuLink>Блог</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem
								className={cn(
									sass.trigger,
									pathname.includes('/feedbacks') && sass.selected
								)}>
								<Link href='/feedbacks' legacyBehavior passHref>
									<NavigationMenuLink>Відгуки</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<button className={sass.callback}>
						<MessageCircle />
					</button>
					<button className={sass.openNav}>
						<Menu />
					</button>
				</aside>
			</header>
			<PathHeader />
		</Fragment>
	)
}

export default Header
