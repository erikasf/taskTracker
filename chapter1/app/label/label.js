var moduel=angular.module('taskTracker');
module.controller('labelController',function($scope){
	$scope.data={
		"labels":[
			{
				"name": "Work",
				"color": "color_red"
			},
			{
				"name": "Home",
				"color": "color+green"
			},
			{
				"name": "Personal",
				"color": "color_blue"
			}
		]};
});