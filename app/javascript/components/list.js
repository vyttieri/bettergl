import h from 'helpers/createElement'



const List = ({ geeklistItems }) => {
	return (h`
		<table>
			<thead>
				<tr>
					<td>Rank</td>
					<td>Title</td>
					<td>Rating</td>
					<td>BGG Link</td>
				</tr>
			</thead>
			<tbody>
		${geeklistItems.map(geeklistItem =>
			h`
				<tr>
					<td>${geeklistItem.rank}</td>
					<td>${geeklistItem.title}</td>
					<td>${geeklistItem.rating}</td>
					<td>${geeklistItem.link}</td>
				</tr>`
		)}
			</tbody>
		</table>`
	)
}


export default List

