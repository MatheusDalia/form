import React, { Component } from 'react'
import './Formulario.css'
import moment from 'moment';
import axios from "axios";



export default class MyForm extends React.Component {
        
    constructor(user) {
        super(user);       
        this.state = { 
            username: '' ,
            address: '',
            date: '',
            orderNumber: null,
            errormessage: '',

        };
    } 
    
    myChangeHandlerUser = (event) => {
        this.setState({username: event.target.value});
        
    }

    myChangeHandlerAddress = (event) => {
        this.setState({address: event.target.value});
        
    }

    myChangeHandlerDate = (event) => {
        this.setState({date: event.target.value});
        
    }

    myChangeHandlerOrder = (event) => {
        this.setState({orderNumber: event.target.value});
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';

        if (val !="" && !Number(val)) {
            alert("Your age must be a number");
          }
          this.setState({errormessage: err});
          this.setState({[nam]: val}); 
        
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username + this.state.address + this.state.date + this.state.orderNumber);
        console.log(this.state);
        const newOrder = this.state
        
        axios.post('http:localhost:4000/create', newOrder)

        }
      
      

      

      

    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
          <h1>New Order to {this.state.username} </h1>
          <p>Name:</p>
          <input
            type="text"
            onChange = {this.myChangeHandlerUser}
          />

          <p>Address:</p>
          <input
            type="text"
            onChange = {this.myChangeHandlerAddress}
          />

          <p>Date:</p>
          <input
            type="date"
            max={moment().format("YYYY-MM-DD")}

            onChange = {this.myChangeHandlerDate}
          />

          <p>Order:</p>
          <input
            type="text"
            onChange = {this.myChangeHandlerOrder}
          />

          <input
            type='submit' className="submitButton"
              
            
            
          />
          
        </form>

        

        
        
      );
    }
  }
  