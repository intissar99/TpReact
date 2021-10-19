import React, { Component } from 'react';
import { Data } from './Data.js';

class exercice3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm:''
       };
     };

  handleInput = (e) => {
  this.setState ({searchTerm:e.target.value}) };
  
  
  render() {
  return (
    <div className="exercice3">
    <input  type="text" placeholder="Search Box" />
      {Data.filter((val)=>{
          
        val.gender.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        val.Email.toLowerCase().includes(this.state.searchTerm.toLowerCase());
        val.Phone.includes(this.state.searchTerm);
        val.Balance.includes(this.state.searchTerm);
        val.Likes.includes(this.state.searchTerm);
        val.Rating.includes(this.state.searchTerm);

        return val
      }).map((val,key) => {
        return(
        <div className="user" key={key} >
          <p> <b>Gender:</b>{val.gender}</p>
          <p> <b>Name:</b> {val.name}</p>
          <p> <b>Email: </b> {val.email}</p>
          <p> <b>Phone: </b> {val.phone}</p>
          <p> <b>Address:</b> {val.address}</p>
          <p> <b>balance:</b> {val.balance}</p>
          <p> <b>Likes:</b>{val.likes}</p>
          <p> <b>Rating:</b>{val.rating}</p>


        
        </div>
        );
      
        })}  
      </div> 
  );
}
}
export default exercice3;