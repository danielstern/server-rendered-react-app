const {resolve} = require('path');

module.exports = {
    mode: "development",
    entry:{
        client: "./client/client.jsx",
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    /** can module be omitted for a simple project? No, it cannot. */
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}