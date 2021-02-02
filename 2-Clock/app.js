const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    //Second hand:
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; //add 90 to offset the rotate 90deg we created in the html document.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //Minute hand:
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    //Hour hand:
    const hour = now.getMinutes();
    const hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); //Creates the second interval (1000 milliseconds = 1 second).