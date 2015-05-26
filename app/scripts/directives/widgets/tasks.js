app.directive('tasks', function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/directives/widgets/templates/tasks.html',
        controller: 'homeController',
        scope: {
            title: '@',
        }
    };
});