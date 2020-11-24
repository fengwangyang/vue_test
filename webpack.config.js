const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development", // "production" | "development" | "none"  // 告诉webpack是生产环境还是开发环境.
  entry: "./main.js", // string | object | array  // 默认 ./src
  // 入口起点，可以指定多个入口起点
  output: {
    // 输出，只可指定一个输出配置
    path: path.resolve(__dirname, "dist"), // string
    //  所有输出文件所在的目录
    // 必须是绝对路径(use the Node.js path module)
    filename: "index.js", // string    // 输出文件的名称
    // library: "Vue", // string,
    // //导出库的名称
    // libraryTarget: "umd", // universal module definition    // the type of the exported library
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        title: 'test'
    })
]
}
