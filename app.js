const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const inputTime = document.querySelector('#duration');

class Timer {
  constructor(timeInput, startButton, pauseButton) {
    this.timeInput = timeInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.timeInput.addEventListener('change', this.onDurationChange);
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    console.log('Pausing the timer');
    clearInterval(this.interval);
  };

  onDurationChange() {
    console.log('You changed the timer');
  }

  tick = () => {
    console.log('tick');
  };
}

const timer = new Timer(inputTime, startBtn, pauseBtn);
