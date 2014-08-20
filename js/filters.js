/**
 * Kramnorth: Filters
 * 
 * @author Mark Harding
 * @copyright Kramnorth Limited 2014
 * @license Apache License V.2
 */

kramnorth.filter('friendly_time', function(){
	return function(ts) {
		var days = {
			0: 'Monday',
			1: 'Tuesday',
			2: 'Wednesday',
			3: 'Thursday',
			4: 'Friday',
			5: 'Saturday',
			6: 'Sunday'
		};
		var months = {
			0: 'January',
			1: 'February',
			2: 'March',
			3: 'April',
			4: 'May',
			5: 'June',
			6: 'July',
			7: 'August',
			8: 'September',
			9: 'October',
			10: 'Novemeber',
			11: 'December'
		};
		var suffix = function(d){
			switch (d) {
				case 1:
				case 21:
				case 31:
					return 'st';
				case 2:
				case 22:
				    return 'nd';
				case 3:
				case 23:
				    return 'rd';
				default:
				    return 'th';
			}	
		};
		
		var date = new Date(ts*1000);

	
		return days[date.getDay()] + ' ' + date.getDate() + suffix(date.getDate()) + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
	};
});

kramnorth.filter('to_trusted', ['$sce', function($sce){
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}]);

kramnorth.filter('excerpt', function(){
	return function(text){
		console.log(text);
		if(text.length > 240) 
			return text.substring(0,240);
			
		return text;
	}
});
