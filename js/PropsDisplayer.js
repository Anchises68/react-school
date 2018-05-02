import React from 'react';
import ReactDOM from 'react-dom';

console.log("yo yo");

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props.myProp);


    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{ stringProps }</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="shite" />, document.getElementById('app'));
