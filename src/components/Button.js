import React, { useState, Component } from 'react'


// class Button extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			styleClass: 'btn',
// 			label: 'Remove from Reading List',
// 			add: false,
// 		}
// 	}

// 	handleClick = () => {
// 		if( !this.state.add ) {
// 			this.setState({ label: 'Add to Reading List' })
// 			this.setState({ add: true })
// 		} else {
// 			this.setState({ label: 'Remove from Reading List' })
// 			this.setState({ add: false })
// 		}
// 		console.log(this.state.add)
// 		// equivalent to: (only use if update depends on current state)
// 		// this.setState((prevState) => ({ label: prevState.label + 'Me' }))
// 	}

// 	render() { return (
// 		<button className={this.state.styleClass}>{this.state.label}</button>
// 	)}
// }

// export default Button

export default function Button({ styleClass, label, onClick }) {

	return (
		<button className='btn' onClick={(book) => onClick(book)}>
			{label}
		</button>
	)
}