import React from 'react';

import Header from './Header';
import '../css/Showcase.css';

export default function Showcase(props) {
  return (
    <div id="Showcase" className="Showcase-container">
      <Header navs={props.navbarNavs} />
      <div className="img-wrapper">
        <img src={props.image} alt=""/>
      </div>
      <div className="Showcase-overlay"></div>
      <div className="Showcase-content">
        <h1>My React App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et repellendus aliquam laudantium officiis, sequi debitis illo voluptatem. Culpa, sit laudantium assumenda temporibus est maxime asperiores voluptatem blanditiis nesciunt consectetur!</p>
        <button type="button" href="#!" className="btn btn-dark mr-2 mb-2">Learn More</button>
        <button type="button" href="#!" className="btn btn-danger mr-2 mb-2">Get Started</button>
      </div>
    </div>
  )
}
