const path = require("path"); //nos permite saber donde está ubicado este proyecto
//Si está en un servidor o computadora local
//PLUGINS
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", //punto de entrada del proyecto
    output: { //punto de salida del proyecto optimizado y terminado
        path: path.resolve(__dirname, "dist"),
        filename:"[name].[contenthash].js", //nombre del archivo optimizado(el index.js)
    },
    mode:"development",
    devtool:"source-map",
    resolve: {//Con que extensiones va a trabajar webpack
        extensions:[".js", "jsx"],
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test:/\.html$/,
                use: {
                    loader: "html-loader", 
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename:"[name].[contenthash].html",
                title: "Yard Sale",
                inject: true,
                template: "./public/index.html"
            }
        )
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        historyApiFallback: true, //para tener un historial
        port: 9000, //configura el puerto
    },
  
}