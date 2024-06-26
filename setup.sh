#!/bin/bash

# Initialize a new npm project
npm init -y

# Install Webpack and its CLI
npm install webpack webpack-cli --save-dev

# Install HtmlWebpackPlugin
npm install --save-dev html-webpack-plugin

# Install Webpack Dev Server
npm install --save-dev webpack-dev-server

# Install Webpack Merge
npm install --save-dev webpack-merge

# Install CSS Loader and Style Loader
npm install css-loader style-loader --save-dev

# Install Sass Loader
npm install sass-loader sass webpack --save-dev

echo "All dependencies have been installed. Your project is ready to use Webpack."