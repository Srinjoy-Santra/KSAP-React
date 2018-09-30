import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SocietyCard from'./SocietyCard'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Society{
    constructor(name,img,desc){
        this.name = name;
        this.img = img;
        this.desc = desc;
    }
}

class App extends Component {
  render() {
    const societies = ['KSCE.jpg', 'alumni.jpg', 'apogie.jpg', 'automobile.jpg', 'cook.jpg', 'drama.jpg', 'e-cell.jpg', 'fashion.jpg', 'film.jpg', 'finance.jpg', 'it.jpg', 'kamakshi.jpg', 'karma.jpg', 'kartavya.jpg', 'khetsen.jpg', 'khwab.jpg', 'khwahishein.jpg', 'kiitmun.jpg', 'korus.jpg', 'kreative.jpg', 'krs.jpg', 'marketing.jpg', 'qutopia.jpg', 'webdevet.jpg', 'write.jpg']
    const desc="This society aims to perceive, build and conceive what the world normally cannot. It welcomes members who are strongly motivated to work for the populace of the world."
    //createSociety = () => {
      let createSocieties=[]
       for (var i= 0; i < societies.length; i++)
       {
         createSocieties.push(<div className="col l3 m6 s12"><SocietyCard society={new Society(societies[i].toUpperCase().slice(0,-4),societies[i],desc)}/></div>)
       }
       //return createSocieties
    //}

    return (
      <div className="App">
          <h2 className="center blue-text">Come and be a part of this amazing community</h2>
          <div className="flex-container row">
            {createSocieties}
          </div>
      </div>
    );
  }
}

export default App;
