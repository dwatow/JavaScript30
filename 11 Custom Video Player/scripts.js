function switchPlayAndPause() {
	const ctrl = document.querySelector('.player__button');

	if(video_application.paused) {
		video_application.play();
		ctrl.textContent = '>';
	}
	else {
		video_application.pause();
		ctrl.textContent = '||';
	}
}


//click view play and pause
const video_application = document.querySelector('.player__video');
video_application.addEventListener('click', switchPlayAndPause);

//play button
const play_or_pause_ctrl = document.querySelector('.player__button');
play_or_pause_ctrl.addEventListener('click', switchPlayAndPause);

//process
video_application.getProcess = function () {
	//value to view to
	return(video_application.currentTime / video_application.duration * 100)
		.toPrecision(2) + '%';
}

video_application.setProcess = function (percen_num) {
	if(percen_num.includes('%')) {
		percen_num = percen_num.substr(0, percen_num.indexOf('%'));
	}
	console.log(percen_num / 100 * video_application.duration);
	//view to value
	video_application.currentTime = percen_num / 100 * video_application.duration;
}


// initial process
const process = document.querySelector('.progress__filled');
process.style.flexBasis = '0%';

//show
setInterval(function () {
	let process_watched = document.querySelector('.progress__filled');
	process_watched.style.flexBasis = video_application.getProcess();
	console.log('currentTime: ', video_application.getProcess());
}, 1000);

//change
function changeProcess(e) {
	const currWatched = ((e.layerX / process_all.clientWidth) * 100)
		.toPrecision(2) + '%';
	process.style.flexBasis = currWatched;
	video_application.setProcess(currWatched);
}

const process_all = document.querySelector('.progress');
process_all.addEventListener('click', changeProcess);
// process_all.addEventListener('mousemove', changeProcess);


//volume

// initial volume
function changeVolume() {
	console.log(video_application.volume);
}
const volume_ctrl = document.querySelector('input[name=volume]');
volume_ctrl.value = 0;
volume_ctrl.addEventListener('change', changeVolume);
volume_ctrl.addEventListener('mousemove', changeVolume);
