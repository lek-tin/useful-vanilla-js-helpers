var array = {
	'item_1': 'item_1 value',
	'item_2': 'item_2 value',
	'item_3': 'item_3 value',
	'item_4': 'item_4 value',
	'item_5': 'item_5 value'
};

for (key in array) {
	// Pass only if 'key' exists in 'array'
	if (array.hasOwnProperty(key) {
		// Do stuff
	})
}

var if_console = function() {
	if ( console ) {
		return console;
	}
}