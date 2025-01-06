const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	// Преобразование входного значения в число с плавающей точкой, если это строка
	sampleActivity = parseFloat(sampleActivity);

	// Проверка типа данных: должно быть число
	if (isNaN(sampleActivity)) {
		return false;
	}

	// Проверка, что параметр существует
	if (sampleActivity === undefined || sampleActivity === null) {
		return false;
	}

	// Проверка типа данных: должно быть число
	if (typeof sampleActivity !== 'number' || isNaN(sampleActivity)) {
		return false;
	}

	// Проверка, если sampleActivity равно 0 или меньше 0
	if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
		return false;
	}

	// Расчёт ? (лямбда) и t (возраст)
	const lam = Math.log(2) / HALF_LIFE_PERIOD;
	const t = Math.log(MODERN_ACTIVITY / sampleActivity) / lam;

	// Проверка на NaN или невозможность вычисления
	if (isNaN(t) || t <= 0) {
		return false;
	}

	// Возврат округленного возраста с плавающей точкой (с точностью до 10 знаков)
	return parseFloat(Math.ceil(t.toFixed(10)));
}

module.exports = {
	dateSample
};
