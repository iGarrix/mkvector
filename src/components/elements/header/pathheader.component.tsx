'use client'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { MoveRight } from 'lucide-react'
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import sass from './header.style.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
interface IPathHeaderProps {}

export const PathHeader: React.FC<IPathHeaderProps> = ({ ...props }) => {
	const pathname = usePathname()

	const rerender = useMemo(() => {
		const init = [
			{
				title: 'Головна сторінка',
				path: '/',
				isEnd: false,
			},
		]
		if (pathname === '/') {
			return init
		}
		const next = pathname.split('/').filter(f => f !== '')

		return [
			...init,
			...next.map((item, key) => {
				return { title: item, path: item, isEnd: key === next.length - 1 }
			}),
		]
	}, [[pathname]])

	const [path, newPath] =
		useState<{ title: string; path: string; isEnd?: boolean }[]>(rerender)

	useEffect(() => {
		const newResult = rerender
		if (path !== newResult) {
			newPath(newResult)
		}
	}, [pathname])

	return (
		<aside className={sass.headerPath}>
			<Breadcrumb>
				<BreadcrumbList>
					{path.map((item, key) => (
						<Fragment key={key}>
							<BreadcrumbItem>
								{item.isEnd ? (
									<BreadcrumbPage>{item.title}</BreadcrumbPage>
								) : (
									<BreadcrumbLink asChild>
										<Link href={item.path}>{item.title}</Link>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{key !== path.length - 1 && (
								<BreadcrumbSeparator>
									<MoveRight />
								</BreadcrumbSeparator>
							)}
						</Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</aside>
	)
}
