import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    /* let peoples = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        peoples = peoples + element.population;
    } */
    const peoples = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h4>Add Country:{cart.length}</h4>
            <h5>Add Total Population:{peoples}</h5>
        </div>
    );
};

export default Cart;