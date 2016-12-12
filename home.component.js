(function() {
    'use strict';
    angular
        .module('App.Components')
        .component('home', {
            templateUrl: 'home.component.html',
            controller: function HomeController(dataService) {
                var vm = this;
                var STREAMS = ["ESL_SC2", "freecodecamp", "storbeck", "test_channel"];

                function _getSTreamStatus() {
                    STREAMS.forEach(function(item) {
                        dataService.getStreamStatus().then(function() {

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