import React, { Component } from 'react';
import './styles/card.css';

export class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.card.name} className="card">
        <div className="side">
          <p className="title">
            {this.props.card.name}
          </p>
          <p className="apr">
          APR:
            <strong>
              {' '}
              {this.props.card.apr}
              %
            </strong>
          </p>
          <p className="b-t">
          Balance Transfer Offer Duration:
            <strong>
              {` ${this.props.card['Balance Transfer Offer Duration']}`}
              {' '}
              months
            </strong>
          </p>
          <p className="purchase">
          Purchase Offer Duration:
            <strong>
              {` ${this.props.card['Purchase Offer Duration']}`}
              {' '}
              months
            </strong>
          </p>
          <p className="credit">
          Credit Available:
            <strong>
              {` £${this.props.card['Credit Available']}`}
            </strong>
          </p>
        </div>
        <div className="side back">
          <p>{this.props.card.Description}</p>
          <p>
          Select:
            <input
              type="checkbox"
              name={this.props.card.name}
              value={this.props.card['Credit Available']}
              onChange={this.props.onChange}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
