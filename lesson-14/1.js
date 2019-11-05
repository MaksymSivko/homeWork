/**
 * Задача 1.
 *
 * Дан базовый класс робота-уборщика.
 *
 * Добавьте роботу функционал употребления энергии:
 * - при начале уборки уровень энергии должен уменьшиться;
 * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
 *
 * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
 * В если уборка остановлена раньше времени завершения,
 * onReady сработать не должен, а также нужно вывести другое сообщение.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 * - использовать функцию clearTimeout;
 * - идентификатор таймера нужно хранить в приватной переменной конструктора.
 */

function CleanerRobot(
	initialEnergy = 0 /* Изначальный заряд батареи робота */ ,
	cleaningSquare /* Площадь для уборки в метрах. */ ,
) {
	let energy = initialEnergy;
	let timerId = 0;
	let time = null;
	let myTime = null;
	let endTime = null;
	const startTime = Date.now();
	const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
	const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
	const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;

	const ENERGY_DROPED = ENERGY_CONSUMPTION * (cleaningSquare / CLEANING_SPEED);

	const onDropedEnergy = () => {
		energy -= ENERGY_DROPED;
		return energy;
	}

	const getTimeEnd = () => {
		endTime = Date.now();
		timerId = ((endTime - startTime) / 1000).toFixed(1);
		return timerId;
	}

	const onReady = () => console.log(`Спустя ${timerId} секунды: Уборка завершена. Осталось заряда батареи: ${energy}.`);

	const stopTime = (...value) => {
		for (const key in value) {
			clearTimeout(value[key]);
		}
	}

	this.clean = () => {
		const cleaningTime = getCleaningTime();

		onDropedEnergy();

		console.log(`Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`);

		myTime = setTimeout(getTimeEnd, cleaningTime * 1000);

		time = setTimeout(onReady, cleaningTime * 1000);
	};

	// Решение

	this.stop = () => {
		getTimeEnd();
		stopTime(time, myTime);

		console.log(`Спустя ${timerId} секунду: Уборка завершена досрочно. Осталось заряда батареи: ${energy}.`);
	}
}

const cleanerRobot = new CleanerRobot(50, 45);
cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

/* Спустя 4.5 секунды: Уборка завершена. Осталось заряда батареи: 45.5. */

// setTimeout(() => {
// 	cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
// }, 1000);

exports.CleanerRobot = CleanerRobot;