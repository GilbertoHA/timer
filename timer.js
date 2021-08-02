class Timer {
  constructor(timeInput, startButton, pauseButton, callbacks) {
    this.timeInput = timeInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    } else {
      console.log('no callbacks for u :(');
    }

    this.timeInput.addEventListener('change', this.onDurationChange);
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
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
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.timeInput.value);
  }

  set timeRemaining(time) {
    this.timeInput.value = time;
  }
}
