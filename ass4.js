

//You can use request library. https://www.npmjs.com/package/request

var request = require('request');

//To post JSON data:

var myJSONObject = { foo:'bar' };
/*request({
    url: "localhost:3000",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
});*/

var http = require('http');

var server = http.createServer(function (req, resp) {

    resp.writeHead(200, { 'content-type': 'application/json' });

    resp.end(JSON.stringify(myJSONObject));

});


server.listen(8081);




