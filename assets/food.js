let button = document.querySelector('.btn'),
    foods = ['burger', 'pizza', 'taco', 'burrito', 'chicken', 'nachos', 'sandwich', 'vegetarian', 'halal'],
    intros = ['You should get', 'Dude.', 'Definitely time for some', 'Don’t you feel like getting', 'How about', 'Know what would hit the spot?', 'Feels like a day for', 'Why not get some', 'Need somethin healthy. How ’bout', 'Indulge in', 'What about', 'Hmm…', 'Let’s treat ourselves to', 'Aren’t you in the mood for', 'Maybe', 'Been a while since you’ve gotten'];
function randomFood() {
  let f = Math.floor(Math.random() * foods.length),
      i = Math.floor(Math.random() * intros.length),
      intro = document.querySelector('.intro'),
      food = document.querySelector('.food'),
      foodBg = document.querySelector('body');
  foodBg.style.backgroundImage = 'url(./assets/food/' + foods[f] + '.jpg)';
  intro.innerHTML = intros[i];
  food.innerHTML = foods[f];
  food.addEventListener('click', () => { location.href='https://foursquare.com/explore?q=' + foods[f]; });
}
button.addEventListener('click', randomFood);
randomFood();