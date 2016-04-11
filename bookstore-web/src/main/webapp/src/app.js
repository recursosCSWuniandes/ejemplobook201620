(function (ng) {

    var mod = ng.module("mainApp", [
        "ui.router",
        "ui.bootstrap",
        "bookModule",
        "editorialModule",
        "authorModule",
        "reviewModule"
    ]);

    mod.config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);

    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/book");
            $stateProvider
                    .state('book', {
                        url: '/book',
                        views: {
                            "viewLeft": {controller: "bookCtrl",
                                controllerAs: "ctrl",
                                templateUrl: "src/modules/book/book.tpl.html"},
                            "viewRight2": {templateUrl: "src/views/promotion.tpl.html"},
                            "viewRight1": {templateUrl: "src/views/bestseller.tpl.html"}
                        }
                    })
                    .state('editorial', {
                        url: '/editorial',
                        views: {
                            "viewLeft": {
                                controller: "editorialCtrl",
                                controllerAs: "ctrl",
                                templateUrl: "src/modules/editorial/editorial.tpl.html"
                            }
                        }

                    })
                    .state('author', {
                        url: '/author',
                        views: {
                            "viewLeft": {
                                controller: "authorCtrl",
                                controllerAs: "ctrl",
                                templateUrl: "src/modules/author/author.tpl.html",
                            },
                            "viewRight2": {templateUrl: "src/views/promotion.tpl.html"},
                            "viewRight1": {templateUrl: "src/views/mostread.tpl.html"}
                        }
                    })
                    .state('review', {
                        url: '/review',
                        controller: "reviewCtrl",
                        controllerAs: "ctrl",
                        templateUrl: "src/modules/review/review.tpl.html"
                    });
        }]);
})(window.angular);