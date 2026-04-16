let timerDisplay=document.getElementById("timer");
let currentDate=new Date();
setInterval(
	function(){
		currentDate=new Date();
		timmerDisplay.innerHTML=currentDate.toLocaleString();
		
		
	},1000
)