// Listen for the "keydown" event, and when it happens, run playSound function  
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // To select the certain key being pressed (.key is the class):
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running altogether.
    audio.currentTime = 0; // Rewinds to the start of audio file.
    audio.play(); // plays the audio file when corresponding key is pressed.
    key.classList.add('playing'); //Adds the box shadow and growth properties.
};

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing'); //'this' refers to .key and removes the 'playing' class.
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);