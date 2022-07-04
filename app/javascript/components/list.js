import { useState } from 'react'

import h from 'helpers/createElement'

const listStyles = {
	arrow: {
		border: 'solid black',
		borderWidth: '0 3px 3px 0',
		display: 'inline-block',
		padding: '3px'
	},

	up: {
		transform: 'rotate(-135deg)',
	},

	down: {
		transform: 'rotate(135deg)',
	}
}

const List = ({ geeklistItems }) => {
	const [sortColumn, setSortColumn] = useState('rank')
	const [sortReverse, setSortReverse] = useState(false)

	const handleClick = e => {
		e.preventDefault()

		if (e.target.getAttribute('name') === sortColumn) {
			setSortReverse(!sortReverse)
		} else {
			setSortColumn(e.target.getAttribute('name'))
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
					<th name="rank" style=${{...listStyles.arrow, ...listStyles.up}} onClick=${handleClick}>Rank</th>
					<th name="title" style=${{...listStyles.arrow, ...listStyles.up}} onClick=${handleClick}>Title</th>
					<th name="rating" style=${{...listStyles.arrow, ...listStyles.up}} onClick=${handleClick}>Rating</th>
					<th name="link">BGG Link</th>
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
