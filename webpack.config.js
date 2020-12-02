const path = require('path')

module.exports = {
    mode : "development",
    
    // entry point
    entry: "./src/index.tsx",

    //build results in dist/main.js
    output: {
        filename : "main.js",
        path : __dirname + "/dist"
    },

    //to debugging add source map
    devtool : "source-map",

    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json']
    },

    module : {
        rules : [
            //ts-loader will trans file .ts or .tsx extension
            { 
               test : /\.tsx?$/,
               loader: "ts-loader" 
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader' }
                ]

              },
        ]
    },

    //add webpack server running...
    devServer :{
        contentBase : './',
        publicPath : '/dist'
    }

}

