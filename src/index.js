import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './Clock';
import Textarea from './Textarea';
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
// 有状态登录组件
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
// function LoginButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Login
// 		</button>
// 	);
// }
// function LogoutButton(props) {
// 	return (
// 		<button onClick={props.onClick}>
// 			Logout
// 		</button>
// 	);
// }
// class LoginControl extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.handleLoginClick  =this.handleLoginClick.bind(this);
// 		this.handleLogoutClick =this.handleLogoutClick.bind(this);
// 		this.state = {isLoggedIn:false};
// 	}
// 	handleLoginClick(){
// 		this.setState({isLoggedIn:true});
// 	}
// 	handleLogoutClick(){
// 		this.setState({isLoggedIn:false});
// 	}

// 	render(){
// 		const isLoggedIn=this.state.isLoggedIn;
// 		let button = null;
// 		if(isLoggedIn){
// 			button = <LogoutButton onClick={this.handleLogoutClick}/>
// 		} else {
// 			button = <LoginButton onClick={this.handleLoginClick}/>
// 		}
// 		return (
// 			<div>
// 				<Greeting isLoggedIn={isLoggedIn}/>
// 				{button}
// 			</div>
// 		);
// 	}
// }
// ReactDOM.render(
// 	<LoginControl />,
// 	document.getElementById('root')
// );
//显示信息
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

// // const messages = ['React', 'Re: React', 'Re:Re: React'];
// const messages = [];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );
// 显示隐藏warning组件
// function WarningBanner(props) {
// 	if (!props.warn) {
// 		return null;
// 	}
// 	return (
// 		<div className="warning">
// 			Warning!
// 		</div>
// 	);
// }
// class Page extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {showWarning:true};
// 		this.handleToggleClick = this.handleToggleClick.bind(this);
// 	}
// 	handleToggleClick(){
// 		this.setState(prevState => ({
// 			showWarning: !prevState.showWarning
// 		}));
// 	}
// 	render(){
// 		return (
// 			<div>
// 				<WarningBanner warn={this.state.showWarning} />
// 				<button onClick={this.handleToggleClick}>
// 					{this.state.showWarning?'Hide':'Show'}
// 				</button>
// 			</div>
// 		);
// 	}

// } 
// ReactDOM.render(
// 	<Page />,
// 	document.getElementById('root')
// );
// 
// const number = [1,2,3,4,5];
// const listItem = number.map(number=>
// 	<li>{number}</li>
// );
// ReactDOM.render(
// 	<ul>{listItem}</ul>,
// 	document.getElementById('root')
// );
//key
// function NumberList(props){
// 	const numbers = props.numbers;
// 	const numberList = numbers.map((number) => 
// 		<li key={number.toString()}>
// 			{number}
// 		</li>
// 	);
// 	return (
// 		<ul>{numberList}</ul>
// 	);
// }
// const numbers = [1,2,3,4,5];
// ReactDOM.render(
// 	<NumberList numbers={numbers}/>,
// 	document.getElementById('root')
// );
// blog
// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );
// 
// class NameForm extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {value: ' '};
// 		this.handleChange  = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);	
// 	}
// 	handleChange(event){
// 		this.setState({value: event.target.value});
// 	}
// 	handleSubmit(event){
// 		alert('A name was submit: '+ this.state.value);
// 		event.preventDefault();
// 	}
// 	render(){
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name:
// 					<input type="text" value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }
// ReactDOM.render(
// 	<NameForm />,
// 	document.getElementById('root')
// );

// ReactDOM.render(
// 	<Clock />,
// 	document.getElementById('clock')
// );
ReactDOM.render(
	<Textarea />,
	document.getElementById('root')
);