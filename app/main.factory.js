"use strict";

angular
  .module("app")
  .factory("mainService", mainService);

mainService.$inject = ['$http'];

function mainService($http) {

  var service = {
    getAllPlaces: getAllPlaces
  };

  return service;

  function getAllPlaces() {
    return $http.get("app/data.json");
  }

}
