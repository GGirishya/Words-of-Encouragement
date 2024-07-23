let utterance; // Declare the utterance variable globally

function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  var voice = synthesis.getVoices().filter(function (voice) {
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = document.getElementById('volume1').value; // Set initial volume

  // Speak the utterance
  synthesis.speak(utterance);

}

function encourage() {
  // Get the name and words of encouragement
  let name = document.getElementById("name").value;
  let encouragement = document.getElementById("encouragement").value;
  let postScript = document.getElementById("post-script").value;

  // Combine those into some text
  let message = `Hello ${name}, I have something I would like to tell you. ${encouragement}. P.S. ${postScript}. Have a nice day!`;

  // Render text to the user
  renderTTS(message);

  // Rotate the logo
  const logo = document.getElementById('logo');
  logo.classList.add("rotate-once");

  // Remove the rotation class after the animation
  logo.addEventListener("animationend", function () {
    logo.classList.remove("rotate-once");
  });

  // Start the button animation
  const speakButton = document.getElementById('speak');
  speakButton.classList.add("animate-button");

  // Stop the button animation when speech ends
  utterance.onend = function () {
    speakButton.classList.remove("animate-button");
  };
}
// volume setting
function setVolume() {
// check if utterance is defined
  if (utterance) {
    // update the volume of the utterance with slider value
    utterance.volume = document.getElementById("volume1").value;
  };
}