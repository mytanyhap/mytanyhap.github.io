function greetUser() {
  const name = document.getElementById("nameInput").value;
  const mood = document.getElementById("moodInput").value;

  const dateTime = new Date();
  const formattedDateTime = `${getDayOfWeek(dateTime)}, ${getFormattedTime(dateTime)}`;

  const greeting = `Today is ${formattedDateTime}.\n\nThe tired panther's welcomes you, ${name}!\nWe're glad you are doing ${mood}!`;

  document.getElementById("greeting").textContent = greeting;
}
function findPolygon() {
  const number = parseInt(document.getElementById("numberInput").value);
  const absoluteNumber = Math.abs(number);
  const roundedNumber = Math.round(absoluteNumber);

  const polygons = [
    "henagon", "digon (bigon)", "triangle", "quadrilateral", "pentagon",
    "hexagon", "heptagon", "octagon", "enneagon", "decagon"
  ];

  if (roundedNumber >= 0 && roundedNumber < polygons.length) {
    alert(`The polygon with ${roundedNumber} sides is called a ${polygons[roundedNumber]}.`);
  } else {
    alert("Invalid input. Please enter a number between 0 and 9.");
  }
}




function getDayOfWeek(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];
}

function getFormattedTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}${ampm}`;
}

// Function 1: Generate a Random Animal Sound
function generateAnimalSound() {
  const animalSounds = [
      "Moo!",
      "Woof!",
      "Meow!",
      "Quack!",
      "Oink!",
      "Baa!",
      "Roar!",
      "Hoot!",
      "Ribbit!",
      "Squeak!"
  ];

  const randomSound = animalSounds[Math.floor(Math.random() * animalSounds.length)];
  alert(`Your Tired Panther mascot says: "${randomSound}"`);
}

// Function 2: Calculate the Age of Your Mascot
function calculateMascotAge() {
  const currentYear = new Date().getFullYear();
  const mascotBirthYear = 2023; // Replace with your mascot's birth year
  const mascotAge = currentYear - mascotBirthYear;

  alert(`Our beloved Tired Panther mascot is ${mascotAge} years old!`);
}

// Function 3: Offer a Custom Mascot Dance
function offerMascotDance() {
  const danceStyles = ["Hip Hop", "Breakdance", "Salsa", "Ballet", "Robot", "Moonwalk"];
  const randomDance = danceStyles[Math.floor(Math.random() * danceStyles.length)];

  alert(`Would you like to see our mascot perform the ${randomDance} dance?`);
}

// Function 4: Predict Your Mascot's Future
function predictMascotFuture() {
  const futureEvents = [
      "Our mascot will win a dance competition!",
      "Our mascot will become a famous movie star!",
      "Our mascot will travel the world and meet other famous animals!",
      "Our mascot will start a successful animal-themed business!"
  ];

  const randomEvent = futureEvents[Math.floor(Math.random() * futureEvents.length)];
  alert(`Here's a glimpse into the future of our Tired Panther mascot:\n${randomEvent}`);
}