const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {

	// Формула для количества поворотов: 2 в степени дисков минус 1
	const turns = (2 ** disksNumber) - 1;
	// Перевод скорость в повороты в секунду
	const secTurns = turnsSpeed / 60 / 60;
	//  время в секундах и округляем до ближайшего целого
	const seconds = Math.floor(turns / secTurns);

	//  Возвращаем объект с результатами
	return {
		turns: turns,
		seconds: seconds
	};
}

module.exports = {
	calculateHanoi
};
