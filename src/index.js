import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

class CreateButton extends React.Component {
  render(){
  return <button onClick={() => this.props.onClickHandler(this.props.number[2])} data-number>{this.props.number[2]}</button>;
  }
}

class A extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  clear() {
    console.log("User pressed AC.  It made it into the clear function");
  }

  updateDisplay() {
    console.log("Executed updateDisplay function.");
  }

  delete() {
    console.log("Executed delete function.");
  }  

  compute() {
    console.log("Works.");
  } 

  chooseOperation(theButton) {
    console.log("The operation it passed is ",theButton);
  } 

  appendNumber(theButton) {
    console.log("The operation it passed is ",theButton);
  }

  onClickHandler(theButton){
    console.log("It made it in to onClickHandler.  The parameter value is ",theButton);
    switch(theButton){
      case "AC":
          this.clear();
          this.updateDisplay();
          console.log("This AC is happening in the case statement "+theButton)
          break;
      case "DEL":
          this.delete();
          this.updateDisplay();
          break;
      case "=":
          this.compute();
          this.updateDisplay();
          // This is a hack I used because the numbers weren't clearing after equals.
          // wasEqual = true;
          // this.currentOperand = '';
          // this.previousOperand = '';
          // this.operation = undefined;
          break;
      case "%":
      case "*":
      case "+":
      case "-":
          this.chooseOperation(theButton);
          this.updateDisplay();
          break;
      case ".":
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 0:
          this.appendNumber(theButton);
          this.updateDisplay();
          break;
  }
  }


  c() {
    console.log("It got in here!");
    return;
  }

  render() {
    const printButtons = 
    [
        ['button', null, null],
        ['button','data-all-clear','AC'],
        ['button','data-delete','DEL'],
        ['button','data-operation','%'],
        ['button','data-number',1],
        ['button','data-number',2], 
        ['button','data-number',3], 
        ['button','data-operation','*'],
        ['button','data-number',4],
        ['button','data-number',5], 
        ['button','data-number',6], 
        ['button','data-operation','+'],
        ['button','data-number',7],
        ['button','data-number',8], 
        ['button','data-number',9], 
        ['button','data-operation','-'],
        ['button','data-operation','.'], 
        ['button','data-number',0], 
        ['button', null, null],
        ['button', 'data-equals', "="],
    ];

    return(
    <div>
    <IntroText />
    <div className='onecolumnwrapper'>
      <div className="calculator-grid">
        <Output />
        {printButtons.map((number) =>{
          return (
            <CreateButton number={number} onClickHandler={this.onClickHandler} />
          )
        
        })}
      </div>
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
          <li>Add some of the functions onto the buttons</li>
          <li>Get it to output the values to the console.</li>
          <li>Output to the display component (which I don't know how to do).</li>
          <li>I'm following this <a href="https://codepen.io/kericarpenter/pen/YzayKWN" target="_blank" rel="noopener noreferrer">React Calcuator</a> from CodePen.io</li>
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
