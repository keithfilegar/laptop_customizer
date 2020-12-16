import React from 'react';
import CartItem from '../CartItem/CartItem'
import Total from '../Total/Total'

class CartList extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {Object.keys(this.props.selected).map((feature, idx) =>
                <CartItem 
                idx={idx}
                feature={feature}
                selected={this.props.selected}
                features={this.props.features}
                currencyFormat={this.props.currencyFormat}
                />)}
                <Total 
                selected={this.props.selected}
                currencyFormat={this.props.currencyFormat}
                />
            </section>
        )
    }
}

export default CartList;