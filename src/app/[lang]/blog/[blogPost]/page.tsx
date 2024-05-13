export default function pageName(props: { params: { blogPost: string } }) {
	return <div>{props.params.blogPost}</div>
}
