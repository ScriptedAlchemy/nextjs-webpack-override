# Next.js Webpack Config Override

### Get total control over Next.js Webpack configurations

<p align="center">
    
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
  <a href="https://www.npmjs.com/package/nextjs-webpack-override">
    <img src="https://img.shields.io/npm/v/nextjs-webpack-override.svg" alt="Version" />
  </a>

  <a href="https://www.npmjs.com/package/nextjs-webpack-override">
    <img src="https://img.shields.io/npm/dt/nextjs-webpack-override.svg" alt="Downloads" />
  </a>

  <a href="https://www.npmjs.com/package/nextjs-webpack-override">
    <img src="https://img.shields.io/npm/dm/nextjs-webpack-override.svg" alt="License" />
  </a>
  
  <a href="https://www.npmjs.com/package/nextjs-webpack-override">
    <img src="https://img.shields.io/npm/l/nextjs-webpack-override.svg" alt="License" />
  </a>
</p>

# Installation

### npm

```sh
npm install nextjs-webpack-override --save
```

### Yarn

```sh
yarn add nextjs-webpack-override
```

# Getting Started

This project allows developers to take full control of Webpack configurations in Next.js projects.
Next only gives limited access to webpack control - often leaving developers limited when trying to perform advanced re-configurations.

```js
// standard next.js config
const NextJsWebpackOverride = require('nextjs-webpack-override');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new NextJsWebpackOverride({
        // any standard webpack options that are usually inaccessible
        optimization: {
          runtimeChunk: 'single',
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module) {
                  // get the name. E.g. node_modules/packageName/not/this/part.js
                  // or node_modules/packageName
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];

                  // npm package names are URL-safe, but some servers don't like @ symbols
                  return `npm.${packageName.replace('@', '')}`;
                },
              },
            },
          },
        },
      })
    );
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;~~~~
  },
};
```
