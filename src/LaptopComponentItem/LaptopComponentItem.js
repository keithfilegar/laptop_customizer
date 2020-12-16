import React from 'react';
import slugify from 'slugify'
import LaptopComponentOptions from '../LaptopComponentOptions/LaptopComponentOptions'

class LaptopComponentItem extends React.Component {
    render() {
        return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {this.props.features[this.props.feature].map(item => 
                <LaptopComponentOptions
                    item={item}
                    feature={this.props.feature}
                    idx={this.props.idx}
                    key={slugify(JSON.stringify(item))}
                    features={this.props.features}
                    currencyFormat={this.props.currencyFormat}
                    selected={this.props.selected}
                    onUpdateSelection={this.props.onUpdateSelection}
                    />)}
            </fieldset>
        )
    }
}

export default LaptopComponentItem