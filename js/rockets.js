var timer = null;
var countdownNumber = 10;
var randomNum = function(){
		var randomNumber = Math.round(Math.random()*10);
		console.log("Random Num: " + randomNumber);
		//success
		if (randomNumber > 2) {
			// do something
			changeState(4);
		} else{
			//do something else
			changeState(5);
		};
	};
var timercount = function(){
	countdownNumber = countdownNumber-1;
	document.getElementById('countdown').innerHTML = countdownNumber;
	if (countdownNumber <= 0) {
		changeState(3);
	};
};

var changeState = function(state){
		document.body.className = "body-state"+
		state;
		clearInterval(timer);
		countdownNumber = 10;
		document.getElementById('countdown').innerHTML = countdownNumber;
		if (state == 2) {
			timer = setInterval(timercount, 500);
		} else if (state == 3) {
			var success = setTimeout(randomNum, 2000);
		};  
};

