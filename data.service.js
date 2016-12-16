(function() {
    'use strict';

    angular
        .module('App.Services')
        .factory('dataService', ['$http', '$sce', function($http, $sce) {
            var _factory = {};

            var API = "https://wind-bow.gomix.me/twitch-api/streams/";
            var API_USERS = "https://wind-bow.gomix.me/twitch-api/users/";

            function _getStreamStatus(streamName) {
                var url = API + streamName;
                return $http.jsonp($sce.trustAsResourceUrl(url));
            }

            function _getUserStatus(userName) {
                return $http.get($sce.trustAsResourceUrl(API_USERS + userName));
            }

            _factory.getStreamStatus = _getStreamStatus;
            _factory.getUserStatus = _getUserStatus;

            return _factory;
        }]);
})();