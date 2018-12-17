
	// inclue 'http' module
	var http = require('http');

	// fs - file system module allows to work with the file system
	var fs=require('fs');

	//include 'csvtojson' module which is a comprehensive nodejs csv parser to convert csv to json or column arrays
	const csv=require('csvtojson');


	//include 'json2csv' so that it converts json into csv with column titles and proper line endings
	var json2csv = require('json2csv').parse;

	//CORS-Cross Origin Resource Sharing
	//include 'cors' which provides a Connect/Express middleware
	var cors = require('cors');


	//express is a module that can be used to create more than one application
	var express = require('express');

	var app = express();
	
	// body parsing middleware
	const bodyParser = require("body-parser");
	
	var cors = require('cors');
	
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors())
	
	
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


	
	app.get('/', function(req,res)
	{
	
		csv()
	
		.fromFile('data.csv')

		.then((jsonObj)=>{

			console.log(jsonObj);

		    	res.send(JSON.stringify(jsonObj));

    
	
		})

	});


	var port = 5000;

	app.listen(port,  () => console.log('Example app listening on port '+port));

