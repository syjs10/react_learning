import React from 'react';
import ReactDOM from 'react-dom';

// function formateName(user){
// 	return user.firstName + ' ' + user.lastName;
// }
// const user = {
// 	firstName: 'Jiang',
// 	lastName:  'Song'
// };
// const element = (
// 	<h1>
// 		Hello, { formateName(user) }
// 	</h1>
// );
// const template = "Hello {formateName(user)}"  ;
// const element = React.createElement(
// 	'h1',
// 	{
// 		className: 'greeting'
// 	},
// 	"Hello World"
// )
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// const element = <h1>Hello World!</h1>;

// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );
// 时钟 
// function tick(){
// 	const element=(
// 		<div>
// 			<h1>
// 				Hello World!
// 			</h1>

// 			<p>It is {new Date().toLocaleTimeString()}</p>
// 		</div>
// 	);
// 	ReactDOM.render(
// 		element,
// 		document.getElementById('root')
// 	)
// }
// setInterval(tick,1000);

//组件

// function Welcome(props){
// 	return <h1>Hello, {props.name}</h1>
// }
// function App(){
// 	return(
// 		<div>
// 			<Welcome name="abc"/>
// 			<Welcome name="hahaha"/>
// 			<Welcome name="oooo"/>
// 		</div>
// 	) 

// }
// // const element = <Welcome name="JS"/>
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// );
// er
// function Comment(props){
// 	return (
// 		<div className="Comment">
// 			<div className="UserInfo">
// 				<img className="Avatar"
// 					src = {props.author.avatarUrl}
// 					alt = {props.author.name}
// 				/>
// 				<div className="UserInfo-name">
// 					{props.author.name}
// 				</div>
// 			</div>
// 			<div className="Comment-text">
// 				{props.text}
// 			</div>
// 			<div className="Comment-data">
// 				{formatDate(props.date)}
// 			</div>
// 		</div>
// 	);
// }
// 组件化显示作者信息
// function formatDate(date) {
// 	return date.toLocaleDateString();
// }
// function Avatar(props){
// 	return (
// 		<img className="Avatar"
// 			src={props.user.avatarUrl}
// 			alt={props.user.name}
// 		/>
// 	);
// 	}
// 	function UserInfo(props) {
// 		return (
// 			<div className="UserInfo">
// 				<Avatar user={props.user} />
// 				<div className="UserInfo-name">
// 					{props.user.name}
// 				</div>
// 			</div>	
// 		);
// 	}
// 	function Comment(props) {
// 		return (
// 			<div className="Comment">
// 				<UserInfo user={props.author}/>
// 				<div className="Comment-text">
// 					{props.text}
// 				</div>
// 				<div className="Comment-date">
// 					{ formatDate(props.date) }
// 				</div>
// 			</div>
// 		);
// 	}
// const comment = {
// 	date: new Date(),
// 	text: 'I hope you enjoy learning React!',
// 	author: {
// 		name: 'Hello Kitty',
// 		avatarUrl: 'http://placekitten.com/g/64/64'
// 	}
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />,
//   document.getElementById('root')
// );
// 
// 无法单独存在的时钟
// function Clock(props) {
// 	return (
// 		<div>
// 			<h1>Hello, World!</h1>
// 			<h2>It is {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// }
// function tick(props) {
// 	ReactDOM.render(
// 		<Clock date = {new Date()} />,
// 		document.getElementById('root')
// 	);
// }
// setInterval(tick, 1000);
// 
// 组件化的可独立使用的时钟,state保存状态
// function FormatDate(props){
// 		return <h2>It is {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}.</h2>;
// }
// class Clock extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {date: new Date()};
// 	}
	
// 	componentDidMount(){
// 		this.timerID = setInterval(
// 			() => this.tick(),
// 			1000
// 		);
// 	}
// 	componentWillUnmount(){
// 		clearInterval(this.timerID);
// 	}
// 	tick(){
// 		this.setState({
// 			date: new Date()
// 		});
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<h1>Hello, World!</h1>
// 				<FormatDate date={this.state.date}/> 
// 			</div>
// 		);
// 	}
// }
// function App(){
// 	return (
// 		<div>
// 			<Clock />
// 			<Clock />
// 			<Clock />
// 		</div>
// 	);
// }
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// );
// 
// 事件触发防止跳转
// function ActionLink(){
// 	function handleClick(e) {
// 		e.preventDefault();
// 		console.log('Hello World!')
// 	}

// 	return (
// 		<a href="#" onClick={handleClick}>Click me</a>
// 	);
// }
// ReactDOM.render(
// 	<ActionLink />,
// 	document.getElementById('root')
// );
// 开关
// class Toggle extends React.Component {
// 	constructor (props) {
// 		super(props);
// 		this.state = {isToggleOn: true};

// 		this.handleClick = this.handleClick.bind(this);
// 	}
// 	handleClick () {
// 		this.setState(
// 			prevState => ({
// 				isToggleOn : !prevState.isToggleOn
// 			})
// 		);
// 	}
// 	render() {
// 		return (
// 			<button  onClick={this.handleClick}>
// 				{this.state.isToggleOn? "On":"Off"}
// 			</button>
// 		);
// 	}
// }
// ReactDOM.render(
// 	<Toggle />,
// 	document.getElementById('root')
// );
// 箭头函数实现回调
// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log('this is:', this);
//   }

//   render() {
//     // This syntax ensures `this` is bound within handleClick
//     return (
//       <button onClick={(e) => this.handleClick(e)}>
//         Click me
//       </button>
//     );
//   }
// }
// ReactDOM.render(
// 	<LoggingButton />,
// 	document.getElementById('root')
// );
// 条件化组件
// function UserGreeting(props) {
// 	return <h1>Welcome Back!</h1>
// }
// function GuestGreeting(props) {
// 	return <h1>Please Sign Up</h1>
// }
// function Greeting(props) {
// 	const isLoggedIn = props.isLoggedIn;
// 	if (isLoggedIn) {
// 		return <UserGreeting />;
// 	} else {
// 		return <GuestGreeting />;
// 	}
// }
// ReactDOM.render(
// 	<Greeting isLoggedIn={true} />,
// 	document.getElementById('root')
// );
// 有状态组件