const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

	str = String(str); // Преобразуем основную строку в строку
	const repeatTimes = options.repeatTimes || 1; // Количество повторений строки
	const separator = options.separator || '+'; // Разделитель между повторениями
	const addition = options.addition !== undefined ? String(options.addition) : ''; // Добавление
	const additionRepeatTimes = options.additionRepeatTimes || 1; // Количество повторений добавления
	const additionSeparator = options.additionSeparator || '|'; // Разделитель добавлений

	// Собираем часть с добавлением
	const additionPart = Array(additionRepeatTimes)
		.fill(addition)
		.join(additionSeparator);

	// Собираем всю строку
	const result = Array(repeatTimes)
		.fill(str + additionPart)
		.join(separator);

	return result;
}

module.exports = {
	repeater
};
