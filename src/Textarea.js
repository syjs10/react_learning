import React from 'react';

class Textarea extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value:'Please input somethings!'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	chage(){
		
	}
	handleChange(event){
		this.setState({value:event.target.value}); 
	
	}
	handleSubmit(event){
		alert('I want to say : ' + this.state.value);

		event.preventDefault();
	}
	
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
				<label id="tmp">
					{this.state.value}
				</label>
				<br/>
				<textarea value={this.state.value} onChange={this.handleChange} />
				
				<br/>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
}
export default Textarea;