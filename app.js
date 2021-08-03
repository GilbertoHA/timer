const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const inputTime = document.querySelector('#duration');
const circle = document.querySelector('#circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;

const timer = new Timer(inputTime, startBtn, pauseBtn, {
  onStart(totalDuration) {
    console.log("OnStart executed: Say something, I'm giving up on you 🎵");
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    console.log('OnTick executed: Tick tick');
    // currentOffset = currentOffset + (perimeter / duration) * 0.05; // My solution
    // currentOffset = (-perimeter * timeRemaining) / duration + perimeter;
    circle.setAttribute(
      'stroke-dashoffset',
      (-perimeter * timeRemaining) / duration + perimeter
    );
  },
  onComplete() {
    console.log('OnComplete executed: Finishshshhs');
  },
});
