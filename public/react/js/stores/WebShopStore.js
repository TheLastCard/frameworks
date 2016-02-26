var EventEmitter = require('events').EventEmitter;
var WebShopDispatcher = require('../dispatcher/WebShopDispatcher.js');
var Constants = require('../constants/WebShopConstants.js');

var WebShopStore = new EventEmitter();

WebShopStore.getProducts = function () {
    console.log(jquery);
    return jquery.get(Constants.productsUrl);
}


module.exports = WebShopStore;