// JavaScript Document
var hotelInfo;
var details;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';
xhr.send();


xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        //Load the first item in the json as soon as the page loads
        display(0);
    } // end if
} // end function
//x will depend on which room is clicked
function display(x){
  console.log(x);
  document.getElementById('roomName').innerHTML = hotelInfo[x].name;
  document.getElementById('desc').innerHTML = hotelInfo[x].description;
  document.getElementById('photo').src = hotelInfo[x].photo;
  document.getElementById('weekday').innerHTML = hotelInfo[x].cost.weekday;
  document.getElementById('weekend').innerHTML = hotelInfo[x].cost.weekend;

//do this to handle when there is an array of items
  details = "";
  for(i=0; i<hotelInfo[x].details.length; i++){
    console.log(hotelInfo[x].details[i]);
    details += "<p>"+hotelInfo[x].details[i]+"</p>";
  }
  document.getElementById('details').innerHTML = details;
}
