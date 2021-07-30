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

  start() {
    console.log('Time to start the timer');
  }

  pause() {
    console.log('Pausing the timer');
  }

  onDurationChange() {
    console.log('You changed the timer  ');
  }

  tick() {}
}

const myTimer = new Timer(inputTime, startBtn, pauseBtn);
