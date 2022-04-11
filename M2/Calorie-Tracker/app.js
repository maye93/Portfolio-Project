function validate(evt) {
	var theEvent = evt || window.event;
	if (theEvent.type === 'paste') {
		key = event.clipboardData.getData('text/plain');
	} else {
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9]|\./;
	if( !regex.test(key) ) {
	  theEvent.returnValue = false;
	  if(theEvent.preventDefault) theEvent.preventDefault();
	}
}

function calculate() {
    const age = document.getElementById('age');
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const activity = document.getElementById('activity').value;
    var cal = 0;
    activityCal = [1.2,1.375, 1.55, 1.725, 1.9]
    weightCal = [13.75, 9.563]
    heightCal = [5.003, 1.850]
    genderCal = [6.755, 4.676]
    offset = [66.5, 655]
    if(gender === 'male')
      genderIndex = 0
    else
      genderIndex = 1

    cal = activityCal[parseInt(activity) - 1] * (offset[genderIndex] + (weightCal[genderIndex] * parseFloat(weight.value)) + (heightCal[genderIndex] * parseFloat(height.value)) - (genderCal[genderIndex] * parseFloat(age.value)))
    console.log(cal);
    document.getElementById("result").innerHTML="Total Calories is " + cal.toFixed(2);
}