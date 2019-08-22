# Patients Generator

Generate patients record on the fly!

# What I Learned
* DOM manipulation events using only vanilla javascript.
* Setup Babel Webpack Environment.
* Used custom HTTP library with Async and Await.
* Create a fake REST API using JSON Server.
* Display, add, edit, delete patients.

# Usage
```
$ npm install

# Run fake api
$ npm run json:server

$ npm start

# Compile to production
$ npm run build
```

# Troubleshooting
If usage failed try running.
```
$ npx babel-upgrade --write
$ npm install

# Run fake api
$ npm run json:server

$ npm start
```
Removed '@babel/preset-stage-0' from webpack.config.js.
```
# Compile to production
$ npm run build
```