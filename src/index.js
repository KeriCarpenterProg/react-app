import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';

function NumberButton(props) {
  return <button data-number>{props.number}</button>;
}

class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value : 'Hello ***world!***!'};
    // this.md = new Remarkable();
    this.b = this.b.bind(this);
  }

  b(e) {
    this.setState(
      {value: e.target.value}
      );
  }

  c() {
    console.log("It got in here!");
    return;
  }

  render() {
    const numbers = [null, "AC","Del","%",1, 2, 3, "*",4, 5, 6, "+",7, 8, 9,"-",".", 0, null, "="];

    // <button className='span-two' data-all-clear>AC</button>
    // <button data-delete>DEL</button>
    // <button data-operation>%</button>
    // <button data-operation="">*</button>
    // <button data-operation="">+</button>
    // <button data-operation="">-</button>
    // <button data-operation="">.</button>
    // <button className="span-two" data-equals="">=</button>
    return(
    <div>
    <IntroText />
    <div className='onecolumnwrapper'>
      <div className="calculator-grid">
        <Output />
        {numbers.map((number) =>{
          return <NumberButton number={number} />
        })}
      </div>
    </div>
    <hr></hr>
    <h3>Below this is template stuff.  Old stuff that it might be helpful to have around for a bit.  But ultimately take out.</h3>
    <label htmlFor='markdown-content'>Enter some markdown here</label>
    <br></br>
    <textarea
      defaultValue={this.state.value}
      onChange={this.b}
      id='markdown-content'
    >
    </textarea>
    <h3>Output of the markdown is:</h3>
    <div
      className='content'
    >{this.state.value}
    </div>
    </div>
    )
  }

}

class IntroText extends React.Component{
	render(){
		return(
      <div>
			    <h1>Calculator refactored into React</h1>
          <p>Goal:  Refactor my existing javascript calculator into a React app.</p>
          <h5>I am doing this in Summer 2022 with Kevin Chan, my tutor's help to improve my React skills.</h5>
          <h5>Next steps:</h5>
        <ul>
          <li>I'm following this <a href="https://codepen.io/kericarpenter/pen/YzayKWN" target="_blank">React Calcuator</a> from CodePen.io</li>
          <li>Figuring out how to use my existing Calculator in "calculatorReact.js" in "my-app" and conform it to the React Calculator.</li>
        </ul>
      </div>
		);
	}
};

class Output extends React.Component{
	render(){
		return(
			<div className='output'>
          <div className='previous-operand' data-previous-operand></div>
          <div className='current-operand' data-current-operand></div>
      </div>
		);
	}
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
