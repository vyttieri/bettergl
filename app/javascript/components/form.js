import { Component } from 'react'
import h from 'helpers/createElement'

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
		console.log('String submitted: ' + this.state.value)

		e.preventDefault()
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

