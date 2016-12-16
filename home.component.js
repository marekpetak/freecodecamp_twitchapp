(function() {
    'use strict';
    angular
        .module('App.Components')
        .component('home', {
            templateUrl: 'home.component.html',
            controller: function HomeController(dataService) {
                var vm = this;
                var STREAMS = ["74grtjfy54vfhgt", "comster404", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "test_channel"];

                vm.channels = [];

                function _getSTreamStatus() {
                    STREAMS.forEach(function(item) {

                        dataService.getUserStatus(item).then(function(data) {
                            if (data.data.status === 404) {
                                var listItem = {};
                                listItem.stream = null;
                                listItem.title = 'account closed';

                                vm.channels.push(listItem);
                            } else {
                                _requestChannelData(item);
                            }
                        }).catch(function(error) {
                            console.log(error);

                        });
                    });
                }

                function _requestChannelData(item) {
                    dataService.getStreamStatus(item).then(function(data) {

                        var listItem = {};

                        if (data.data.stream === null) {
                            listItem.stream = null;
                            listItem.title = 'offline';
                        } else {
                            listItem.stream = data.data.stream;
                            listItem.title = data.data.stream.game;
                        }

                        vm.channels.push(listItem);

                    }).catch(function(error) {
                        console.log(error);
                    });
                }

                vm.$onInit = function() {
                    _getSTreamStatus();
                };
            }
        });
})();