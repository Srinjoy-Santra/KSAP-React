import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import SocPage from './Societies';
import Home from './Home';
import { Router, Route, Link } from 'react-router-dom';
//import MaterialIcon, {colorPalette} from 'material-icons-react';
//import Sidebar from './Sidebar'
import M from "materialize-css/dist/js/materialize.min.js";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/Societies",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

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
      <Home/>
    </div>
  }/>

  <Route path="/Societies" component={SocPage}/>

  </div>

    );
  }
}

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav show-on-large">
                <li />
                  <div className="user-view">
                        <div className="background">
                          <img src="office.jpg" alt=""/>
                        </div>
                        <a href="#user"><img className="circle" src="karakalem_hande_ercel_by_serkanpainter-dawsitd.jpg" alt=""/></a>
                        <a href="#name"><span className="white-text name">Sree Dey</span></a>
                        <a href="#roll"><span className="white-text email">16050XX</span></a>
                      </div>
                  <li/>

                  <li><a href="#!"><i className="material-icons">cloud</i>Home page</a></li>
                  <li><a href="#!">Dashboard</a></li>
                  <li><div className="divider" /></li>
                  <li id="profl"><a className="subheader" href="#">Profile</a></li>
                  <li id="downs"><a className="subheader" href="#">Downloads</a></li>
                  <li><div className="divider" /></li>
                  <li id="onAppl"><a className="waves-effect" href="#!">Online Application</a></li>
                  <li id="society"><Link to="/Societies" className="waves-effect">About Societies</Link></li>

                  <li id="fb"><a className="waves-effect" href="#!">Feedback</a></li>
                  <li id="pay"><a className="waves-effect" href="#!">Payment</a></li>

                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large">
                    <i className="material-icons">menu</i>

                </a>


            </div>
        );
    }
}

export default App;
