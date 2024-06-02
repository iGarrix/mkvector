'use client'

import { Locale } from '@/config/i18.config'
import Image from 'next/image'
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'framer-motion'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import {
	ArrowLeft,
	Barcode,
	ChevronLeft,
	ChevronRight,
	Clock,
	CornerDownLeft,
	DollarSign,
	Medal,
	MessageCircle,
} from 'lucide-react'
import { useRef, useState } from 'react'
interface Params {
	locale: Locale
	locale_data: any
}

export default function ClientMainPage({ locale_data, ...props }: Params) {
	const { scrollY: bY } = useScroll()
	const [api, setApi] = useState<CarouselApi>()
	const TbY1 = useTransform(bY, [0, 900], [0, 200])
	const TbY2 = useTransform(bY, [0, 700], [0, -100])
	const TbenefitsY1 = useTransform(bY, [100, 600], [250, 0])
	const TbenefitsX1 = useTransform(bY, [100, 600], [100, 0])
	const TendY1 = useTransform(bY, [200, 800], [250, 0])

	// useMotionValueEvent(bY, 'change', latest => {
	// 	console.log('Page scroll: ', latest)
	// })

	return (
		<main className='flex flex-col gap-20 overflow-hidden'>
			<aside className='min-h-[83svh] relative bg-gradient-to-b from-light to-light-200 flex flex-col items-center py-[2%] overflow-hidden gap-4 px-[5rem]'>
				<motion.h1
					style={{ y: TbY2 }}
					className='text-3xl font-sheppard tracking-widest'>
					<span className='text-amber-500'>MK</span>Vector
				</motion.h1>
				<motion.p
					style={{ y: TbY2 }}
					className='text-7xl xs:text-4xl md:text-5xl lg:text-7xl font-proxima font-black text-center place-items-center'>
					{locale_data.root.banner}
				</motion.p>
				<motion.div
					style={{ y: TbY1, x: TbY1 }}
					className='absolute bottom-0  z-10'>
					<Image
						src={
							'https://images.prom.ua/4658583331_w640_h640_shkaf-kupe-siti.jpg'
						}
						alt='kupe'
						priority
						width={0}
						height={0}
						quality={100}
						sizes='1000px'
						className='w-[400px] z-10 h-[400px] xs:scale-[3] min-[300px]:scale-[2.4] md:scale-[2.4] xl:scale-[2.8] 3xl:scale-[3] object-contain'
					/>
				</motion.div>
			</aside>
			<motion.aside
				style={{ y: TbenefitsY1, x: TbenefitsX1 }}
				className='overflow-hidden'>
				<h2 className='text-[44px] xs:text-3xl font-bold tracking-tight px-[20%] xs:px-4 lg:px-[20%]'>
					{locale_data.root.benefits.title}
				</h2>
				<br />
				<Carousel setApi={setApi}>
					<CarouselContent className='ml-[20%] xs:ml-4 lg:ml-[20%] mr-[2rem] gap-4'>
						<CarouselItem className='bg-light-200 rounded-3xl basis-1/4 xs:basis-auto xs:w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 select-none  p-6'>
							<MessageCircle className='w-[2.5rem] h-[2.5rem] border-2 border-dark rounded p-2' />
							<br />
							<h3 className='text-3xl font-bold'>
								{locale_data.root.benefits['0'].title}
							</h3>
							<p className='text-zinc-500 font-normal text-justify'>
								{locale_data.root.benefits['0'].desc}
							</p>
						</CarouselItem>
						<CarouselItem className='bg-light-200 rounded-3xl basis-1/4 xs:basis-auto xs:w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 select-none  p-6'>
							<Medal className='w-[2.5rem] h-[2.5rem] border-2 border-dark rounded p-2' />
							<br />
							<h3 className='text-3xl font-bold'>
								{locale_data.root.benefits['1'].title}
							</h3>
							<p className='text-zinc-500 font-normal text-justify'>
								{locale_data.root.benefits['1'].desc}
							</p>
						</CarouselItem>
						<CarouselItem className='bg-light-200 rounded-3xl basis-1/4 xs:basis-auto xs:w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 select-none  p-6'>
							<Clock className='w-[2.5rem] h-[2.5rem] border-2 border-dark rounded p-2' />
							<br />
							<h3 className='text-3xl font-bold'>
								{locale_data.root.benefits['2'].title}
							</h3>
							<p className='text-zinc-500 font-normal text-justify'>
								{locale_data.root.benefits['2'].desc}
							</p>
						</CarouselItem>
						<CarouselItem className='bg-light-200 rounded-3xl basis-1/4 xs:basis-auto xs:w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 select-none  p-6'>
							<Barcode className='w-[2.5rem] h-[2.5rem] border-2 border-dark rounded p-2' />
							<br />
							<h3 className='text-3xl font-bold'>
								{locale_data.root.benefits['3'].title}
							</h3>
							<p className='text-zinc-500 font-normal text-justify'>
								{locale_data.root.benefits['3'].desc}
							</p>
						</CarouselItem>
						<CarouselItem className='bg-light-200 rounded-3xl basis-1/4 xs:basis-auto xs:w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 select-none  p-6'>
							<CornerDownLeft className='w-[2.5rem] h-[2.5rem] border-2 border-dark rounded p-2' />
							<br />
							<h3 className='text-3xl font-bold'>
								{locale_data.root.benefits['4'].title}
							</h3>
							<p className='text-zinc-500 font-normal text-justify'>
								{locale_data.root.benefits['4'].desc}
							</p>
						</CarouselItem>
						<CarouselItem className='bg-light-200 rounded-3xl basis-1/4 xs:basis-auto xs:w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 select-none p-6'>
							<DollarSign className='w-[2.5rem] h-[2.5rem] border-2 border-dark rounded p-2' />
							<br />
							<h3 className='text-3xl font-bold'>
								{locale_data.root.benefits['5'].title}
							</h3>
							<p className='text-zinc-500 font-normal text-justify'>
								{locale_data.root.benefits['5'].desc}
							</p>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
				<div className='flex items-center justify-end gap-4 mr-[20%] xs:mr-4 lg:mr-[20%] mt-[3rem]'>
					<button
						aria-label='prev'
						className='bg-gray-300 rounded-full p-1 text-dark/60 transition-all hover:bg-gray-200'
						onClick={() => {
							api?.scrollPrev()
						}}>
						<ChevronLeft className='w-[1.8rem] h-[1.8rem] place-items-center -translate-x-0.5' />
					</button>
					<button
						aria-label='next'
						className='bg-gray-300 rounded-full p-1 text-dark/60 transition-all hover:bg-gray-200'
						onClick={() => {
							api?.scrollNext()
						}}>
						<ChevronRight className='w-[1.8rem] h-[1.8rem] place-items-center translate-x-0.5' />
					</button>
				</div>
			</motion.aside>
			<motion.div
				style={{ y: TendY1 }}
				className={`bg-[url('https://www.home-designing.com/wp-content/uploads/2018/02/lilies-feature-TV-cabinet-wall-dark-grey-room.jpg')] bg-center mx-[20%] xs:mx-[1rem] lg:mx-[20%]`}>
				<div className='w-full h-full p-8 relative text-light flex flex-col items-start gap-4 bg-dark/70'>
					<h1 className='text-4xl font-bold'>{locale_data.root.ends.title}</h1>
					<br />
					<p className='text-balance'>{locale_data.root.ends.t1}</p>
					<p className='text-balance'>{locale_data.root.ends.t2}</p>
				</div>
			</motion.div>
		</main>
	)
}
