const fetch = require("node-fetch");

exports.handler = async (event,context,callback) => {
  
const response  = await new Promise((resolve,reject) => { 
  fetch("https://sanofi-bi-manager.yseop-hosting.com/yseop-manager/direct/SanofiPerformanceAnalysis/dialog.do?transformation=html", {
          method: "POST",
          headers: {
            "Content-Type": "application/soap+xml;charset=UTF-8",
            "Accept": "text/html",
            'Access-Control-Allow-Credentials' : 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            'Authorization':'Basic c2Fub2ZpdGVjaDpYcllsbno1QXpUZQ=='
          },
          body: event.body
        }).then(resp => resp.text())
          .then(resp => {
              resolve(resp)
            
          })
          .catch((error) => {
            reject(error)
          })
    
   
})


  return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                    "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                },
                body: JSON.stringify({data:response}),
            }
  
 
};
