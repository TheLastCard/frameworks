var React = require('react');
var render = require('react-dom').render;
var WebShop = require('./components/WebShop.react.js');


var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory ;

const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/react',
        component: require('./components/WebShop.react.js'),
        childRoutes: [
          require('./routes/Product')
        ]
    } ]
}

render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById("webshop")
);
