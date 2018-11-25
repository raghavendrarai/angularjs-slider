var app = angular.module("myApp",[]);

app.controller("sliderController",function($scope){
	$scope.$timeperiodData ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
	
	$scope.timeperiodChanged = function (timeperiodData, leftIndex, rightIndex, parents, isTrend) {
		console.log(timeperiodData[leftIndex] + (isTrend? " - " + timeperiodData[rightIndex] :""));
	};
	
	$scope.getTimeperiodText = function (timeperiodData,index){
		return timeperiodData[index];
	};
});
