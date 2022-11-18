# Chainlink Fall 2022 Hackathon

<br>

<img src="./images/title.png" />

<br>
<br>

## Problem

`Financial statement manipulation` is a type of accounting fraud that remains an ongoing problem.

The manipulation of financial statements to commit fraud against investors or skirt regulation is a real and ongoing problem, costing billions of dollars annually.

Managers/Organisations may "cook the books" in order to qualify for certain advantages that rely on certain financial performance metrics being met or 

Crowdfunding platforms raise funds for campaigns and may underreport them to users by diverting the funds.

Often people who contribute/donate to campaigns run on crowdfunding platforms are unaware of how the funds are being used: who are the exact people who have access to the funds, and where they are spending the money?

## Solution
` immunomic ` is a DAO we created to solve the issue of lack of transparency and trust in crowdfunding platforms. Our solution connects the bank accounts of the campaigns being run to a chainlink node, which writes all the bank transactions on an immutable ledger (blockchain), that in turn emits the transaction so that web2 app  detects and records the transaction to display it to users on Dashboard.

Github Repos :

1. <a style="margin-bottom: 5px;" href="https://github.com/shivamangina/Chainlink-hackathon-fall-22-BE" target="_blank"> Backend </a> (this repo)

2. <a href="https://github.com/shivamangina/Chainlink-hackathon-fall-22-FE" target="_blank"> Frontend
   </a>



## Stack We Used

<br>

<img src="./images/stack.png" />

<br>

1. Frontend: We used **React JS**, Tailwind CSS for UI and **ethers** library to fetch details from contract.

2. External Adapter: We used **Nodejs** server and **Paypal-sdk** for fetching payment details from paypal.

3. Blockchain :

   1. Smart Contract: We used **Solidity** for writing smart contracts.
   2. Development: **Remix** to write, compile in local system.
   3. Deployment: **Hardhat** to deploy to testnet and verify the contract.
   4. Chain: **Polygon Mumbai** to deploy smart contracts on testnet.
   5. RPC URL : We used **Quick Node** polygon RPC url to connect to the mumbai chain.

4. Chainlink:

   1. Oracle: We used Operator.sol for Oracle requests.
   2. Bridge: We used Bridge for connecting external adapter to the chainlink job.
   3. Job: Used to get data from external adapter and pass it to oracle.

5. Others: We used **Paypal** for transactions, **AWS Lambda** function as a webhook url for paypal.

# Architecture

<br>

<img src="./images/architecture.png" />

<br>

## Steps to Run the Project

1. Clone the repo
```
FE: https://github.com/shivamangina/Chainlink-hackathon-fall-22-FE
BE: https://github.com/shivamangina/Chainlink-hackathon-fall-22-BE

```

2. Install the dependencies.
```
 npm i
```
3. Create `.env` file in `.chainlink` folder and use your values for `**ETH_URL** & **DATABASE_URL**`. Run chainlink node using the command 
``` 
npm run chainlink-node


#sample
username = shiva2nani.mangina@gmail.com
password = W6kBJRaoY.Voa_.@3pX*3mf
nodepassword = node_W6kBJRaoY.Voa_.@3pX*3mf


```
4. Open this link in browser http://localhost:6688 and login useing your creds which you gave earlier while starting the node.

5. Deploy the Oracle Contract and make the node address as authorised.
```
Link address(polygon mumbai) 0x326C977E6efc84E512bB9C30f76E30c160eD06FB

#Our Oracle is deployed here
   0x681Eb7596991A0659b085b235940a88e1DBa9A9E


```

6. Run the external adapter using command .
```
npm start
```
7. Create a bridge with the adapter url.
```
Name: paypal-bridge

URL:http://host.docker.internal:8000
```
8. Create a job using the bridge name we created earlier and the oracle contract address. You can use `./job-spec/job.toml` file for creating job.
9. Deploy Consumer Contract.
```
 Our Deployed contract: 0x7abE2227ea7110AdB490aC3Db334b247Be1f489F
```


**Note:** You can use following commands to compile and deploy the project from local using hardhat. Or you can do it from Remix IDE.

```
    npm run hardhat
    npm run hardhat:compile
    npm run hardhat:deploy
```
10. Deploy AWS lambda function and connect with API Gateway and get the `URL`
11. Add `URL` as a webhook in PP/ or Any bank.

<br>

## Meet Our Team

<div style="display: flex; justify-content: space-between; align-items: center;">
   <p style="flex:1">Shiva Kumar: </p>
   <div style="flex:4; justify-content: space-between;">
      <a href="https://www.linkedin.com/in/shivamangina/" target="_blank">
      <img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
      </a>
      <a href="https://twitter.com/shivakmangina" target="_blank">
      <img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
      </a>
      <a href="https://www.instagram.com/shiva_mangina" target="_blank">
      <img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
      </a>
      <a href="https://github.com/shivamangina" target="_blank">
      <img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
      </a>
   </div>
</div>

<div style="display: flex; justify-content: space-between; align-items: center;">
   <p style="flex:1">Sandeep Kumar: </p>
   <div style="flex:4; justify-content: space-between;">
      <a href="https://www.linkedin.com/in/satyasandeep" target="_blank">
      <img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
      </a>
      <a href="https://twitter.com/satyasandeep76" target="_blank">
      <img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
      </a>
      <a href="https://www.instagram.com/satyasandeep007" target="_blank">
      <img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
      </a>
      <a href="https://github.com/satyasandeep007" target="_blank">
      <img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
      </a>
   </div>
</div>

<div style="display: flex; justify-content: space-between; align-items: center;">
   <p style="flex:1">Ahmed Abusalama: </p>
   <div style="flex:4; justify-content: space-between;">
      <a href="https://www.linkedin.com/in/ahmed-abusalama-02727a195/" target="_blank">
      <img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
      </a>
      <!-- <a href="https://twitter.com/satyasandeep76" target="_blank">
      <img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
      </a>
      <a href="https://www.instagram.com/satyasandeep007" target="_blank">
      <img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
      </a> -->
      <a href="https://github.com/AhmedISalama" target="_blank">
      <img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
      </a>
   </div>
</div>
<div style="display: flex; justify-content: space-between; align-items: center;">
   <p style="flex:1">Minhaj Al Abidin: </p>
   <div style="flex:4; justify-content: space-between;">
      <a href="https://www.linkedin.com/in/minhaj-ul-abidin-61910a17b/" target="_blank">
      <img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
      </a>
      <!-- <a href="https://twitter.com/satyasandeep76" target="_blank">
      <img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
      </a>
      <a href="https://www.instagram.com/satyasandeep007" target="_blank">
      <img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
      </a> -->
      <a href="https://github.com/Minhajul0786" target="_blank">
      <img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
      </a>
   </div>
</div>
<div style="display: flex; justify-content: space-between; align-items: center;">
   <p style="flex:1">Abdullah Zaman: </p>
   <div style="flex:4; justify-content: space-between;">
      <a href="https://www.linkedin.com/in/abdullah-zaman/" target="_blank">
      <img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
      </a>
      <!-- <a href="https://twitter.com/satyasandeep76" target="_blank">
      <img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
      </a>
      <a href="https://www.instagram.com/satyasandeep007" target="_blank">
      <img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
      </a> -->
      <a href="https://github.com/Zaman98" target="_blank">
      <img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
      </a>
   </div>
</div>

## Demo

Youtube Link :



