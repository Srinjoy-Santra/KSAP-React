import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import SocPage from './Societies';
import Home from './Home';
import { Route, Link } from 'react-router-dom';
//import MaterialIcon, {colorPalette} from 'material-icons-react';
import Sidebar from './Sidebar'
// import M from 'materialize-css'


class App extends Component {

openLink=(ref)=>{
  ReactDOM.render(<SocPage/>, document.getElementById('root'));
}

/*$(React).ready(function(){
    $('.sidenav').sidenav();
  });

 $(".button-collapse").sidenav();*/


  render() {

    return (

        <div>
          <Route exact path="/" render={()=>
            <div>

        <nav>
          <div className="nav-wrapper green">
      <Sidebar/>


        <Link to="/Societies" className="brand-logo center">KSAP</Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href='true'>sass</a></li>
          <li><a href='true'>sass <span className="new badge red">4</span></a></li>
          <li><a href='true'>sass</a></li>
        </ul>
      </div>

      </nav>
    </div>
  }/>
  <Home/>
  <Route path="/Societies" component={SocPage}/>
  <Route path="slide-out" component={SocPage}/>
  </div>

    );
  }
}

export default App;
