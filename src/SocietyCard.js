import React, {Component} from 'react'
//import { Link } from 'react-router';
//"http://ksac.kiit.ac.in/pix/societies/" + this.props.society.img
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import uuidv from  'uuid/v4';



class SocietyCard extends Component {

  render()
  {

    return (
      <div className="card" key={uuidv}>
          <div className="card-image">
            <img src={"http://ksac.kiit.ac.in/pix/societies/" + this.props.society.name} alt="society"/>
            <span className="card-title">{this.props.society.name.toUpperCase().slice(0,-4)}</span>
          </div>
          <div className="card-content">
            <p>{this.props.desc}</p>
          </div>
          <div className="card-action">

            <a href="">Facebook page link</a>
            <br/>
            <a href="">Details link</a>
          </div>
        </div>

    )
  }

}


export default SocietyCard
