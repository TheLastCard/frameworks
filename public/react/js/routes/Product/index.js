module.exports = {
    path: 'product/:productId',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Product.react.js'))
        })
    }
}