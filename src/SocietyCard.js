import React, {Component} from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
class SocietyCard extends Component {
  render()
  {
    return (
      //{props.societies.map((society)=>(
            <div className="card" key={this.props.society.name}>


              <div className="card-image">
                <img src={"http://ksac.kiit.ac.in/pix/societies/"+this.props.society.img} alt="society"/>
                <span className="card-title">{this.props.society.name}</span>
              </div>
              <div className="card-content">
                <p>{this.props.society.desc}</p>
              </div>
              <div className="card-action">
                <a href="">Facebook page link</a>
                <br/>
                <a href="">Details link</a>
              </div>
              </div>
            //)
            //)}

      )
}
}

export default SocietyCard
