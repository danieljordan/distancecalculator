//Declare coordinate variables
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;

//Declare coordinate arrays
var pointA = new Array();
var pointB = new Array();
var pointC = new Array();
var pointD = new Array();

//Declare trip segments
var AB;
var AC;
var BD;
var CA;
var CD;
var DB;

var driverOneDistance;
var driverTwoDistance;

//Haversine formula determines distance between two points using coordinate paris
function distanceSegment(a, b) {

	Number.prototype.toRad = function() {  // convert degrees to radians 
  	return this * Math.PI / 180; 
	}; 
	
	var lat1 = a[0];
	var lat2 = b[0];
	var lon1 = a[1];
	var lon2 = b[1];
	
	var R = 3959; // miles
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
       			Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	
	return(d);

};

//Define variables 
function setVariables(){
	
	//Retrieve form data containing coordinates
	a = parseInt(document.getElementById("latitudeA").value);
	b = parseInt(document.getElementById("longitudeA").value);
	c = parseInt(document.getElementById("latitudeB").value);
	d = parseInt(document.getElementById("longitudeB").value);
	e = parseInt(document.getElementById("latitudeC").value);
	f = parseInt(document.getElementById("longitudeC").value);
	g = parseInt(document.getElementById("latitudeD").value);
	h = parseInt(document.getElementById("longitudeD").value);
	
	//Populate coordinate arrays
	pointA[0] = a;
	pointA[1] = b;
	pointB[0] = c;
	pointB[1] = d;
	pointC[0] = e;
	pointC[1] = f;
	pointD[0] = g;
	pointD[1] = h;
	
	//Calculate distance between points (trip segments)
	AB = distanceSegment(pointA, pointB);
	AC = distanceSegment(pointA, pointC);
	BD = distanceSegment(pointB, pointD);
	CA = distanceSegment(pointC, pointA);
	CD = distanceSegment(pointC, pointD);
	DB = distanceSegment(pointD, pointB);
	
	//Calculate each driver's detour distance
	driverOneDistance = AC + CD + DB;
	driverTwoDistance = CA + AB + BD;
}

//Determine shorter detour distance	
function shorterDetour() {
	
	setVariables();
	
	var x = Math.round(driverOneDistance);
	var y = Math.round(driverTwoDistance);

	if (x > y) {
		alert("Driver Two has the shorter detour distance at" + " " + y +" " + "miles.");
	}
	else {
		alert("Driver One has the shorter detour distance at" + " " + x + " " + "miles.");
	} 
};






