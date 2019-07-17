# Babel Webpack Starter

A starter pack to build JavaScript applications using standards from ES2015, ES2016 & ES2017. It uses webpack, Babel and webpack-dev-server to compile and serve. It is fully compatible with Async/Await as it uses the Babel polyfill.

### Version
1.1.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Serve
To serve in the browser  - Runs webpack-dev-server

```sh
$ npm start
```

### Build
Compile and build

```sh
$ npm run build
```

## More Info

### Author

Brad Traversy
[Traversy Media](http://www.traversymedia.com)

### License

This project is licensed under the MIT License

### Troubleshooting

if above usage failed, try running

```sh
$ npx babel-upgrade --write
$ npm install
```

then removed '@babel/preset-stage-0' from webpack.config.js

All thanks to <a href="https://github.com/bradtraversy/babel_webpack_starter/issues/6">this</a>.

### Production

After running

```sh
$ npm run build
```

You can now upload the index.html, build file and assets to your server/client side.
And don't include the other files.
As for the api it is made from the backend (usually built with nodejs, ruby, etc.).