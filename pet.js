let hunger = 5;
let energy = 5;
let happiness = 5;

setInterval(function() {
  hunger ++;
  console.log("Your pet is getting hungrier! Hunger is now " + hunger);
}, 5000);

function hungerLow () {
  hunger --;
  console.log("You fed your pet! Hunger is now at " + hunger);
    if (hunger <= 0) {
      console.log("Your pet is full and doesn't want to eat more!");
    }
  

}
function playPet() {
  if (energy > 0) {
    energy --;
    happiness ++;
    console.log("You played with your pet! Energy: " + energy + ", Happiness: " + happiness);
  } else {
    console.log("Your pet is too tired to play.");
  }
}

function sleepPet() {
  sleep += 2;
  console.log("Your pet took a nap! Energy is now " + sleep);
}
