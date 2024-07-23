/* This function "renders" some bit of text as audio to the user. */
function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = 1;

  // Speak the utterance
  synthesis.speak(utterance);
}

function encourage() {
  // Get the name and words of encouragement.
  let name = document.getElementById("name").value;
  let encouragement = document.getElementById("encouragement").value;

  // combine those into some text
  let message = `Hello ${name}, I have something I would like totell you. ${encouragement} Have a nice day🫂!` 

  // Render text to the user
 
  
}
