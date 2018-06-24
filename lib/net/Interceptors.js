export function requestLogger(request) {
    console.log('--------------------------------------------------------------------------');
    console.log(
    `Interceptor:requestLogger: ${Date.now()}
    Request            : ${JSON.stringify(request)}
    Sending Request    : ${request.url}
    Request Method     : ${request.method}
    Request Headers    : ${JSON.stringify(request.headers)}
     
    Request Body       : ${JSON.stringify(request.data || {})}`);
    console.log('--------------------------------------------------------------------------');
    return request;
}

export function responseLogger(response) {
    //console.log(JSON.stringify(response, null, true));
    console.log('--------------------------------------------------------------------------');
    // console.log("Interceptor:responseLogger: " + Date.now() + "\n    Received Response   : " + JSON.stringify(response));
    console.log(
    `Interceptor:responseLogger: ${Date.now()}
    Received Response   : ${response.status} : ${response.config.url}
    Response Headers    : ${JSON.stringify(response.config.headers)}
    Received Data       : ${JSON.stringify(response.data)}`);
    console.log('--------------------------------------------------------------------------');
    return response;
}