const timers = document.querySelectorAll('.timer__button');
const show_end_time = document.querySelector('.display__end-time');
const show_remaining_time = document.querySelector('.display__time-left');
// const custumer_timer = document.querySelector('.customForm');

function countDownTimer(now, end_time) {
	const remaining_time = new Date(end_time - now);
	show_remaining_time.textContent = `${remaining_time.getMinutes()}:${remaining_time.getSeconds()}`;
}

function setTimer() {
	const sec_time = this.dataset.time * 1000;
	const now = new Date();
	const end_time = new Date(now.getTime() + sec_time);

	const diff = new Date(sec_time);
	show_end_time.textContent = `倒數到: ${end_time.getHours()}:${end_time.getMinutes()}:${end_time.getSeconds()}`;

	setInterval(() => countDownTimer(now, end_time), 500);
}

timers.forEach(timer => {
	timer.addEventListener('click', setTimer);
});
