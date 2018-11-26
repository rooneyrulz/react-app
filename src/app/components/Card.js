import React from 'react'

export default function Card(props) {
  return (
    <div className="col col-xs-12 col-sm-12 col-md-4 mb-2">
      <div className="card">
        <img src={props.card.image} alt="" className="card-img-top"/>
        <div className="card-body text-left">
          <h4 className="card-title">{props.card.title}</h4>
          <p className="card-text">{props.card.description}</p>
          <a href="#!" className="btn btn-outline-info">Check out</a>
        </div>
      </div>
    </div>
  )
}
