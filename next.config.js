const withCSS = require('@zeit/next-css');

// module.exports = withCSS();

module.exports = withCSS({
    // webpack(config, options){
    //     config.module.rules.push({
    //         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //         use: {
    //             loader: 'url-loader',
    //             options: {
    //                 limit: 100000
    //             }
    //         }
    //     });
    //     return config
    // },
    onDemandEntries:{
        maxInactiveAge: 25*1000,
        pagesBufferLength: 2
    }
});