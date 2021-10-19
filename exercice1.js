import './App.css';
import React, { Component } from 'react';

class exercice1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  };
  IncrementItem = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  DecreaseItem = () => {
    
    this.setState({ counter: this.state.counter - 1 });
  }
  
 
  
  
  
  render() {
  return (
    <div className="exercice1">
   
     <h2> Counter : { this.state.counter }</h2> 
     <button onClick={this.IncrementItem}>+1</button>
     <button disabled={this.state.counter<=0} onClick={this.DecreaseItem}>-1</button>
     
    
        
    </div>
  );
};
  }

export default exercice1;