var React = require('react');
var ReactDom = require('react-dom');
var WebShop = require('./components/WebShop.react.js');
var Product = require('./components/Product.react.js');
var ProductShowcase = require('./components/ProductShowcase.react.js');
var ProductsShowcase = require('./components/ProductsShowcase.react.js');


// not using an ES6 transpiler
var Router = require('react-router').Router
var Route = require('react-router').Route
var browserHistory = require('react-router').browserHistory;

ReactDom.render((    
    <Router history={browserHistory}>
        <Route path="/react" component={WebShop} />
        <Route path="/react/product/:productId" component={Product} />
        <Route path="*" component={WebShop} />
    </Router>
),document.getElementById('webshop'));