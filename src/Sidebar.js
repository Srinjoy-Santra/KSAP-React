import 'materialize-css';
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
//import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import MaterialIcon, {colorPalette} from 'material-icons-react';

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
                        <a href="#name"><span className="white-text name">John Doe</span></a>
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
                  <li id="society"><a className="waves-effect" href="societies.html" target="dframe">About Societies</a></li>
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

export default Sidebar;
