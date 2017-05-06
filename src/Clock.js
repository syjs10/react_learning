import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}
	
	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({
			date: new Date()
		});
	}
	render(){
		return (
			<div>
				<h1>Hello, World!</h1>
				<FormatDate date={this.state.date}/> 
			</div>
		);
	}
}
function App(){
	return (
		<div>
			<Clock />
			<Clock />
			<Clock />
		</div>
	);
}
// 组件化的可独立使用的时钟,state保存状态
function FormatDate(props){
		return <h2>It is {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}.</h2>;
}
export default Clock;