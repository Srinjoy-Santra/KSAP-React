import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SocietyCard from'./SocietyCard'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

/*class Society{
    constructor(name,img,desc){
        this.name = name;
        this.img = img;
        this.desc = desc;
    }
}

const societies = ['KSCE.jpg', 'alumni.jpg', 'apogie.jpg', 'automobile.jpg', 'cook.jpg', 'drama.jpg', 'e-cell.jpg', 'fashion.jpg', 'film.jpg', 'finance.jpg', 'it.jpg', 'kamakshi.jpg', 'karma.jpg', 'kartavya.jpg', 'khetsen.jpg', 'khwab.jpg', 'khwahishein.jpg', 'kiitmun.jpg', 'korus.jpg', 'kreative.jpg', 'krs.jpg', 'marketing.jpg', 'qutopia.jpg', 'webdevet.jpg', 'write.jpg']
const desc="This society aims to perceive, build and conceive what the world normally cannot. It welcomes members who are strongly motivated to work for the populace of the world."
let createSocieties=[]

createSociety = () => {
 for (var i= 0; i < societies.length; i++)
 {
   createSocieties.push(<div className="col l3 m6 s12"><SocietyCard society={new Society({this.props.societies[i]}.toUpperCase().slice(0,-4),this.props.societies[i],this.props.desc)}/></div>)
 }
 return createSocieties
}
*/
class App2 extends Component {

  state = {
    desc : "This society aims to perceive, build and conceive what the world normally cannot. It welcomes members who are strongly motivated to work for the populace of the world.",
    societies : [{name :'KSCE.jpg'},
    {name :'alumni.jpg'},
    {name :'apogie.jpg'},
    {name :'automobile.jpg'},
    {name :'cook.jpg'},
    {name :'drama.jpg'},
    {name :'e-cell.jpg'},
    {name :'fashion.jpg'},
    {name :'film.jpg'},
    {name :'finance.jpg'},
    {name :'it.jpg'},
    {name :'kamakshi.jpg'},
    {name :'karma.jpg'},
    {name :'kartavya.jpg'},
    {name :'khetsen.jpg'},
    {name :'khwab.jpg'},
    {name :'khwahishein.jpg'},
    {name :'kiitmun.jpg'},
    {name :'korus.jpg'},
    {name :'kreative.jpg'},
    {name :'krs.jpg'},
    {name :'marketing.jpg'},
    {name :'qutopia.jpg'},
    {name :'webdevet.jpg'},
    {name :'write.jpg'}]
  }

  render() {



    return (
      <div className="App2">
          <h2 className="center blue-text">Come and be a part of this amazing community</h2>

          <div className="flex-container row">
            {this.state.societies.map((society,index) => (
              <div className="col l3 m6 s12">
                  <SocietyCard society={society}/>
                </div>))}
          </div>
      </div>
    );
  }
}

export default App2;
