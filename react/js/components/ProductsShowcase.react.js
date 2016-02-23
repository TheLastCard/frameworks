var React = require('react');
var WebShopStore = require('../stores/WebShopStore.js');
var ProductShowcase = require('./ProductShowcase.react.js');

var ProductsShowcase = React.createClass({
    propTypes: {
        products: React.PropTypes.object.isRequired
    },

    getInitialState: function(){
        return {
            productsTitle: 'Ok',
            productsHTML: []
        }
    },

    componentDidMount: function() {
        console.log(this.props.products);
        this.props.products.then(function(data){
            var productsArray = [];
            for(var key in data.products){
                productsArray.push(<ProductShowcase key={key} id={key} product={data.products[key]} />);
            }

            this.setState({
                productsTitle: data.title,
                productsHTML: productsArray
            });
        }.bind(this));
    },

    render: function(){
        
        return (
            <div>
                <div className="row column text-center">
                    <h2>{this.state.productsTitle}</h2>
                </div>
                <div className="row small-up-2 large-up-4">
                    {this.state.productsHTML}
                </div>
            </div>
        );
    }
});

module.exports = ProductsShowcase;