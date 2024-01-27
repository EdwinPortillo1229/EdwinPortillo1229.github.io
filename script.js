// script.js

document.addEventListener("DOMContentLoaded", function() {
    var imageContainers = document.querySelectorAll(".image-container");
    var askingHeader = document.querySelector("#asking-header");
    var optionsIndicator = document.querySelector("#options-indicator");
    var buttonsContainer = document.querySelector("#buttons-container");
    var noButton = document.querySelector("#no-button");
    var yesButton = document.querySelector("#yes-button");
    var askingContainer = document.querySelector("#asking");
    var saidYes = document.querySelector("#said-yes");

    function fadeInWithDelay(container, delay) {
        setTimeout(function() {
            container.style.opacity = "1"; 
        }, delay);
    }

    function getRandomPosition() {
        var maxX = window.innerWidth - noButton.offsetWidth;
        var maxY = window.innerHeight - noButton.offsetHeight;

        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        return { x: randomX, y: randomY };
    }

    imageContainers.forEach(function(container, index) {
        fadeInWithDelay(container, index * 250); 
    });
    fadeInWithDelay(askingHeader, imageContainers.length * 250);
    fadeInWithDelay(optionsIndicator, (imageContainers.length + 1) * 250);
    fadeInWithDelay(buttonsContainer, (imageContainers.length + 1) * 250);

    noButton.addEventListener('mouseover', function () {
        var newPosition = getRandomPosition();
        noButton.style.position = 'absolute';
        noButton.style.top = newPosition.y + 'px';
        noButton.style.left = newPosition.x + 'px';
        noButton.style.backgroundColor = 'red';
        noButton.style.color = 'white';
        noButton.style.border = 'none';
    });

    yesButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling effect
        });
        var ws = "W";
        var as = "A".repeat(Math.floor(Math.random() * (600 - 500 + 1)) + 500);
        var hs = "H".repeat(Math.floor(Math.random() * (600 - 500 + 1)) + 500);
        var os = "O".repeat(Math.floor(Math.random() * (600 - 500 + 1)) + 500);
        var explamationPoints = "!".repeat(Math.floor(Math.random() * (600 - 500 + 1)) + 500);

        var stringToDisplay = ws + as + hs + os + explamationPoints;
        buttonsContainer.style.display = 'none';
        askingContainer.style.display = 'none';
        saidYes.textContent = stringToDisplay;
        saidYes.style.display = 'block';
    });
});
