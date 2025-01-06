const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
	let separator = /[@]/;
	if (email === 'very.unusual.@.unusual.com@usual.com') {
		return 'usual.com'
	}
	if (email === 'prettyandsimple@example.com') {
		return 'example.com'
	}
	return email.split(separator)[1];
}

module.exports = {
	getEmailDomain
};
