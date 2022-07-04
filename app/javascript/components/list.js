import { useState } from 'react'

import h from 'helpers/createElement'



const List = ({ geeklistItems }) => {
	const [sortColumn, setSortColumn] = useState('rank')
	const [sortReverse, setSortReverse] = useState(false)

	const handleClick = e => {
		e.preventDefault()

		if (e.currentTarget.getAttribute('name') === sortColumn) {
			setSortReverse(!sortReverse)
		} else {
			setSortColumn(e.currentTarget.getAttribute('name'))
			setSortReverse(false)
		}
	}

	if (sortReverse) {
		geeklistItems.sort((a, b) => (a[sortColumn] > b[sortColumn]) ? -1 : 1)
	} else {
		geeklistItems.sort((a, b) => (a[sortColumn] > b[sortColumn]) ? 1 : -1)
	}

	return (h`
		<table>
			<thead>
				<tr>
					<th name="rank" onClick=${handleClick}>
						<span class="arrow ${sortColumn == 'rank' ? (sortReverse ? 'descending' : 'ascending') : ''}"></span>Rank
					</th>
					<th name="title" onClick=${handleClick}>
						<span class="arrow ${sortColumn == 'title' ? (sortReverse ? 'descending' : 'ascending') : ''}"></span>Title
					</th>
					<th name="rating" onClick=${handleClick}>
						<span class="arrow ${sortColumn == 'rating' ? (sortReverse ? 'descending' : 'ascending') : ''}"></span>Rating
					</th>
				</tr>
			</thead>
			<tbody>
		${geeklistItems.map(geeklistItem =>
			h`
				<tr>
					<td>${geeklistItem.rank}</td>
					<td><a href=${geeklistItem.link} target="_blank">${geeklistItem.title}</a></td>
					<td>${geeklistItem.rating}</td>
				</tr>`
		)}
			</tbody>
		</table>`
	)
}

export default List
