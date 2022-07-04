import h from 'helpers/createElement'

const List = props => {
	return (
		h`
			<table><tbody>
		${props.geeklistItems.map(geeklistItem =>
			h`<tr>
				<td>${geeklistItem.rank}</td>
				<td>${geeklistItem.title}</td>
				<td>${geeklistItem.rating}</td>
				<td>${geeklistItem.link}</td>
			</tr>`
		)}
		</tbody></table>`
	)
}

export default List
