
const path                          = require('path');
const distPath                      = path.join(__dirname, '..', 'dist');
const config = {
    entry: './index.js',
    output: {
        path:distPath,
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    devtool: 'source-map',
    module: {
   
        loaders: [
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['es2015', 'react']
                        },
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    }
};

module.exports = config;
