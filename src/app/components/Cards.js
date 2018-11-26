import React, { Component } from 'react';

import Card from './Card';

export default class Cards extends Component {
  render() {
    let cards = this.props.cardContents.map(card => {
      return <Card card={card} key={card.title} />
    });
    return (
      <section id="section-cards" className="p-3 py-5">
        <div className="container">
          <div className="row">
            {cards}
          </div>
        </div>
      </section>
    )
  }
}
