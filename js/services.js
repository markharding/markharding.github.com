/**
 * Kramnorth: Services
 * 
 * @author Mark Harding
 * @copyright Kramnorth Limited 2014
 * @license Apache License V.2
 */

kramnorth.factory('page', function() {

	return {
		page: 'default',
		title: 'none',
		set : function (key, val){
			this[key] = val;
		},
		setPage : function(val){
			this.page = val;
		},
		active : function(val){
			if(!val)
				return this.page;
				
			if(val == this.page)
				return 'active';
		}
		
	};
});