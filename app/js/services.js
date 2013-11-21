'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var customerServices = angular.module('myApp.services', ['ngResource']);

customerServices.factory('Employees', function($resource) {
   return $resource('http://localhost:8080/HackfestRestFacade/webresources/employee', {}, {
       query: {method:'GET', isArray:true} 
   }) 
});
