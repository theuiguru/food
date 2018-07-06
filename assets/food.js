var foods = ['burger', 'pizza', 'taco', 'burrito', 'chicken', 'nachos', 'sandwich', 'vegetarian', 'halal'],
    b = Math.floor(Math.random() * foods.length),
    foodImg = document.querySelector("body"),
    mood = document.getElementById("mood"),
    word = document.getElementById("word");
foodImg.style.backgroundImage = 'url(./assets/food/' + foods[b] + '.jpg)';
word.innerHTML = foods[b];
mood.setAttribute('href', 'https://foursquare.com/explore?q=' + foods[b]);