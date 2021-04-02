// Countdown
const countdown = function(time){
  let counter = setInterval(function(){
    time--;
    if(time <= 0){
      clearInterval(counter);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  },1000)
}

countdown(10);


// RandomGame
function randomGame(num){
  let number;
  let times = 0;
  let counter = setInterval(function(){
    number = Math.random();
    times++
    if(number > .75) {
      clearInterval(counter);
      console.log("It took " + times + " try/tries.");
    }
  },1000)
}


randomGame(100);
