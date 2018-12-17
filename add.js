//const csvFilePath='<path to csv file>'

var http = require('http');

var fs=require('fs');

//var popupS = require('popups');

const csv=require('csvtojson');

var json2csv = require('json2csv').parse;

var cors = require('cors');


var express = require('express');

var app = express();

const bodyParser = require("body-parser");

var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())


app.post('/', function(request, response){

var fields = ['Name', 'Designation','Salary'];


var appendThis =  ""+request.body.name+","+request.body.designation+","+request.body.salary+"\n"



  



console.log(csv);

    fs.appendFile('data.csv', appendThis, function (err) {

        if (err) throw err;

        console.log('The "data to append" was appended to file!');

        response.send("Added Successfully");

    });

    console.log(request.body);





});


	
	app.get('/', function(req,res){
	
	    csv()
	
	.fromFile('data.csv')

	.then((jsonObj)=>{

	console.log(jsonObj);

    	res.send(JSON.stringify(jsonObj));

    

	})

	});




var port = 5000;

app.listen(port,  () => console.log('Example app listening on port 5000'));




