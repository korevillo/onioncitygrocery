import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/Quiz.css"

import top4 from '../images/top_4.png';
import bottom4 from '../images/bottom_4.png';

import green from '../images/green.png';
import leek from '../images/leek.png';
import pearl from '../images/pearl.png';
import red from '../images/red.png';
import ring from '../images/ring.png';
import shallot from '../images/shallot.png';
import soup from '../images/soup.png';
import yellow from '../images/yellow.png';

const questions = [
    {   question: "Pick a veggie",
        options: [
            {title: "Lettuce", description: "fresh + tender", onion: "Green Onion"},
            {title: "Sweet Potato", description: "hearty + vibrant", onion: "Leek"},
            {title: "Corn", description: "sweet + crisp", onion: "Pearl Onion"},
            {title: "Arugula", description: "bold + tangy", onion: "Red Onion"}
    ]},
    {
        question: "Select a juice",
        options: [
        {title: "Apple Juice", description: "crisp + sweet", onion: "Green Onion"},
        {title: "Cranberry Juice", description: "bold + tart", onion: "Red Onion"},
        {title: "Orange Juice", description: "bright + vibrant", onion: "Onion Rings"},
        {title: "Grape Juice", description: "smooth + mellow", onion: "Shallot"}
    ]},
    {
        question: "Pick a breakfast item",
        options: [
        {title: "Greek Yogurt", description: "creamy + light", onion: "Green Onion"},
        {title: "Brown Sugar Oatmeal", description: "warm + comforting", onion: "Leek"},
        {title: "Sweet Potato Hash", description: "sweet + savory", onion: "Onion Rings"},
        {title: "Rice Pudding", description: "rich + cozy", onion: "French Onion Soup"}
    ]},
    {   question: "Select a hot drink",
        options: [
        {title: "Chamomile Tea", description: "floral + soothing", onion: "Pearl Onion"},
        {title: "Black Coffee", description: "bold + robust", onion: "Red Onion"},
        {title: "Vanilla Latte", description: "sweet + creamy", onion: "Shallot"},
        {title: "Hot Chocolate", description: "smooth + decadent", onion: "Yellow Onion"}
    ]},
    {   question: "Pick a fruit",
        options: [
        {title: "Pineapple", description: "bold + tangy", onion: "Onion Rings"},
        {title: "Pear", description: "delicate + sweet", onion: "Shallot"},
        {title: "Plum", description: "warm + subtle", onion: "French Onion Soup"},
        {title: "Grapefruit", description: "vibrant + refreshing", onion: "Yellow Onion"}
    ]},
    {   question: "Select something from the bakery",
        options: [
        {title: "Herb Scone", description: "flaky + aromatic", onion: "Green Onion"},
        {title: "Poppy Seed Muffin", description: "bright + zesty", onion: "Pearl Onion"},
        {title: "Cinnamon Roll", description: "warm + buttery", onion: "Shallot"},
        {title: "Cheddar Biscuit", description: "savory + rich", onion: "Yellow Onion"}
    ]},
    {   question: "Pick something from the deli",
        options: [
        {title: "Chicken Salad Wrap", description: "savory + tender", onion: "Leek"},
        {title: "Spicy Italian Sub", description: "spicy + robust", onion: "Red Onion"},
        {title: "Pulled Pork Sandwich", description: "smoky + hearty", onion: "Onion Rings"},
        {title: "Grilled Cheese", description: "warm + comforting", onion: "French Onion Soup"}
    ]},
    {
        question: "Select a beverage",
        options: [
        {title: "Lemonade", description: "light + tangy", onion: "Leek"},
        {title: "Sparkling Water", description: "crisp + refreshing", onion: "Pearl Onion"},
        {title: "Ginger Ale", description: "zesty + fizzy", onion: "French Onion Soup"},
        {title: "Root Beer", description: "smooth + sweet", onion: "Yellow Onion"}
    ]},
    {
        question: "Pick a salty snack",
        options: [
        {title: "Salt & Vinegar Chips", description: "light + zesty", onion: "Green Onion"},
        {title: "Garlic Herb Pita Chips", description: "savory + crisp", onion: "Leek"},
        {title: "Caramel Popcorn", description: "buttery + sweet", onion: "French Onion Soup"},
        {title: "Honey Mustard Pretzels", description: "tangy + crunchy", onion: "Shallot"}
    ]},
    {
        question: "Select a condiment",
        options: [
        {title: "Honey Mustard", description: "sweet + tangy", onion: "Pearl Onion"},
        {title: "BBQ Sauce", description: "bold + smoky", onion: "Red Onion"},
        {title: "Ranch", description: "rich + herbaceous", onion: "Onion Rings"},
        {title: "Sweet Chili", description: "bold + spicy", onion: "Yellow Onion"}
    ]},
    {
        question: "Pick a frozen dinner",
        options: [
        {title: "Mac & Cheese", description: "smooth + creamy", onion: "Leek"},
        {title: "Veggie Stir-Fry", description: "savory + light", onion: "Shallot"},
        {title: "Lasagna", description: "hearty + tangy", onion: "Onion Rings"},
        {title: "Meatloaf", description: "simple + warm", onion: "Yellow Onion"}
    ]},
    {   question: "Select a frozen treat",
        options: [
        {title: "Pineapple Sorbet", description: "tart + refreshing", onion: "Green Onion"},
        {title: "Vanilla Ice Cream", description: "sweet + smooth", onion: "Leek"},
        {title: "Coffee Ice Cream", description: "rich + warm", onion: "French Onion Soup"},
        {title: "Strawberry Popsicle", description: "tangy + light", onion: "Shallot"}
    ]}
]

