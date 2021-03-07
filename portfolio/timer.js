function time()
	{
		var today = new Date();
		
		var hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
		var minutes = today.getMinutes();
		if (minutes<10) minutes = "0"+minutes;
		
		var second = today.getSeconds();
		if (second<10) second = "0"+second;
		
		document.getElementById("clock").innerHTML = hour+":"+minutes+":"+second;
		 
		 setTimeout("time()",1000);
	}

