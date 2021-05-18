# How to Install

## Ethereum smart contract

Inside the `axia` directory, contains a [Truffle Framework](https://truffleframework.com) project. So you can do all Truffle operations.

Installation of local dependencies:
```
$ yarn
```

### Deployment

Configure your network node inside the `truffle.js` configuration file and run the migration:
```
$ yarn migrate
```

### Testing

You need to keep your [Ganache](https://truffleframework.com/ganache) (it is possible, instead to use [Ganache CLI](https://github.com/trufflesuite/ganache-cli) if you like) node up and running on `port 8545`. It is recommended to have `100+ ETH` in the first account to run all the test cases smoothly.
```
$ yarn test
```

Or you can run it automatically:
```
$ yarn build:test
```

### Coverage

To get coverage statistics, just run the coverage script:
```
$ yarn build:coverage
```

Solidity version: `v0.5.0+commit.1d4f565a`.
```
