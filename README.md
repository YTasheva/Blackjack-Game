# Blackjack-Game

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Rules for Blackjack Game](#rules-for-blackjack-game)
  - [Hints](#hints)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built With](#built-with)
- [Author](#author)

## Overview

### The Challenge

-  Construct a simple Blackjack game.

### Rules for Blackjack game

* Create a simple blackjack game with the following properties:

  * Deals the player a random number between 4 and 21 inclusive.
  
    * If the player has 21 they win!
   
  * Deals a random number between 2 and 11 inclusive to the dealer.
   
  * If the player hits, add a number between 2 and 11.
   
    * If the player goes over 21 the lose.
     
    * If the player has 21, stay for them.
     
    * Repeat until they choose to stay or they bust
     
  * Once player stays add a number between 2 and 11 to the dealer's hand.
     
    * If dealer number is less than 17 add another number
     
    * Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
     
    * If dealer goes over 21 they lose.
  
  * Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!

* Pseudocode the outline of your game before you write any code.

* Create functions if you begin to repeat yourself.

### Notes

This is a difficult challenge. How you build this game is up to you. The goal here is to demonstrate when to use functions. If at any point you begin to type the same line of code, or if your code becomes unreadable, consider a function!

## Hints

  * Be sure that your random number generator is inclusive of the outer numbers.
   
  * We've used a lot of `for` loops. Don't forget that there are other types of loops.


### Screenshot

<img width="1141" alt="Screenshot " src="https://github.com/YTasheva/Blackjack-Game/assets/148258557/75589923-62a8-46a4-93e4-e8a7830b5eff">

### Links

- Solution URL: https://github.com/YTasheva/Blackjack-Game
- Live Site URL: https://ytasheva.github.io/Blackjack-Game/
   
### Built With

- JavaScript, HTML, CSS

## Author

- Github - [Yuliya Tasheva](https://github.com/YTasheva)

