'use strict';

module.exports = (str, amount) => {
	let count = 0;

	return str.split('').reduce((previous, current) => {
		if (current !== previous.substr(previous.length - 1)) {
			count = 0;
		}

		if (count === amount) {
			return previous;
		}

		count++;
		return previous + current;
	}, '');
};
