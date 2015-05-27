app.service('getXml', function ($http) {
    var test = $http.get('http://31.168.246.211:456/cgi-bin/runtime.cgi?DEVLIST=1|2|3|4|5|6&FORMAT=xml').success(function (response) {
        $scope.getXml = response;
    });
});