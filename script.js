let utterance; // Declare the utterance variable globally

function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
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


    // Start the button animation
    speakButton.classList.add("animate-button");

    // Rotate the logo
    logo.classList.add("rotate-once");

    // remove the rotation class after the animation
    logo.addEventListener("animationend", function() {
      logo.classList.remove("rotate-once");
    });

  // Start the button animation by adding the 'animate-button' class
  speak.classList.add("animate-button");

  // Stop the button animation when speech ends by removing the 'animate-button' class
  utterance.onend = function() {
    speak.classList.remove("animate-button");
    };
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
}






function setVolume() {
  // Get the volume slider element by its ID
  let volumeSlider = document.getElementById("volume1");

  // Add an event listener for the 'input' event on the volume slider
  volumeSlider.addEventListener('input', function() {
    // Check if the global 'utterance' variable is defined
    if (utterance) {
      // Update the volume of the utterance with the current slider value
      utterance.volume = this.value;
    }
  });
}

// Call setVolume to initialize the event listener
setVolume();
