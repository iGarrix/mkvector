import { getDictionary } from '@/config/dictionary'
import ServiceClientPage from './service.client'
import { Locale } from '@/config/i18.config'
import { Metadata } from 'next'
import { Work, works } from '@/api/works'
import { opengraph } from '@/lib/metadata.helper'

export async function generateMetadata(props: {
	params: { lang: Locale; service: string }
}): Promise<Metadata> {
	const { pages, globalHeader } = await getDictionary(props.params.lang)
	const subset: any = globalHeader.navigation.portfolio.subset
	const findSubset = subset[props.params.service]
	const anyitems = works.filter(f => f.type === props.params.service)
	if (findSubset && anyitems.length > 0) {
		return {
			title: findSubset,
			description: findSubset,
			metadataBase: new URL(
				process.env.NEXT_PUBLIC_URL || 'https://nextjs.org'
			),
			...opengraph({
				title: findSubset,
				description: findSubset,
			}),
		}
	}
	return {
		title: pages['/portfolio']['[blogpost]']['[notfound]'].title,
		description: pages['/portfolio']['[blogpost]']['[notfound]'].return,
	}
}

export default async function ServicePage(props: {
	params: { lang: Locale; service: string }
}) {
	const langdata = await getDictionary(props.params.lang)
	return (
		<ServiceClientPage
			locale={props.params.lang}
			langdata={Object.assign({
				root: langdata.pages['/portfolio']['[blogpost]'],
			})}
			service={props.params.service}
		/>
	)
}
