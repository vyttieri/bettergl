import { Component } from 'react'
import h from 'helpers/createElement'
import PropTypes from 'prop-types'

export default class Form extends Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({ value: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()

		console.log('String submitted: ' + this.state.value)

		fetch(
			`fetch?url=${encodeURIComponent(this.state.value)}`,
			{ method: 'GET', dataType: 'json' })
			.then(response => this.props.onGeeklistLoad(response))
	}

	render() {
		return (
			h`
			<form onSubmit=${(e) => this.handleSubmit(e)}>
				<label>
					GeekList ID or URL:
					<input type="text" value=${this.state.value} onChange=${(e) => this.handleChange(e)} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			`
		)
	}
}

Form.propTypes = {
	onGeeklistLoad: PropTypes.func.isRequired,
}
