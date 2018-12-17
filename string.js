	var l=150;
	var cnt=5;
	var u=l+cnt;
	var obj=[{
			name:[{}]
		}];
	var label="";
	
	for(var i=0;u<=180 ; i++)
	  {
		label=l+"-"+u;
		obj[0].name[0][l+'-'+u]=i;
		console.log(label);
		l=u+1;
		u=u+cnt;
	  }
	console.log(obj[0]);
	//obj[0].name[0]["new"]="1000";
	console.log(obj[0]);
	
	
