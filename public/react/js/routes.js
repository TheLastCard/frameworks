var React = require('react'),
ReactDOMServer = require('react-dom/server.js'),
ReactApp = React.createFactory(require('./components/WebShop.react.js'));

module.exports = function (app) {

    app.get('/react', function (req, res) {
        // React.renderToString takes your component
        // and generates the markup
        var reactHtml = ReactDOMServer.renderToString(ReactApp({}));
        // Output html rendered by react
        // console.log(myAppHtml);
        res.render('index.ejs', { reactOutput: reactHtml });
    });

};