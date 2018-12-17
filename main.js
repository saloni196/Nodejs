var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	var fs = require("fs");
	var data = fs.readFileSync('data.csv');
	var str=data.toString();
   	
	console.log(str);
	var str1="";
	str=str.split("\n");
	for(var i=0; i<str.length; i++)
	  {
		//console.log(str[i]);
		str1=str1+","+str[i];
	  }
	str1=str1.substring(1,str1.length-2);
	//console.log("1-----"+str1);
	//console.log(str1.split(","));
   // Send the response body as "Hello World"


	var myObj = { name: "John", age: 31, city: "New York" };
	var myJSON = JSON.stringify(myObj);
	localStorage.setItem("testJSON", myJSON);

	
	

	response.end(str1);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
