let button = document.querySelector('.btn'),
    foods = ['burger', 'pizza', 'taco', 'burrito', 'chicken', 'nachos', 'sandwich', 'vegetarian', 'halal'],
    intros = ['You should get', 'Dude.', 'Definitely time for some', 'Don’t you feel like getting', 'How about', 'Know what would hit the spot?', 'Feels like a day for', 'Why not get some', 'Need somethin healthy. How ’bout', 'Indulge in', 'What about', 'Hmm…', 'Let’s treat ourselves to', 'Aren’t you in the mood for', 'Maybe', 'Been a while since you’ve gotten'];
const today = new Date();
function randomFood() {
  //check if the today's date falls in between the following lenten dates. 
  let adventLent = today.getMonth() + 1 === 12 && today.getDate() >= 1 && today.getDate() <= 24;
  let apostlesLent = today.getMonth() + 1 === 6 && today.getDate() >= 16 && today.getDate() <= 28;
  let shoonoyoLent = today.getMonth() + 1 === 8 && today.getDate() >= 1 && today.getDate() <= 15;

  let lentenFoods = foods.filter(food => ['vegetarian', 'sandwich', 'burrito', 'taco'].includes(food));
  let seasons = (adventLent || apostlesLent || shoonoyoLent) ? lentenFoods : foods;

  let f = Math.floor(Math.random() * seasons.length),
      i = Math.floor(Math.random() * intros.length),
      intro = document.querySelector('.intro'),
      food = document.querySelector('.food'),
      foodBg = document.querySelector('body');
  foodBg.style.backgroundImage = 'url(./assets/food/' + seasons[f] + '.jpg)';
  intro.textContent = intros[i];
  food.textContent = seasonalFoods[f];
  food.setAttribute("href", "https://www.google.com/maps/search/"+seasons[f]);
}
button.addEventListener('click', randomFood);
randomFood();

// Display the splash screen image.
const splash = document.querySelector(".splash");
document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 1000);
});