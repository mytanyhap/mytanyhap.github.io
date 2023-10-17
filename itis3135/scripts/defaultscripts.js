function displayCurrentDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    dateTimeElement.innerText = now.toLocaleString('en-US', options);
}
document.addEventListener('DOMContentLoaded', (event) => {
    displayCurrentDateTime();
})
function greet() {
    inputName = document.getElementById('name').value;
    inputMood = document.getElementById('mood').value;
    greetingElement = document.getElementById('greeting');
    greetingElement.innerText = "Welcome, " + inputName + ". You're feeling " + inputMood + " today?";
}
function showPolygon() {
    favNumberElement = document.getElementById('fnumber');
    let number = Math.round(Math.abs(favNumberElement.value));
    let polygon;
    switch (number) {
        case 2: polygon = "Digon"; break;
        case 3: polygon = "Triangle"; break;
        case 4: polygon = "Quadrilateral"; break;
        case 5: polygon = "Pentagon"; break;
        case 6: polygon = "Hexagon"; break;
        case 7: polygon = "Heptagon"; break;
        case 8: polygon = "Octagon"; break;
        case 9: polygon = "Nonagon"; break;
        case 10: polygon = "Decagon"; break;
        default: polygon = "Many sided polygon";
    }
    alert(polygon);
}
function seeYaLater() {
    alert("Alligator");
}
function dumbJoke() {
    alert("What do you call an alligator holding a compass? A navigator");
}
function howLong() {
    alert("Half its length is an alligator's tail but they can be up to half a ton (1000 pounds)");
}
function joke2() {
    alert("Alligators can grow up to 15 feet...usually they just grow 4 of them.");
}