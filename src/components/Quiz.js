import React, { useState } from "react";
import Question from "./Question";

import "../styles/Quiz.css"

import top4 from '../images/top_4.png';
import bottom4 from '../images/bottom_4.png';

import green from '../images/green.png';
import leek from '../images/leek.png';
import pearl from '../images/pearl.png';
import red from '../images/red';
import ring from '../images/ring.png';
import shallot from '../images/shallot.png';
import soup from '../images/soup.png';
import yellow from '../images/yellow.png';

const questions = [
    // Yellow onion vs green onion
    {options: [
        {title: "Sweet Potato", description: "hearty + vibrant", onion: "Yellow Onion"},
        {title: "Cucumber", description: "crunchy + cool", onion: "Green Onion"}
    ]},
    {options: [
        {title: "Date", description: "chewy + sweet", onion: "Yellow Onion"},
        {title: "Starfruit", description: "tart + crisp", onion: "Green Onion"}
    ]},
    {options: [
        {title: "Persimmon", description: "rich + tangy", onion: "Yellow Onion"},
        {title: "Honeydew", description: "juicy + sweet", onion: "Green Onion"}
    ]},
    // Red onion vs shallot
    {options: [
        {title: "Rhubarb", description: "sour + savory", onion: "Red Onion"},
        {title: "Snap Peas", description: "sweet + crisp", onion: "Shallot"}
    ]},
    {options: [
        {title: "Mustard Greens", description: "peppery + bitter", onion: "Red Onion"},
        {title: "Baby Corn", description: "crunchy + mild", onion: "Shallot"}
    ]},
    {options: [
        {title: "Cranberry", description: "bright + tangy", onion: "Red Onion"},
        {title: "White Peach", description: "floral + delicate", onion: "Shallot"}
    ]},
    // Leek vs pearl onion
    {options: [
        {title: "Zucchini", description: "earthy + mild", onion: "Leek"},
        {title: "Bell Pepper", description: "crunchy + sweet", onion: "Pearl Onion"}
    ]},
    {options: [
        {title: "Yellow Squash", description: "nutty + tender", onion: "Leek"},
        {title: "Cherry Tomato", description: "bright + snappy", onion: "Pearl Onion"}
    ]},
    {options: [
        {title: "Golden Kiwi", description: "sweet + smooth", onion: "Leek"},
        {title: "Mango", description: "juicy + rich", onion: "Pearl Onion"}
    ]},
    // French onion soup vs onion rings
    {options: [
        {title: "Pomegranate", description: "full + tart", onion: "French Onion Soup"},
        {title: "Passionfruit", description: "tangy + sweet", onion: "Onion Rings"}
    ]},
    {options: [
        {title: "Pumpkin", description: "hearty + mild", onion: "French Onion Soup"},
        {title: "Corn", description: "tender + fresh", onion: "Onion Rings"}
    ]},
    {options: [
        {title: "Fig", description: "jammy + sweet", onion: "French Onion Soup"},
        {title: "Watermelon", description: "juicy + bright", onion: "Onion Rings"}
    ]},
    // First subset
    {options: [
        {title: "Paprika", description: "sweet + smoky", onion: "Yellow Onion"},
        {title: "Cardamom", description: "warm + lemony", onion: "Green Onion"},
        {title: "Horseradish", description: "sharp + spicy", onion: "Red Onion"},
        {title: "Clove", description: "strong + earthy", onion: "Shallot"}
    ]},
    // Second subset
    {options: [
        {title: "Ginger", description: "bold + zesty", onion: "Leek"},
        {title: "Turmeric", description: "nutty + warm", onion: "Pearl Onion"},
        {title: "Cinnamon", description: "sweety + earthy", onion: "French Onion Soup"},
        {title: "Anise", description: "subtle + spicy", onion: "Onion Rings"}
    ]},
    // Final subset
    {options: [
        {title: "Sage", description: "bold + savory", onion: "Yellow Onion"},
        {title: "Dill", description: "fresh + sweet", onion: "Green Onion"},
        {title: "Black Pepper", description: "strong + spicy", onion: "Red Onion"},
        {title: "Tarragon", description: "earthy + bitter", onion: "Shallot"},
        {title: "Marjoram", description: "warm + sweet", onion: "Leek"},
        {title: "Thyme", description: "sharp + minty", onion: "Pearl Onion"},
        {title: "Bay Leaf", description: "herbal + bitter", onion: "French Onion Soup"},
        {title: "Lavender", description: "floral + citrusy", onion: "Onion Rings"}
    ]},
]

const onions = {
    "Yellow Onion": {
        image: yellow,
        description: null,
        compatible: [],
    },
    "Green Onion": {
        image: green,
        description: null,
        compatible: [],
    },
    "Red Onion": {
        image: red,
        description: null,
        compatible: [],
    },
    "Shallot": {
        image: shallot,
        description: null,
        compatible: [],
    },
    "Leek": {
        image: leek,
        description: null,
        compatible: [],
    },
    "Pearl Onion": {
        image: pearl,
        description: null,
        compatible: [],
    },
    "French Onion Soup": {
        image: soup,
        description: null,
        compatible: [],
    },
    "Onion Rings": {
        image: ring,
        description: null,
        compatible: [],
    }
}

function Quiz() {

    function handleAnswer() {

    }

    function handleNextQuestion() {
        // Before displaying question #13, 
            // decide which options are hidden for 13 and 14
            // using getHigherScore() for Set 1/2 and Set 3/4
        // Before displaying question #15, 
            // decide which options are shown
            // using getHigherScore() for Set 5/6
    }

    function getHigherScore() {
        // Returns name of the onion with the higher score
    }

    function restartQuiz() {

    }




    return (
        <div className="quiz-container">
            <img className='border-img' src={top4} alt=""/>
            <p>Pick your produce</p>
            {/** Insert question component */}
            <button className="next-btn"
                    onClick={handleNextQuestion}> 
                    Next &gt;</button>
            <img className='border-img' src={bottom4} alt=""/>
        </div>
    )
}

export default Quiz;