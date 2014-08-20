/**
 * Kramnorth: Controllers
 * 
 * @author Mark Harding
 * @copyright Kramnorth Limited 2014
 * @license Apache License V.2
 */
var kramnorthControllers = angular.module('kramnorthControllers', []);

kramnorthControllers.controller('globalCtrl', ['$scope', 'page',
  function ($scope, page) {
  	$scope.page = page;
  	page.setPage('default');
  }
]);

/**
 * The main homepage controller
 */
kramnorthControllers.controller('HomeCtrl', ['$scope', '$http', 'page',
  function ($scope, $http, page) {
  	page.setPage('home');
    /*$http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';*/
  }
]);

/**
 * The when controller
 */
kramnorthControllers.controller('WhenCtrl', ['$scope', '$timeout', 'page',
  function($scope, $timeout, page) {
	page.page = 'when', 
	page.title = 'When';


	
	$scope.onTimeout = function(){  
		today = new Date();
		party = new Date("October 24, 2014");
		msPerDay = 24 * 60 * 60 * 1000 ;
		timeLeft = (party.getTime() - today.getTime());
		e_daysLeft = timeLeft / msPerDay;
		daysLeft = Math.floor(e_daysLeft);
		e_hrsLeft = (e_daysLeft - daysLeft)*24;	
		hrsLeft = Math.floor(e_hrsLeft);
		e_minsLeft = (e_hrsLeft - hrsLeft)*60;
		minsLeft = Math.floor(e_minsLeft);	
		secondsLeft = 	Math.floor((timeLeft / 1000) % 60);
		
		$scope.countdown = {
			days: daysLeft,
			hours: hrsLeft,
			minutes: minsLeft,
			seconds: secondsLeft
		};   
		
		mytimeout = $timeout($scope.onTimeout,500);
   	};
	var mytimeout = $timeout($scope.onTimeout,1);
  
  }
]);

/**
 * The contact page controller
 */
kramnorthControllers.controller('ContactCtrl', ['$scope', 'page',
  function($scope, page) {
	page.page = 'contact', 
	page.title = 'Contact';
  }
]);

/**
 * The contact page controller
 */
kramnorthControllers.controller('MenuCtrl', ['$scope', '$http', 'page',
  function($scope, $http, page) {
	page.page = 'menu',
	page.title = 'Menu';
	page.overlay = 'dim';
	
	$scope.menu = {
		starters : [
			{
				title: 'Mozzerella and Sun blushed Tomato Salad (v)(g)',
				info: "Dressed with a lime vinagerette"
			},
			{
				title: 'Traditional Prawn Coctail',
				info: "Served with brown bread* and butter"
			},
			{
				title: 'Vegetable Soup',
				info: "Served with bread roll* and butter"
			}
		],
		mains : [
			{
				title: 'Slow Roasted Topside of Beef',
				info: "With Yorkshire pudding, pan gravy and roast potatoes"
			},
			{
				title: 'Poached Chicken Fillet',
				info: "Masked with a Julienne of leek, white whine & cream chicken veloute and new potatoes"
			},
			{
				title: 'Hake',
				info: "Lightly spiced red pepper and garlic crust on a cherry tomato salsa and sautéed new potatoes wedges"
			}
		],
		pudding : [
			{
				title: 'Traditional Apple Pie',
				info: "Served with jugs of cream"
			},
			{
				title: 'Choux Bun',
				info: "Chocolate covered bun filled with sweet cream"
			},
			{
				title: 'Forrest Fruit Cheesecake',
				info: "Served with a fruit coulis"
			}
		]
	};
    $scope.selectedDish = [];
    $scope.selectDish = function(course, dish){
    	$scope.selectedDish[course] = dish;
    };
    $scope.isSelected = function(dish){
    	for(var course in $scope.menu){
    		if($scope.selectedDish && course in $scope.selectedDish){
    			if(dish == $scope.selectedDish[course])
    				return true;
    		}
		}
    	
    	return false;
    };
  }
]);