var React = require('react');
var Link = require('react-router').Link;

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
				<div className="small-12 medium-6 large-3 columns">
                    <Link to={'/react/product/'+product.id}>
					    <img className="thumbnail" src={product.imgThumb} />
					    <h5>{product.title}</h5>
					    <p>{product.price}</p>
                    </Link>
					<a href="#" className="button expanded">Kjøp</a>
				</div>
			);
	}
});

module.exports = ProductShowcase;