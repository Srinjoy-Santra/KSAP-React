import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import ListSocieties from'./ListSocieties'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Society{
    constructor(name,img,desc){
        this.name = name;
        this.img = img;
        this.desc = desc;
    }
}
/*
class Societies extends React.Component {
  render() {
    //const people = this.props.contacts

    return <ol>
      {societies.map(name=>name+"!")}
    </ol>
    return (




    );

  }
}*/

class App extends Component {
  render() {
    const societies = ['KSCE.jpg', 'alumni.jpg', 'apogie.jpg', 'automobile.jpg', 'cook.jpg', 'drama.jpg', 'e-cell.jpg', 'fashion.jpg', 'film.jpg', 'finance.jpg', 'it.jpg', 'kamakshi.jpg', 'karma.jpg', 'kartavya.jpg', 'khetsen.jpg', 'khwab.jpg', 'khwahishein.jpg', 'kiitmun.jpg', 'korus.jpg', 'kreative.jpg', 'krs.jpg', 'marketing.jpg', 'qutopia.jpg', 'webdevet.jpg', 'write.jpg']
    const desc="This society aims to perceive, build and conceive what the world normally cannot. It welcomes members who are strongly motivated to work for the populace of the world."
    //createSociety = () => {
      let arr=[]
       for (var i= 0; i < societies.length; i++)
       {
         arr.push(new Society(societies[i].toUpperCase().slice(0,-4),societies[i],desc))
       }
       //return arr
    //}

    return (
      <div className="App">
          <h2 className="center blue-text">Come and be a part of this amazing community</h2>
          <div className="flex-container row">

            <ListSocieties societies={arr}/>
          </div>
      </div>
    );
  }
}

export default App;
