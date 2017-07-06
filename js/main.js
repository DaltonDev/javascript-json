
//Set up a new httprequest with the name xhr
var xhr = new XMLHttpRequest();
//first parameter is for what we want to do (POST, GET, etc) Second is the path, and third is asyncronous (often true)
xhr.open('GET', 'data.json', true);
//Just to be safe that the return is of type text
xhr.responseType = 'text';
//Log messages
xhr.onreadystatechange = function(){
//Not really necessary
  console.log(xhr.readyState);
//Status should be 200 to indicate that everything is ok
  console.log(xhr.status);
  console.log(xhr.statusText);
}
//Do stuff after readystate is done. Parse the xhr response
xhr.onload = function(){
//check if status is 200, if not than this will not be executed
  if(xhr.status===200){
  var myStuff = JSON.parse(xhr.responseText);
  console.log(myStuff);
  }
}
xhr.send();
