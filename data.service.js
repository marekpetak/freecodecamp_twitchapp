(function() {
    'use strict';

    angular
        .module('App.Services')
        .factory('dataService', ['$http', function($http) {
            var _factory = {};

            var API = "https://wind-bow.gomix.me/streams/";

            function _getStreamStatus(streamName) {
                var url = API + streamName;
                return $http.get(url);
            }

            _factory.getStreamStatus = _getStreamStatus;

            return _factory;
        }]);
})();