import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      numb:[],
      operators:'',
      text1:'',
      text2:''
    }
    this.clicked = this.clicked.bind(this);
    // this.result = this.result.bind(this);
  }

 clicked(e){
 var {text1}=this.state
 var {text2}=this.state
 var {operators}=this.state
 var a=e.target.innerText
  if(a==='+'||a==='-'||a==='*'||a==='/'){
    this.setState({operators:a,
                   text1:text1})

 }
else{
  this.setState({text1: text1+a})}
  // this.setState({text1: text2+a})

  console.log(this.state.text1 +" " + this.state.text2);
    // console.log(eval(1+2));
  }

 operator(e){
  var {operators}=this.state
var a=e.target.innerText
this.setState({operators:a})
console.log(this.state.operators)
 }
  render() {
    // const {text1}=this.state;
    // const {text2}=this.state;
    // const {operator}=this.state;
    //  console.log(this.state.text)
    return (
     <div>
       <h1>Calculator</h1>
       <input type='text' value={this.state.text1+this.state.operators+this.state.text2}/><br/>
       <button onClick={this.clicked}>1</button>
       <button onClick={this.clicked}>2</button>
       <button onClick={this.clicked}>3</button>
       <button onClick={this.clicked}>4</button>
       <button onClick={this.clicked}>5</button>
       <button onClick={this.clicked}>6</button>
       <button onClick={this.clicked}>7</button>
       <button onClick={this.clicked}>8</button>
       <button onClick={this.clicked}>9</button>
       <button onClick={this.clicked}>0</button>
       <button onClick={this.operator}>+</button>
       <button onClick={this.operator}>-</button>
       <button onClick={this.operator}>/</button>
       <button onClick={this.operator}>*</button>
       <button onClick={this.clicked}>result</button>
     </div>
    );
  }
}

export default App;
