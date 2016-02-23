var React = require('react');
var WebShopStore = require('../stores/WebShopStore.js');
var ProductShowcase = require('./ProductShowcase.react.js');
var ProductsShowcase = require('./ProductsShowcase.react.js');

var WebShop = React.createClass({

    getInitialState: function(){
        return {
            products: WebShopStore.getProducts()
        }
    },

    //componentDidMount: function() {
        
    //},
    //componentWillUnmount: function() {
        
    //},

    render: function () {
        return (
                <div className="container">
                    <ProductsShowcase products={ this.state.products } />
                </div>
            );
    }
});


module.exports = WebShop;