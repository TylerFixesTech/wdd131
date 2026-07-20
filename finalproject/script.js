// This object stores all of the information for the duel puzzle.
// An object lets us group related information together in one place.
const puzzle = {
  title: "Break the Ultimate Dragon",

  // These are the starting Life Points shown on the page.
  playerLP: 4000,
  opponentLP: 2000,

  // This array stores the cards in the player's hand.
  // Each card is an object with its own name, type, image, and description.
  playerHand: [
    {
      name: "Dark Magician",
      type: "Monster",
      attack: 2500,
      image: "images/dark-magician.jpg",
      description: "A powerful Spellcaster needed to use the other spell cards."
    },
    {
      name: "Ancient Rules",
      type: "Spell",
      image: "images/ancient-rules.jpg",
      description: "Special Summons a Level 5 or higher Normal Monster from your hand."
    },
    {
      name: "Dark Magic Attack",
      type: "Spell",
      image: "images/dark-magic-attack.jpg",
      description: "If you control Dark Magician, destroy all opponent Spell and Trap cards."
    },
    {
      name: "Thousand Knives",
      type: "Spell",
      image: "images/thousand-knives.jpg",
      description: "If you control Dark Magician, destroy one opponent monster."
    }
  ],

  // This array stores the cards on the opponent's field.
  opponentField: [
    {
      name: "Blue-Eyes Ultimate Dragon",
      type: "Fusion Monster",
      attack: 4500,
      image: "images/blue-eyes-ultimate-dragon.jpg",
      description: "A monster too strong for Dark Magician to defeat by battle."
    },
    {
      name: "Mirror Wall",
      type: "Trap",
      image: "images/mirror-wall.jpg",
      description: "Weakens attacking monsters, stopping Dark Magician from winning."
    }
  ],

  // This array stores the possible answers the user can choose from.
  // Only one answer has correct: true.
  choices: [
    {
      id: "a",
      text: "Activate Ancient Rules, summon Dark Magician, activate Dark Magic Attack, activate Thousand Knives, then attack directly.",
      correct: true,
      feedback: "Correct! You summoned Dark Magician first, destroyed Mirror Wall, destroyed Blue-Eyes Ultimate Dragon, and attacked directly for 2500 damage."
    },
    {
      id: "b",
      text: "Activate Ancient Rules, summon Dark Magician, activate Thousand Knives, then attack directly.",
      correct: false,
      feedback: "Not quite. You destroyed the monster, but Mirror Wall would still be on the field and would weaken your attack."
    },
    {
      id: "c",
      text: "Activate Dark Magic Attack, activate Thousand Knives, then summon Dark Magician.",
      correct: false,
      feedback: "That order does not work. Dark Magic Attack and Thousand Knives both need Dark Magician on the field first."
    },
    {
      id: "d",
      text: "Activate Ancient Rules, summon Dark Magician, then attack Blue-Eyes Ultimate Dragon.",
      correct: false,
      feedback: "That does not work. Blue-Eyes Ultimate Dragon has 4500 ATK, so Dark Magician would lose the battle."
    }
  ],

  // This hint appears when the user clicks the Show Hint button.
  hint: "Start by getting Dark Magician on the field. Then remove the trap and the monster before attacking."
};


// These variables connect JavaScript to elements in the HTML.
// querySelector finds the first matching element on the page.
const playerLPElement = document.querySelector("#player-lp");
const opponentLPElement = document.querySelector("#opponent-lp");
const playerHandElement = document.querySelector("#player-hand");
const opponentFieldElement = document.querySelector("#opponent-field");
const choicesElement = document.querySelector("#choices");
const formElement = document.querySelector("#puzzle-form");
const feedbackElement = document.querySelector("#feedback");
const hintButton = document.querySelector("#hint-button");
const resetButton = document.querySelector("#reset-button");


