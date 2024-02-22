const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : "development", //개발환경 지정
    entry: [
      './src/index.js' //시작점
    ], 
    output: {
      path: __dirname + '/docs',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: { //애플리케이션 시작경로
        static: path.resolve(__dirname, "public"),
        port: process.env.PORT,
        historyApiFallback : true, //router-dom옵션
    },
     plugins: [ //html file을 지정해서 빌드폴더에 넣어주는 플러그인 
       new HtmlWebpackPlugin({
           template: './public/index.html',
           filename: 'index.html',
       }),
       new CopyPlugin({ patterns: [{ from: 'src/assets/img', to: 'assets/img' }] })
    ],
    module: {
        rules: [ //파일을 합칠 때 적용할 룰
            {
                test: /\.html$/,
                use: [
                {
                loader: 'html-loader',
                options: {
                minimize: true,},},],
                },
            {
                test: /\.(js|jsx)$/, //어떤 파일에 적용할 것인가 _ js, jsx 파일에 룰적용할거야
                exclude: /node_modules/, //제외할 폴더
                use : [ //test에서 정한 파일에 어떤 loader와 preset를 적용할것인가
                {
                loader: 'babel-loader', //바벨로더를 사용할거야
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'], // 바벨로 파일을 변환할 때 쓸 프리셋들
                    }
                }]
            },
            {
                test: /\.(css|scss)$/i,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpeg)$/i,
                use: ["file-loader"],
                include: [path.resolve(__dirname, "./public/assets/img")],
                exclude: /node_modules/, //제외함
              },
              {
                test: /\.geojson$/, //json 파일관련 loader설정
                include: [ //정확한 파일경로를 입력해 오류를 방지
                path.resolve(__dirname, "./public/json/menuList.json") , 
                path.resolve(__dirname, "./public/json/category.json"),
                path.resolve(__dirname, "./public/json/menuList.json")],
                type: 'json',
            }
        ]
    },
    resolve: { //확장자 생략
        extensions: ['.ts', '.tsx', '.js', '.jsx' , '.json'],
      },
      
  };
 