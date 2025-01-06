const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	// Пока число больше 9
	while (n >= 10) {
		let sum = 0;
		// Проходим по цифрам числа и суммируем их
		while (n > 0) {
			// Получаем последнюю цифру и добавляем к сумме
			sum += n % 10;
			// Убираем последнюю цифру
			n = Math.floor(n / 10);
		}
		// Обновляем число как сумму цифр
		n = sum;
	}
	return n;
}

module.exports = {
	getSumOfDigits
};
