import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";
import SocPage from './Societies';
import { Route, Link } from 'react-router-dom';
import './App.css'

class Society{
    constructor(name,time,venue){
        this.name = name;
        this.time = time;
        this.venue = venue;
    }
}

function EventsCard(props){

  return (
    <div className="col s12 m6 l1 out-card">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Event Name: {props.event}</span>
          <p>Date and Timing: {props.time}</p>
          <p>Society: {props.name}</p>
          <p>Venue: {props.venue}</p>
        </div>
        <div className="card-action">
        <a href="#">Society link</a>
        <a href="#">FB link</a>
        </div>
      </div>
  </div>
  )
}

function SlideItem(){
  return(
    <li>
    <img src="gallery/kri.jpg" alt='Gallery Image' className="slide-item" />
    <div className="caption center-align">
      <h2>Event</h2>
      <h4 className="light grey-text text-lighten-3">huge success</h4>
    </div>
  </li>
)
}

class Home extends Component {
  state={
    societies:
      [{name:'spicmacay',time:'Wed 9:30 am',venue:'KSAC 1st floor',event:'Raga Blues'},
      {name:'Tedx',time:'Wed 6:30 pm',venue:'KSAC GND floor',event:'Morse Code'}
    ]
    }
    componentDidMount()
    {
      document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
    });
    }

  render() {


    return(
      <div>
      <div className="slider">
        <ul className="slides">
          <SlideItem/>
          <SlideItem/>
          <SlideItem/>

        </ul>
      </div>
  <h1 className="center blue-text">News and Notices</h1>
  <div className="scrollable row " id="events-flex">
    <EventsCard society={this.state.societies[0]}/>
    <EventsCard society={this.state.societies[1]}/>
    <EventsCard society={this.state.societies[1]}/>
    <EventsCard society={this.state.societies[1]}/>
    <EventsCard society={this.state.societies[1]}/>
  </div>
  <h1 className="center blue-text">Gallery</h1>

</div>

    )

  }
}

export default Home;