// This function creates the HTML for one card.
// The card information comes from one of the card objects above.
function createCardHTML(card) {
  // This starts as an empty string.
  // We only add ATK text if the card actually has an attack value.
  let attackText = "";

  // This is conditional branching.
  // If the card has an attack value, create a paragraph showing its ATK.
  if (card.attack) {
    attackText = `<p><strong>ATK:</strong> ${card.attack}</p>`;
  }

  // This returns a block of HTML for the card.
  // Template literals use backticks and allow variables like ${card.name}.
  return `
    <article class="card">
      <img src="${card.image}" alt="${card.name} card image" loading="lazy">
      <h3>${card.name}</h3>
      <p><strong>Type:</strong> ${card.type}</p>
      ${attackText}
      <p>${card.description}</p>
    </article>
  `;
}


// This function displays a group of cards on the page.
// It receives two things:
// 1. cards: the array of card objects
// 2. container: the HTML element where the cards should appear
function renderCards(cards, container) {
  // Clear the container first so duplicate cards do not appear.
  container.innerHTML = "";

  // forEach is an array method.
  // It runs the function once for each card in the cards array.
  cards.forEach(function(card) {
    container.innerHTML += createCardHTML(card);
  });
}


// This function displays the answer choices on the page.
function renderChoices() {
  // Clear the choices area first.
  choicesElement.innerHTML = "";

  // Loop through each choice in the choices array.
  puzzle.choices.forEach(function(choice) {
    // Add a radio button and label for each answer choice.
    choicesElement.innerHTML += `
      <label class="choice" for="choice-${choice.id}">
        <input
          type="radio"
          id="choice-${choice.id}"
          name="move-choice"
          value="${choice.id}"
        >
        ${choice.text}
      </label>
    `;
  });
}


// This function updates the feedback message shown to the user.
// message is the text shown.
// type controls the CSS class, such as correct, incorrect, or hint.
function setFeedback(message, type) {
  feedbackElement.textContent = message;
  feedbackElement.className = `feedback ${type}`;
}


// This function runs when the user submits their answer.
function checkAnswer(event) {
  // preventDefault stops the form from refreshing the page.
  event.preventDefault();

  // Find the radio button the user selected.
  const selectedChoice = document.querySelector("input[name='move-choice']:checked");

  // If the user did not select an answer, show a warning and stop the function.
  if (!selectedChoice) {
    setFeedback("Please choose an answer before submitting.", "incorrect");
    return;
  }

  // Find the answer object that matches the selected radio button value.
  // find is an array method that returns the first item that matches.
  const answer = puzzle.choices.find(function(choice) {
    return choice.id === selectedChoice.value;
  });

  // Check whether the selected answer is correct.
  if (answer.correct) {
    setFeedback(answer.feedback, "correct");
  } else {
    setFeedback(answer.feedback, "incorrect");
  }
}


// This function runs when the user clicks the Show Hint button.
function showHint() {
  setFeedback(puzzle.hint, "hint");
}


// This function resets the form and feedback message.
function resetPuzzle() {
  // Reset clears the selected radio button.
  formElement.reset();

  // Put the default message back in the feedback area.
  setFeedback("Choose a move order, then submit your answer.", "");
}


// This function loads the puzzle onto the page when the site first opens.
function loadPuzzle() {
  // Display the Life Point numbers.
  playerLPElement.textContent = puzzle.playerLP;
  opponentLPElement.textContent = puzzle.opponentLP;

  // Display the player's hand cards.
  renderCards(puzzle.playerHand, playerHandElement);

  // Display the opponent's field cards.
  renderCards(puzzle.opponentField, opponentFieldElement);

  // Display the answer choices.
  renderChoices();

  // Set the starting feedback message.
  resetPuzzle();
}


// These event listeners make the page interactive.

// When the form is submitted, run checkAnswer.
formElement.addEventListener("submit", checkAnswer);

// When the hint button is clicked, run showHint.
hintButton.addEventListener("click", showHint);

// When the reset button is clicked, run resetPuzzle.
resetButton.addEventListener("click", resetPuzzle);


// This starts the app by loading the puzzle when the script runs.
loadPuzzle();