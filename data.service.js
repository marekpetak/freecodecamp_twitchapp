(function() {
    'use strict';

    angular
        .module('App.Services')
        .factory('dataService', ['$http', '$sce', function($http, $sce) {
            var _factory = {};

            var API = "https://wind-bow.gomix.me/twitch-api/streams/";

            function _getStreamStatus(streamName) {
                var url = API + streamName;
                return $http.jsonp($sce.trustAsResourceUrl(url));
            }

            _factory.getStreamStatus = _getStreamStatus;

            return _factory;
        }]);
})();