import React from 'react';

function FancyBorder(props){
	return (
		<div className={'FancyBorder FancyBorder-' + props.color} >
			{props.children}
		</div>
	);
} 


export function WelcomeDialog() {
	return (
		<FancyBorder color="blue">
			<h1 className="Dailog-title">
				Welcome
			</h1>
			<p className="Dailog-message">
				Thank you for learning!
			</p>
		</FancyBorder>
	);
}

// export default this.WelcomeDialog;