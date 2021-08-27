const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:8111/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }),
        proxy('/apilist', {
            target: 'https://www.heytap.com/cn',
            changeOrigin: true,
            pathRewrite: {
                '^/apilist': ''
            }
        })
    )
}