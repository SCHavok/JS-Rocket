	var doCoolStuff = function () {
		var currentClassName = document.getElementById('cool').className;

		if (currentClassName == 'cool') {
			document.getElementById('cool').className = 'cool red'
		} else {
			document.getElementById('cool').className = 'cool';
		}

		//below changes the class name to cool red in line with 
		//the css which changes its color 
	}

	var sayMyName = function(name){
		alert("My name is " + name);
	}

	var car = {
		make: "VW",
		type: "Polo",
		colour: "blue",
		isTurnedOn: false,
		numberOfWheels: 4,
		seats: [
			"seat 1", 
			"seat 2", 
			"seat 3", 
			"seat 4"
		],
		turnOn: function(){
			this.isTurnedOn = true;
		},
		switchCar: function(isOn) {
			if (isOn == true) {
				this.isTurnedOn = true;
			} else {
				this.isTurnedOn = false;
			}
		},
		fly: function(){
			alert("Fly");
		},
	};
	console.log('hello there friends!');