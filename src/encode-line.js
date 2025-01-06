const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let str2 = '';
	let count = 1; // Счетчик для подсчета повторений символов

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count++; // Если символ повторяется, увеличиваем счетчик
		} else {
			// Добавляем в результат количество (если счетчик > 1) и символ
			str2 += (count > 1 ? count : '') + str[i];
			count = 1; // Сбрасываем счетчик
		}
	}

	return str2;
}


module.exports = {
	encodeLine
};
