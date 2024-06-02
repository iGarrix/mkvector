'use client'

import { useAsking } from '@/hooks/uihooks/ask/asking.store'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import AskingForm from './asking.form'
import { useMediaQuery } from 'react-responsive'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

interface Params {
	locale_data: any
}
function Asking({ locale_data }: Params) {
	const { open, onOpen } = useAsking()
	const isDrawer = useMediaQuery({
		query: 'only screen and (min-width : 149px) and (max-width : 767px)',
	})

	if (isDrawer) {
		return (
			<Drawer open={open} onOpenChange={onOpen}>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>{locale_data.submit.placeholder}</DrawerTitle>
					</DrawerHeader>
					<DrawerFooter>
						<AskingForm locale_data={locale_data} onClose={onOpen} />
						<br />
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		)
	}

	return (
		<Dialog open={open} onOpenChange={onOpen}>
			<DialogContent className='bg-light-200 rounded-sm border-0 outline-none'>
				<aside className='flex justify-between items-center'>
					<h2 className='text-lg'>{locale_data.submit.placeholder}</h2>
					<button
						aria-label='close_asking_dialog'
						className='transition-all bg-gray-200 hover:bg-rose-500 hover:text-light rounded p-1 w-[2rem] h-[2rem] flex items-center justify-center'
						onClick={() => {
							onOpen(false)
						}}>
						<X className='w-[1rem]' />
					</button>
				</aside>
				<AskingForm locale_data={locale_data} onClose={onOpen} />
			</DialogContent>
		</Dialog>
	)
}

export default Asking
