(function () {
    'use strict';

    var myApp = angular.module('myApp', []);
    
    myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {
        
        
        $http.get('styles/data/log_info.json').then(function (res) {
		
            $scope.logdata = res.data;
        
        });
        
        $scope.changeButtonState = function (index) {
            if ($scope.logdata[index].stateValue) {
                $scope.logdata[index].stateValue = false;
                $scope.logdata[index].state = "Following";
            } else {
                $scope.logdata[index].stateValue = true;
                $scope.logdata[index].state = "Follow";
            }
        }
        
    }]);
    
    myApp.controller('subHeaderController', ['$scope', '$http', function ($scope, $http) {
        
        $http.get('styles/data/subheader_info.json').then(function (res) {
		
            $scope.subheader = res.data;
        
        });
        
    }]);
    
    myApp.controller('headerController', ['$scope', '$http', function ($scope, $http) {
        
        $http.get('styles/data/header_info.json').then(function (res) {
		
            $scope.header = res.data;
        
        });
        
    }]);
    
    myApp.controller('footerController', ['$scope', '$http', function ($scope, $http) {
        
        $http.get('styles/data/footer_links.json').then(function (res) {
		
            $scope.footerLinks = res.data;
        
        });
        
        $http.get('styles/data/footer_social.json').then(function (res) {
		
            $scope.footerSocial = res.data;
        
        });
        
    }]);

})();