app.controller('homeController', ['$scope', 'getXml', function ($scope, getXml) {
    $scope.contacts = [ 
        {
            name: 'fede',
            lastname: 'scheiner',
            network: 'aroma',
            branch: 'tel aviv',
            phone: '054-44403029',
            email: 'fedesc@gmail.com'
        }, {
            name: 'tal',
            lastname: 'engler',
            network: 'arome',
            branch: 'rishon',
            phone: '054-444431229',
            email: 'fasdasdasdesc@gmail.com'
        }, {
            name: 'shelly',
            lastname: 'Fried',
            network: 'fdss',
            branch: 'sdf',
            phone: 'fdssdf',
            email: 'fdss'
        }
    ];
    
    $scope.tasks = [
        {task: 'get website done'},
        {task: 'clear all alarms'},
        {task: 'לנקות אזעקות תקועות'},
        {task: 'lorem ipsum'},
        {task: 'get dollora'},
        
    ];
          console.log($scope.getXml);                        
}])