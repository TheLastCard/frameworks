var React = require('react');

var WebShopStore = require('../stores/WebShopStore.js');
var ProductShowcase = require('./ProductShowcase.react.js');
var ProductsShowcase = require('./ProductsShowcase.react.js');


var WebShop = React.createClass({
    getInitialState: function(){
        console.log('WebShop -> getInitialState');
        return {
            products: {}
        }
    },
    componentDidMount: function() {
        console.log('WebShop -> componentDidMount');
        WebShopStore.getProducts($).then(function(data){
            console.log('******************** data: ',data);
            this.setState({
                products: data.products
            });
        }.bind(this));
    },

    render: function () {
        return (
                <div className="container">
                    <ProductsShowcase products={ this.state.products } />
                </div>
            );
    }
});


module.exports = WebShop;