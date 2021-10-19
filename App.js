
import './App.css';
import React, { Component } from 'react';
import './exercice1.js';
import './exercice3.js';


class App extends Component {
  constructor(props) {
    super(props);
 };
  
  
  render() {
  return (
    <>
      <h1>tp1</h1>
      <exercice1/>
      <exercice3/>
    </> 
    )

}
}
export default App;
