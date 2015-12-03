var module = angular.module('taskTracker',[]);
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
	module.controller('taskListController',function($scope){
	
	$scope.data1={
		{"tasks":[
    	{
        "id":1,
        "name":"Send Status Report",
        "dueDate":"12/03/2014",
        "note":"",
        "completed":false,
        "labelName":"Inbox"
		},
    	{
        "id":2,
        "name":"Learn Angular JS 1.x",
        "dueDate":"12/03/2015",
        "note":"",
        "completed":false,
        "labelName":"Work"
		},
		{
        "id":3,
        "name":"Purchase Grocery",
        "dueDate":"12/03/2015",
        "note":"",
        "completed":true,
        "labelName":"Home"
		},
		{
        "id":3,
        "name":"Die",
        "dueDate":"12/03/2015",
        "note":"",
        "completed":true,
        "labelName":"Life"
		}
		]}
	}
});