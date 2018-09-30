import React, {Component} from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
class ListSocieties extends Component {
  render()
  {
    return (
        <div className="col l3 m6 s12">
          {this.props.societies.map((society)=>(
            <div className="card" key={society.name}>
              <div className="card-image">
                <img src={"http://ksac.kiit.ac.in/pix/societies/"+society.img} alt="society"/>
                <span className="card-title">{society.name}</span>
              </div>
              <div className="card-content">
                <p>{society.desc}</p>
              </div>
              <div className="card-action">
                <a href="">Facebook page link</a>
                <br/>
                <a href="">Details link</a>
              </div>
            </div>
          )
          )}
        </div>
      )
}
}

export default ListSocieties
