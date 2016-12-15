(function() {
    'use strict';
    angular
        .module('App.Components')
        .component('home', {
            templateUrl: 'home.component.html',
            controller: function HomeController(dataService) {
                var vm = this;
                var STREAMS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "test_channel", "comster404"];

                vm.channels = [];

                function _getSTreamStatus() {
                    STREAMS.forEach(function(item) {
                        dataService.getStreamStatus(item).then(function(data) {
                            vm.channels.push({
                                stream: data.data.stream,
                                title: item,
                            });
                        }).catch(function(error) {
                            console.log(error);
                        });
                    });
                }

                function _init() {
                    _getSTreamStatus();
                }

                _init();
            }
        });
})();