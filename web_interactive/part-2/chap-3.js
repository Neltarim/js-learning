// POST requests

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //only with node

var request = new XMLHttpRequest();
request.open("POST", "http://url-services-web.com/api/users");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(jsonBody));