(function() {
    'use strict';
    angular
        .module('App.Components')
        .component('home', {
            templateUrl: 'home.component.html',
            controller: function HomeController(dataService) {
                var vm = this;
                var STREAMS = ["ESL_SC2", "freecodecamp", "storbeck", "test_channel"];

                vm.channels = [];

                function _getSTreamStatus() {
                    STREAMS.forEach(function(item) {
                        dataService.getStreamStatus(item).then(function(data) {
                            vm.channels.push({
                                stream: data.stream,
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