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


username = shiva2nani.mangina@gmail.com
pass = W6kBJRaoY.Voa_.@3pX*3mf
nodepass = node_W6kBJRaoY.Voa_.@3pX*3mf

# oracle
0x294e6eC95F11aF23773F10D1E636e0517518101b

# consumercontract
0xdf38F1172BbA743Ca9EDfe7cCccb39d8B1c95712