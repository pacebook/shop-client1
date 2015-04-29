angular.module('radio.controller', [])

	.controller('MasterCtrl', function($scope, $rootScope, Cart, $ionicPopup,
		$route, $timeout, $location, $ionicScrollDelegate, RadioAuth, 
		$rootScope, $location, $ionicModal, $ionicSlideBoxDelegate, $state) {

		$scope.$on('UserLogout', function(event) {
			$route.reload();
		});

		$scope.$on('LoginDeny', function(event, data) {
			$scope.showAlert();
			$rootScope.$broadcast('loading:hide');
		});

	    $rootScope.$on('loading:show', function() {
	      $ionicLoading.show({template: '<img src="css/ajax-loader.gif"></img>'});
	    });

	    $rootScope.$on('loading:hide', function() {
	      $ionicLoading.hide();
	    });

	    /*
	    $scope.cody_detail.openShopDetail = function(product) {

	      var main_tabs_pattern = /\/tabs\/shop\/intro/.exec($location.absUrl());

	      if(main_tabs_pattern != null) {
	        $location.url('/tabs/main/genders/'+product.tag.gender+'/tags/'+product.tag.id+'/products/'+product.id);
	      }
	      if(channel_tabs_pattern != null) {
	        $location.url('/tabs/channel/genders/'+product.tag.gender+'/tags/'+product.tag.id+'/products/'+product.id);
	      }
	    }
	    */
/*
	    $rootScope.$on('$stateChangeSuccess', function() {
	    	var shop_intro_pattern = /\/tabs\/shop\/intro/.exec($location.absUrl());
	    	console.log("$location.absUrl()", $location.absUrl());

	      	if(shop_intro_pattern != null) {
	      		$ionicSlideBoxDelegate.update();
	      		console.log("Update! pattern != null");
	      	}
	    });
*/
	    /*
	    $scope.$on('$ionicView.beforeEnter', function() {
			$ionicSlideBoxDelegate.update();
			console.log("beforeEnter");
		});
		*/


	});