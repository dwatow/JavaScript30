function switchPlayAndPause() {
	const ctrl = document.querySelector('.player__button[title="Toggle Play"]');

	if(video_application.paused) {
		video_application.play();
		ctrl.textContent = '>';
	}
	else {
		video_application.pause();
		ctrl.textContent = '||';
	}
}

function updateIcon() {
	if(video_application.paused) {
		this.textContent = '>';
	}
	else {
		this.textContent = '||';
	}
}


//click view play and pause
const video_application = document.querySelector('.player__video');
video_application.addEventListener('click', switchPlayAndPause);

//play button
const play_or_pause_ctrl = document.querySelector('.player__button[title="Toggle Play"]');
play_or_pause_ctrl.textContent = '[]';
play_or_pause_ctrl.addEventListener('click', switchPlayAndPause);

//video event update icon
video_application.addEventListener('play', updateIcon);
video_application.addEventListener('pause', updateIcon);

//process
video_application.getProcess = function () {
	//value to view to
	return(video_application.currentTime / video_application.duration * 100)
		.toPrecision(2) + '%';
}

// initial process
const process = document.querySelector('.progress__filled');
process.style.flexBasis = '0%';
video_application.currentTime = 0;

//show
setInterval(function () {
	let process_watched = document.querySelector('.progress__filled');
	process_watched.style.flexBasis = video_application.getProcess();
}, 1000);

//change
function updateProcessView(e) {
	const currWatched = ((e.layerX / process_all.clientWidth) * 100)
		.toPrecision(2) + '%';
	process.style.flexBasis = currWatched;
}

function changeProcess(e) {
	const currWatched = (e.layerX / process_all.clientWidth) * video_application.duration;
	video_application.currentTime = currWatched;
}


const process_all = document.querySelector('.progress');
process_all.addEventListener('click', changeProcess);
video_application.addEventListener('timeupdate', updateProcessView);


//range ctrl
function changeRange() {
	video_application[this.name] = this.value;
}

// initial volume
video_application.volume = 0.5;
// initial playbackRate
video_application.playbackRate = 1;
// playbackRate
const range_ctrls = document.querySelectorAll('.player__slider');
range_ctrls.forEach(ctrl => {
	ctrl.addEventListener('change', changeRange);
	ctrl.addEventListener('mousemove', changeRange);
});

//player__button add 10s
function skip() {
	video_application.currentTime += Number(this.dataset.skip);
}
const jump_sec_ctrls = document.querySelectorAll('[data-skip]');
jump_sec_ctrls.forEach(ctrl =>
	ctrl.addEventListener('click', skip)
);
