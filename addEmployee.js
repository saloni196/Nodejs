
var mypost=function(app){
	
	var fs=require('fs');
	const bodyParser = require("body-parser");
	const csv=require('csvtojson');

	app.post('/', function(request, response)
	{

		var fields = ['Name', 'Designation','Salary'];


		var appendThis =  ""+request.body.name+","+request.body.designation+","+request.body.salary+"\n"

		console.log(csv);

		fs.appendFile('data.csv', appendThis, function (err)
		{

        		if (err) throw err;
	
       			console.log('The "data to append" was appended to file!');
	
        		response.send("Added Successfully");

    		});

		console.log(request.body);


	});

};


//exports.console.log("IN addEmplyee.js");
exports.mypost=mypost;
