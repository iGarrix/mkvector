import { Bed, Building, Clock, Home } from 'lucide-react'

export type Work = {
	title: string
	details?: string | null
	type: string
	previewImage: string
	images: string[]
	steps: { heading: string; description: string; icon: any }[]
}

export const kitchens: Work[] = [
	{
		title: 'Кухня ЖК «Cardinal»',
		details: 'Кухня виконана в світлих тонах за побажанням замовника',
		type: 'kitchens',
		previewImage:
			'https://mkvector.com/wp-content/uploads/%D1%82%D0%B5%D1%81%D1%82-1.png',
		images: [
			'https://mkvector.com/wp-content/uploads/3F6A9858-HDR3-1-1536x1024.jpg',
			'https://mkvector.com/wp-content/uploads/3F6A9861-HDR3.jpg',
			'https://mkvector.com/wp-content/uploads/3F6A9867-HDR3.jpg',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '30 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'фарбований МДФ, шпонований МДФ',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Egger (Австрія) класу екологічності Е1, 18мм',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description:
					'напрямні, петлі — Blum (Австрія), гардеробний ліф — Hafele (Германія)',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня 2 ЖК «Cardinal»',
		type: 'kitchens',
		details:
			'Кухня створена за бажанням замовника з використанням кольорів, які збігаються із загальним інтер’єром кухні. Має прозору поверхню. Корпус і фурнітура були виготовлені в Австрії',
		previewImage:
			'https://mkvector.com/wp-content/uploads/IMG_0945-HDR3-min-1-768x503.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/xIMG_0978-HDR3-1-1024x669.jpg.pagespeed.ic.QXfwyj7BZr.webp',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '30 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'фарбований МДФ, шпонований МДФ',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Egger (Австрія) класу екологічності Е1, 18мм',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum (Австрія); LED-підсвітка',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня ЖК «Французский квартал»',
		type: 'kitchens',
		details:
			'Красива кухня з підсвічуванням. Є дуже практичною і виконана в мінімалістичному стилі.',
		previewImage: 'https://mkvector.com/wp-content/uploads/555.png',
		images: [
			'https://mkvector.com/wp-content/uploads/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2019-12-19_13-09-38-2.jpg',
			'',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '30 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'фарбований МДФ',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Egger (Австрія) класу екологічності Е1, 18мм',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum (Австрія); Алюмінієвий піддон; Сушка; Підсвітка',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня 2 ЖК «Французский квартал»',
		type: 'kitchens',
		details:
			'Красива кухня, виконана в світлих тонах. Даний дизайн кухні прекрасно поєднується зі світлими тонами решти меблів в квартирі.',
		previewImage:
			'https://mkvector.com/wp-content/uploads/%D0%BA%D1%83%D1%85%D0%BD%D1%8F-4-2-1-682x1024.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/%D0%BA%D1%83%D1%85%D0%BD%D1%8F-4-1.jpg',
			'https://mkvector.com/wp-content/uploads/%D0%BA%D1%83%D1%85%D0%BD%D1%8F-4-2.jpg',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '30 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'ДСП Egger (Австрія) класу екологічності Е1, 18мм;',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Egger (Австрія) класу екологічності Е1, 18мм',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum (Австрия); Алюминиевый поддон; Сушка; Подсветка;',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня Кудрявський спуск',
		type: 'kitchens',
		details:
			'Красива та компактна кухня. Має помаранчеву підсвічування що поєднується з її стилем.',
		previewImage: 'https://mkvector.com/wp-content/uploads/2-2-768x537.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2020-05-29-%D0%B2-12.30.53-1-1024x702.png',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '30 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'фарбований МДФ; Шпонований МДФ;',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Egger (Австрія) класу екологічності Е1, 18мм',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum (Австрія);',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня вулиця Кудрі',
		type: 'kitchens',
		details: null,
		previewImage:
			'https://mkvector.com/wp-content/uploads/3F6A9298-HDR3-768x512.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/3F6A9298-HDR3-1-1024x683.jpg',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '30 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'Шпон;',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Egger, 18мм;',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum;',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня Жк «Alter ego»',
		type: 'kitchens',
		details: null,
		previewImage:
			'https://mkvector.com/wp-content/uploads/IMG_7176-768x512.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/IMG_7185-scaled.jpg',
			'https://mkvector.com/wp-content/uploads/IMG_7203-scaled.jpg',
			'https://mkvector.com/wp-content/uploads/IMG_7206-scaled.jpg',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '15 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'ДСП Kronospan 5527 SN Дуб каменный, 18мм;',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Kronospan 5527 SN Дуб каменный, 18мм;',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum; (Австрія)',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня «ЖК AuRoom»',
		type: 'kitchens',
		details: null,
		previewImage:
			'https://mkvector.com/wp-content/uploads/IMG_4735-2-768x512.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/IMG_4738-1-scaled.jpg',
			'https://mkvector.com/wp-content/uploads/IMG_4741-1-scaled.jpg',
			'https://mkvector.com/wp-content/uploads/IMG_4744-1-scaled.jpg',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '12 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description:
					'ДСП Kronospan Маккиато, 18мм, ДСП Egger Крем бежевый , 18мм;',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description:
					'ДСП Kronospan Маккиато, 18мм, ДСП Egger Крем бежевий, 18мм;',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum ящики TANDEMBOX;',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня 2 «ЖК AuRoom»',
		type: 'kitchens',
		details: null,
		previewImage:
			'https://mkvector.com/wp-content/uploads/IMG_4270-DS-1-768x512.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/IMG_4279-DS-scaled.jpg',
			'https://mkvector.com/wp-content/uploads/IMG_4300-DS-2-scaled.jpg',
			'https://mkvector.com/wp-content/uploads/IMG_4273-DS-1-scaled.jpg',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '15 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'ДСП Kronospan 8681 SU білий бриліант, 18мм;',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Kronospan 8681 SU білий бриліант, 18мм.,',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum, ящики TANDEMBOX.',
				icon: Bed,
			},
		],
	},
	{
		title: 'Кухня з островом ЖК «Сонячна брама»',
		type: 'kitchens',
		details: null,
		previewImage:
			'https://mkvector.com/wp-content/uploads/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2021-11-02_17-51-52-764-1-768x576.jpg',
		images: [
			'https://mkvector.com/wp-content/uploads/photo_2021-09-09_10-28-36-2.jpg',
			'https://mkvector.com/wp-content/uploads/photo_2021-09-09_10-24-09.jpg',
			'https://mkvector.com/wp-content/uploads/photo_2021-09-09_10-24-15.jpg',
		],
		steps: [
			{
				heading: 'Час виготовлення',
				description: '40 рабочих днів',
				icon: Clock,
			},
			{
				heading: 'Фасад',
				description: 'МДФ фарбований матовий з фрезеруванням',
				icon: Building,
			},
			{
				heading: 'Корпус',
				description: 'ДСП Egger W 980 SM Білій платниновий, 18мм',
				icon: Home,
			},
			{
				heading: 'Фурнітура',
				description: 'Blum',
				icon: Bed,
			},
		],
	},
]

export const works = [...kitchens]
