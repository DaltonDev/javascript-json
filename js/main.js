/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather(){
  var country=document.getElementById('country').value;
  var city=document.getElementById('city').value;
  if(country===''){
    country="Sweden"
  }
  if(city===''){
    city="Umea"
  }

  var conditionsPath="http://api.wunderground.com/api/0e92f3509267e8fd/conditions/q/"+country+"/"+city+".json";
  var forecastPath="http://api.wunderground.com/api/0e92f3509267e8fd/forecast/q/"+country+"/"+city+".json";
  // GET THE CONDITIONS
  weatherConditions.open('GET', conditionsPath, true);
  weatherConditions.responseType = 'text';
  weatherConditions.send(null);

// GET THE FORECARST
  weatherForecast.open('GET', forecastPath, true);
  weatherForecast.responseType = 'text';
  weatherForecast.send();
}

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);

        document.getElementById('location').innerHTML = cObj.current_observation.display_location.city;
        document.getElementById('weather').innerHTML = cObj.current_observation.observation_time;
        document.getElementById('temperature').innerHTML = cObj.current_observation.temp_c+"°C";
        document.getElementById('desc').innerHTML = cObj.current_observation.weather;
    } //end if
}; //end function

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
//Today + 1 day
document.getElementById('r1c1').innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
document.getElementById('r1c2').src = fObj.forecast.simpleforecast.forecastday[1].icon_url;
document.getElementById('r1c3').innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.celsius+"°C";
document.getElementById('r1c4').innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.celsius+"°C";
//Today + 2 days
document.getElementById('r2c1').innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
document.getElementById('r2c2').src = fObj.forecast.simpleforecast.forecastday[2].icon_url;
document.getElementById('r2c3').innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.celsius+"°C";
document.getElementById('r2c4').innerHTML = fObj.forecast.simpleforecast.forecastday[2].low.celsius+"°C";
//Today + 3 days
document.getElementById('r3c1').innerHTML = fObj.forecast.simpleforecast.forecastday[3].date.weekday;
document.getElementById('r3c2').src = fObj.forecast.simpleforecast.forecastday[3].icon_url;
document.getElementById('r3c3').innerHTML = fObj.forecast.simpleforecast.forecastday[3].high.celsius+"°C";
document.getElementById('r3c4').innerHTML = fObj.forecast.simpleforecast.forecastday[3].low.celsius+"°C";

} //end if
}; //end function

loadWeather();
