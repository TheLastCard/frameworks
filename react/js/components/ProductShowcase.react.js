var React = require('react');

var ProductShowcase = React.createClass({
    propTypes: {
        product: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            imgSrc: 'Ok',
            title: '',
            price: ''
        }
    },

    render: function () {
        var product = this.props.product;
		return (
				<div className="column">
					<img className="thumbnail" src={product.img} />
					<h5>{product.title}</h5>
					<p>{product.price}</p>
					<a href="#" className="button expanded">Kjøp</a>
				</div>
			);
	}
});

module.exports = ProductShowcase;