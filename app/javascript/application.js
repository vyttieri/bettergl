// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'
import 'components/form'

import React, { useState } from 'react'
import { render } from 'react-dom'

import h from 'helpers/createElement'
import Form from 'components/form'
import List from 'components/list'

const App = props => {
	const [geeklistItems, setGeeklistItems] = useState([])
	const onGeeklistLoad = geeklistItems => {
		setGeeklistItems(geeklistItems)
	}

	return h`
	<div>
		Test ${props.name}
		<${Form} onGeeklistLoad=${onGeeklistLoad} />
		<${List} geeklistItems=${geeklistItems}/>
	</div>
	`
}

App.defaultProps = {
	name: 'Whatever'
}

document.addEventListener('DOMContentLoaded', () => {
	render(
		h`<${App} name='htm' />`,
		document.getElementById('app')
	)
})
