import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
    mode: 'production',
    entry: './src/main.tsx',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(process.cwd(), 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ["@babel/preset-react", { "runtime": "automatic" }], '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: path.resolve(process.cwd(), 'dist'),
        compress: true,
        port: 3000,
        open: true,
    },
};
