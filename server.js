var express = require('express');
var path = require('path');
var app = express();
bodyParser = require('body-parser');

// Make sure to include the JSX transpiler
require('node-jsx').install();

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));

// Set view path
app.set('views', path.join(__dirname, 'public/react'));

// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');


// Set up Routes for the application
require('./public/react/js/routes.js')(app);

////Route not found -- Set 404
//app.get('*', function (req, res) {
//    res.json({
//        'route': 'Sorry this page does not exist!'
//    });
//});


app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});