var myget=function(app){

	const csv=require('csvtojson');
	app.get('/', function(req,res)
	{
	
		csv()
	
		.fromFile('data.csv')

		.then((jsonObj)=>{

			console.log(jsonObj);

		    	res.send(JSON.stringify(jsonObj));

    
	
		})
		
	});

};
exports.myget=myget;
