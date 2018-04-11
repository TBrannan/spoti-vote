import React, {Component} from 'react';
import '../../css/selectors.css';

let constants = require('../../js/constants.js');
let config = require('../../js/config');

let defaultStyle = {
	padding: "17px 40px",
	fontSize: "0.9em",
	lineHeight: 1,
	borderRadius: "500px",
	borderWidth: 0,
	letterSpacing: "2px",
	minWidth: "120px",
	maxWidth: "150px",
	maxHeight: "50px",
	textTransform: "uppercase",
	whiteSpace: "normal",
	backgroundColor: constants.colors.green,
	marginTop: "1.5em",
	marginRight: "0"
}
class LoginCode extends Component {

	constructor() {
		super();
		this.state = {
			room: ''
		}
	}

	submitHandler(event) {
		event.preventDefault();
		// check for input hijacking
		// send data to join room
		window.location.href = 'http://' + config.ipAddress + ':' + config.portFrontend + '/app/' + this.state.room
		console.log(this);
		console.log(this.state.room);
	}

	checkRoom(event) {
		if (event.target.value.length === 5) {
			let str = event.target.value.toUpperCase();
			console.log(str);
			// return if room exists
			// if room exists set state
			this.setState({room: str});
		}
	}

	render() {
		return (<form style={{
				display: 'inline-block',
				width: '100%'
			}} onSubmit={this.submitHandler.bind(this)}>
			<input type="text" maxLength="5" placeholder="Room Code" style={{
					...defaultStyle,
					maxWidth: "100px",
					textAlign: "center",
					backgroundColor: constants.colors.background,
					color: constants.colors.font
				}} autoComplete="off" onChange={this.checkRoom.bind(this)} pattern="[A-Za-z]{5}"/>
			<input type="submit" id="loginbutton" value="join" style={defaultStyle}/>
		</form>);
	}
}

export default LoginCode;
