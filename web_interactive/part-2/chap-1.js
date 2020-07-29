// HTTP requests (remember to do 'npm install xmlhttprequest' to run with npm)

// simple exemple
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
var request = new XMLHttpRequest()
request.open("GET", "http://url-service-web.com/api/users")
request.send()



// with JSON Parsing

var meteoRequest = new XMLHttpRequest();
meteoRequest.onreadystatechange = function() { //we check the status
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) { // this = the request
        var response = JSON.parse(this.responseText);   //parsing
        console.log(response.current_condition.condition);
    }
};

meteoRequest.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
meteoRequest.send();

console.log(meteoRequest)