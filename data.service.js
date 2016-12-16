(function() {
    'use strict';

    angular
        .module('App.Services')
        .factory('dataService', ['$http', '$sce', function($http, $sce) {
            var _factory = {};

            var API_STREAMS = "https://wind-bow.gomix.me/twitch-api/streams/";
            var API_USERS = "https://wind-bow.gomix.me/twitch-api/users/";

            function _getStreamStatus(streamName) {
                let url = API_STREAMS + streamName;
                return $http.jsonp($sce.trustAsResourceUrl(url));
            }

            function _getUserStatus(userName) {
                let url = API_USERS + userName;
                return $http.get($sce.trustAsResourceUrl(url));
            }

            _factory.getStreamStatus = _getStreamStatus;
            _factory.getUserStatus = _getUserStatus;

            return _factory;
        }]);
})();