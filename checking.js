var sample_array = {
	'item_1': 'item_1 value',
	'item_2': 'item_2 value',
	'item_3': 'item_3 value',
	'item_4': 'item_4 value',
	'item_5': 'item_5 value'
};

var keyExistInArray = function(array) {
	for (key in array) {
		// Pass only if 'key' exists in 'array'
		if (array.hasOwnProperty(key) {
			// Do stuff
			console.log('Key indeed exists.');
		})
	}
}

keyExistInArray(sample_array);

var if_console = function() {
	if ( console ) {
		return console;
	}
}

var maxNumberOfDigits = function(target, num) {
	if (target.value.length > num) {
		target.value = target.value.slice(0, num);
	}
}

var isAlphaNumeric = function(string) {
	var myRegEx  = /[^a-z\d]/i;
	return !(myRegEx.test(string));
}