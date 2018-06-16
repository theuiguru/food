var foods = ['burger', 'pizza', 'taco', 'burrito', 'chicken', 'nachos', 'sandwich', 'veggie'],
    b = Math.floor(Math.random() * foods.length),
    foodImg = document.querySelector(".food"),
    mood = document.getElementById("mood");
foodImg.style.backgroundImage = 'url(./assets/food/' + foods[b] + '.jpg)';
mood.setAttribute('href', 'https://foursquare.com/explore?q=' + foods[b]);