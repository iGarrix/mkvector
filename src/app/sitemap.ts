import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_URL}`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/portfolio`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/blogs`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/feedbacks`,
			lastModified: new Date(),
			priority: 1,
		},
	]
}
