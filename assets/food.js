var foods = ['burger', 'pizza', 'taco', 'burrito', 'chicken', 'nachos', 'sandwich', 'vegetarian', 'halal'],
	intros = ['You should go to', 'Dude.', 'Definitely time for some', 'Don’t you feel like', 'How about', 'LET’S GET SOME FREAKING', 'Know what would hit the spot?', 'Feels like a day for', 'Why not go to', 'Need somethin healthy. How ’bout', 'Indulge in some', 'What about', 'Hmm…', 'Jonesing for some', 'Let’s treat ourselves to', 'Aren’t you in the mood for', 'Maybe', 'Been a while since you’ve gone to'],
    b = Math.floor(Math.random() * foods.length),
    i = Math.floor(Math.random() * intros.length),
    foodImg = document.querySelector("body"),
    food = document.getElementById("food"),
    intro = document.getElementById("intro"),
    button = document.getElementById("button");
foodImg.style.backgroundImage = 'url(./assets/food/' + foods[b] + '.jpg)';
foodImg.style.backgroundPosition = "center top";
foodImg.style.backgroundSize = "cover";
intro.innerHTML = intros[i];
food.innerHTML = foods[b];
button.addEventListener('click', function() {
	location.reload();
});
food.addEventListener('click', function() {
	location.href='https://foursquare.com/explore?q=' + foods[b];
});