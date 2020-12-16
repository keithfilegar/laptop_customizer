import React from 'react';
import slugify from 'slugify'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class LaptopComponentOptions extends React.Component {
    render() {
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={this.props.key}
                className="feature__option"
                name={slugify(this.props.feature)}
                checked={this.props.item.name === this.props.selected[this.props.feature].name}
                onChange={() => this.props.onUpdateSelection(this.props.feature, this.props.item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
              </label>
            </div>
          );
    }
}

export default LaptopComponentOptions