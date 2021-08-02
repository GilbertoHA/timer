const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const inputTime = document.querySelector('#duration');

const timer = new Timer(inputTime, startBtn, pauseBtn, {
  onStart() {
    console.log("OnStart executed: Say something, I'm giving up on you 🎵");
  },
  onTick() {
    console.log('OnTick executed: Tick tick');
  },
  onComplete() {
    console.log('OnComplete executed: Finishshshhs');
  },
});
