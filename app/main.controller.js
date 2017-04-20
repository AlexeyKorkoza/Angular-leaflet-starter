"use strict";

angular
  .module("app")
  .controller("mainController", mainController);

mainController.$inject = ['mainService'];

function mainController(mainService) {

  var vm = this;
  vm.activate = activate;
  vm.group_markers = [];

  activate();

  function activate() {

    angular.extend(vm, {
      grodno: {
        lat: 53.6834599,
        lng: 23.8342648,
        zoom: 13
      },
      markers: {},
      tiles: {
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        options: {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      }
    });

    mainService.getAllPlaces().success(function (response) {

      response.forEach(function (item, i) {
        var lat = parseFloat(item.lat);
        var lng = parseFloat(item.lng);
        vm.markers["marker" + (i + 1)] = {
          lat: lat,
          lng: lng,
          focus: false,
          draggable: false,
          group: 'vm.group_markers',
          message: '<b>"' +
          item.name_place +
          '",</b> ' +
          item.type +
          "<br>" +
          item.address +
          "<br/>",
          icon: {
            iconSize: [54, 54],
            iconAnchor: [16, 37],
            popupAnchor: [0, -30],
            iconUrl: "app/Аптека.png"
          }
        };
      });

    })
  }
}
