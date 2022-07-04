import { useState } from 'react'

import h from 'helpers/createElement'

const List = ({ geeklistItems }) => {
	const [sortColumn, setSortColumn] = useState('rank')
	const [sortReverse, setSortReverse] = useState(false)

	let sortedGeeklistItems = geeklistItems.sort((a, b) => (a[sortColumn] > b[sortColumn]) ? 1 : -1)

	if (sortReverse) {
		sortedGeeklistItems = sortedGeeklistItems.reverse()
	}

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
