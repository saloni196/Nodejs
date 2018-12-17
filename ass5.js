var express = require("express");
var app = express();

var csv = require('csv');
var obj = csv();

function MyCSV(Fone, Ftwo, Fthree) {

    this.name = Fone;

    this.designation = Ftwo;

    this.salary = Fthree;

};


var MyData=[];
obj.from.path('data.csv').to.array(function (data) {

    for (var index = 0; index < data.length; index++) {

        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2]));

    }

    console.log(MyData);

});


var express = require('express');

var app = express();

const bodyParser = require("body-parser");

var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.post('http://localhost:5000/', function(request, response){

	var fields = ['Name', 'Designation','Salary'];

	var appendThis =  "\n"+request.body.name+","+request.body.designation+","+request.body.salary;

	console.log(csv);

	fs.appendFile('data.csv', appendThis, function (err) {

        	if (err) throw err;

	        console.log('The "data to append" was appended to file!');

        	response.send("Added Successfully");

	});

    	console.log(request.body);

});



app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

console.log(MyData);

app.get("/", function(req, res, next) {
	res.send(MyData);
});


app.listen(5000, () => console.log('Example app listening on port 5000'));
