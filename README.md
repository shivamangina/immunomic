# Chainlink-hackathon-fall-22-BE

FE: https://github.com/shivamangina/Chainlink-hackathon-fall-22-FE

# To Start chainlink node

```
  npm run chainlink-node

```

## Command in Windows

docker run -p 6688:6688 -v "${pwd}:/chainlink" -it --env-file=.env smartcontract/chainlink:1.9.0 local n -p /chainlink/.password -a /chainlink/.api

### .env

```
ROOT="~/chainlink"
LOG_LEVEL=debug
ETH_CHAIN_ID=80001
CHAINLINK_TLS_PORT=0
SECURE_COOKIES=false
ALLOW_ORIGINS=\*
ETH_URL=RPC_PROVIDER
DATABASE_URL=POSTGRES_DB_URL

```

### URL

Open this link in browser http://localhost:6688

Hardhat commands

```shell
    npm run hardhat
    npm run hardhat:compile
    npm run hardhat:deploy
    npm run hardhat:test
```
