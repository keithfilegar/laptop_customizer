import React from 'react';
import LaptopComponentItem from '../LaptopComponentItem/LaptopComponentItem'

class LaptopOptionList extends React.Component {

    render() {
        
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {Object.keys(this.props.features).map((feature, idx) =>
                    <LaptopComponentItem 
                    feature={feature}
                    idx={idx}
                    featureHash={feature + '-' + idx}
                    features={this.props.features}
                    currencyFormat={this.props.currencyFormat}
                    selected={this.props.selected}
                    onUpdateSelection={this.props.onUpdateSelection}/>)}
            </form>
        )   
    };
}
export default LaptopOptionList