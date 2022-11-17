exports.handler = async (event) => {
    
    const body = JSON.parse(event.body)
    
    console.log(JSON.stringify(body))
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello '+ body.name),
    };
    return response;
}