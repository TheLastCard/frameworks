var React = require('react');
var WebShopStore = require('../stores/WebShopStore.js');


var Product = React.createClass({
    getInitialState: function(){
        return {
            product: {
                imgSrc: 'Ok',
                title: 'Default title',
                price: 'Default price',
                description: 'Default description'
            }
        }
    },
    componentDidMount() {
        WebShopStore.getProducts().then(function(data){
            this.setState({
                product: data.products[this.props.params.productId]
            });
        }.bind(this));
    },

    render: function () {
        return (
            <div className="container">
                <div className="row">
    			    <div className="small-12 columns">
                        <br />
    				    <img className="thumbnail" src={this.state.product.img} />
                        <h1>{this.state.product.title}</h1>
                        <p>{this.state.product.description}</p>
    				    <p>{this.state.product.price}</p>
    				    <a href="#" className="button expanded">Kjøp</a>
    			    </div>
                </div>
            </div>
    		);
    }
});

module.exports = Product;