const onions = {
    "Yellow Onion": {
        image: yellow,
        description: "You’re an absolute classic, and for good reason!\n\nYou're compassionate, loyal, and you show resilience and versatility when facing challenges.\n\nUnderneath your strong exterior, though, you’re an undeniably sweet soul.",
        compatible: "Leek",
    },
    "Green Onion": {
        image: green,
        description: "You’re a free spirit and a breath of fresh air.\n\nYou’re always bringing spontaneity to your friend group, keeping things interesting, and you’re great at thinking on your feet when solving problems.\n\nStill, you appreciate subtlety and quietly work toward becoming the best version of yourself.",
        compatible: "Pearl Onion",
    },
    "Red Onion": {
        image: red,
        description: "You are fiercely and unapologetically yourself—and unforgettable because of it!\n\nYour loyalty to your friends runs deep, even if it means dishing out some brutal honesty now and then. (Don’t worry—they love you for it. Just make sure you give yourself that same love in return!)",
        compatible: "Shallot",
    },
    "Shallot": {
        image: shallot,
        description: "You’re graceful and thoughtful, always remembering the little details about your friends and surprising them with the best gifts.\n\nYou take care in everything you do, from nurturing your friendships to overcoming challenges—always striving for a life of balance and harmony. <3",
        compatible: "Red Onion",
    },
    "Leek": {
        image: leek,
        description: "Hey, “mom friend”! :-) You’re the one who always puts others first, stays calm in the face of conflict, and offers empathetic, heartfelt advice when your friends need it most.\n\nJust remember to give yourself that same grace—you don’t need to be so hard on yourself!",
        compatible: "Yellow Onion",
    },
    "Pearl Onion": {
        image: pearl,
        description: "You’re sweet and effervescent, with a magical ability to brighten any room.\n\nYou keep things playful and optimistic in your friend group, and you have a true appreciation for life’s little joys.\n\nQuietly confident, you also have a strong and alluring sense of self.",
        compatible: "Green Onion",
    },
    "French Onion Soup": {
        image: soup,
        description: "You’re an old soul, always making people feel right at home.\n\nYou care deeply about making others feel comfortable and cared for, and your patience helps you tackle challenges with ease.\n\nDeep down, you’re super nostalgic—but that doesn’t mean you can’t create meaningful new memories!",
        compatible: "Onion Rings",
    },
    "Onion Rings": {
        image: ring,
        description: "You’re an icon, and you’re the moment!\n\nYour smile lights up the room, and you have an incredible ability to bring the energy up wherever you go.\n\nWhen tackling problems, you do it with bold, risk-taking confidence.\n\nStill, you’re authentically sweet and extremely thoughtful.",
        compatible: "French Onion Soup",
    }
}

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
    const [scores, setScores] = useState({});
    const [result, setResult] = useState(null);

    useEffect(() => {
        console.log(scores); // Log the updated scores when the scores change
      }, [scores]);
  
    function handleAnswer(onion) {
      setScores((prevScores) => {
        const newScores = { ...prevScores };
    
        // Decrease the score for the previously selected onion
        if (selectedAnswer) {
          newScores[selectedAnswer] -= 1;
        }
    
        // Increase the score for the newly selected onion
        newScores[onion] = (newScores[onion] || 0) + 1;
    
        return newScores;
      });
    
      setSelectedAnswer(onion); // Mark the new answer as selected
    }
    
  
    function handleNextQuestion() {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); // Reset selected answer for the next question
      } else {
        calculateResult();
      }
    }
  
    function calculateResult() {
      let maxOnion = null;
      let maxScore = 0;
  
      for (const [onion, score] of Object.entries(scores)) {
        if (score > maxScore) {
          maxOnion = onion;
          maxScore = score;
        }
      }
  
      setResult(maxOnion);
    }
  
    function restartQuiz() {
      setCurrentQuestion(0);
      setScores({});
      setResult(null);
      setSelectedAnswer(null);
    }
  
    if (result) {
      const compatible = onions[result].compatible;
      return (
        <Result
          onion={result}
          compatible={compatible}
          description={onions[result].description}
          onionImage={onions[result].image}
          compatibleImage={onions[compatible].image}
          restartQuiz={restartQuiz}
        />
      );
    }
  
    return (
      <div className="quiz-container-with-next">
        <img className='border-img' src={top4} alt=""/>
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
        />
  
        <button className="next-btn"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          Next &gt;
        </button>
        <img className='border-img' src={bottom4} alt=""/>
      </div>
  );
  }
  
  export default Quiz;