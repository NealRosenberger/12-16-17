var http = require ("http");

// Need to defin port to listen to


var PORT1 = 7000;
var PORT2 = 7500;


// create a generic function to handle rquest response

function handleRequest (request, response){

	response.end("You're Dumb " + request.url);
}

//  we will use node http package ntp create our server
//  then pass the handleRequest function to empower it with ufnctionalisty

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {

	console.log("Server listening on: http//localhost:%s", PORT1);


});




function handleRequest2 (request, response){

	response.end("You try " + request.url);
}

//  we will use node http package ntp create our server
//  then pass the handleRequest function to empower it with ufnctionalisty

var server = http.createServer(handleRequest2);

server.listen(PORT2, function() {

	console.log("Server listening on: http//localhost:%s", PORT2);

});