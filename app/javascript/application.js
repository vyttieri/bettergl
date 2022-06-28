// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'
import 'components/form'
import h from 'helpers/createElement'

import React from 'react'
import { render } from 'react-dom'

const App = props => (
	h`
	<div>
		Test ${props.name}
	</div>
	`
)

App.defaultProps = {
	name: 'Whatever'
}

document.addEventListener('DOMContentLoaded', () => {
	render(
		h`<${App} name='htm' />`,
		document.getElementById('app')
	)
})
