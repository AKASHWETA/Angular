'use strict';

/* Services */

var services = angular.module('ngdemo.services', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('/RESTfulExample/rest/users', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});
