/**
 * Getting an absolute URL from a variable string
 * @param  {[type]} ) {	var        a;	return function(url) {		if(!a) a [description]
 * @return {[type]}   [the absolute url as a string]
 */
var getAbsoluteUrl = (function() {
	var a;
	return function(url) {
		if(!a) {
			a = document.createElement('a');	
		}
		a.href = url;
		return a.href;
	};
})();

// Usage
getAbsoluteUrl('/something'); // http://domain.name/something