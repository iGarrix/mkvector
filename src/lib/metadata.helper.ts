export const opengraph = (metadata: {
	title: string | null
	description: string | null
}): any => {
	return {
		twitter: {
			title: `MKVector - ${metadata.title}`,
			card: 'summary_large_image',
			description: metadata.description,
			creator: '@illinpayne',
		},
		openGraph: {
			title: `MKVector - ${metadata.title}`,
			description: metadata.description,
			siteName: 'MKVector',
			type: 'website',
		},
	}
}
