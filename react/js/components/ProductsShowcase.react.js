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
                <div className="row text-center">
                    <div className="small-12 columns">
                        <h2>{this.state.productsTitle}</h2>
                    </div>
                </div>
                <div className="row">
                    {this.state.productsHTML}
                </div>
            </div>
        );
    }
});

module.exports = ProductsShowcase;