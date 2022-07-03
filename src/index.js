import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Remarkable from 'remarkable';
import reportWebVitals from './reportWebVitals';

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
    return(
    <div>
    <h1>Calculator refactored into React</h1>
    <p>Goal:  Refactor my existing javascript calculator into a React app.</p>
    <h5>I am doing this in July 2022 for Kevin Chan, my tutor to prove my React skills.</h5>
    <h5>Next steps:</h5>
    <ul>
      <li>Look at how to add javascript in here, not just html.</li>
      <li>Figure out how to add CSS in here so it looks the same.</li>
    </ul>
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
      // dangerouslySetInnerHTML={this.state.value}
    >{this.state.value}
    </div>
    </div>
    )
  }

}


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
