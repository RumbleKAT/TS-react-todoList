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
        extensions : [".ts",".tsx",".js"]
    },

    module : {
        rules : [
            //ts-loader will trans file .ts or .tsx extension
            {test : /\.tsx?$/, loader: "ts-loader" } 
        ]
    },

    //add webpack server running...
    devServer :{
        contentBase : './',
        publicPath : '/dist'
    }

}

