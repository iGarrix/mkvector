export default function ClientPage(props: { params: { lang: string } }) {
	return <div className='h-[100svh]'>{props.params.lang}</div>
}
