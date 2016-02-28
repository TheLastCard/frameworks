var EventEmitter = require('events').EventEmitter;
var WebShopDispatcher = require('../dispatcher/WebShopDispatcher.js');
var Constants = require('../constants/WebShopConstants.js');

var WebShopStore = new EventEmitter();

WebShopStore.getProducts = function ($) {
    return $.get(Constants.productsUrl);
}


module.exports = WebShopStore;