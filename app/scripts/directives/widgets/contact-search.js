app.directive('contactSearch', function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/widgets/templates/contact-search.html',
        controller: 'homeController',
        scope: {
            getContacts : '=',
            title: '@',
            subtitle: '@'
        }
    };
});