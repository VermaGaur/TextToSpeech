// We use SpeechSynthesisUtterance() to enable text-to-speech functionality in web applications. It allows developers to convert text into spoken words, providing a way to improve accessibility, enhance user experiences, and create interactive audio responses.
let speech=new SpeechSynthesisUtterance();
let voices=[];



// Select dropdown for voice selection
let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged= ()=>{

    // This line retrieves all the available voices from the system and stores them in the voices array.
    voices=window.speechSynthesis.getVoices();
    // This sets the first available voice in the list (voices[0]) as the default voice for the speech object (an instance of SpeechSynthesisUtterance). This means that if no other voice is selected, the system will use the first voice in the list when synthesizing speech.
    speech.voice=voices[0];

//     voices.forEach(...): This iterates over each voice in the voices array.
// (voice, i): These are the parameters for the callback function. voice refers to the current SpeechSynthesisVoice object, and i is the index of the current voice in the array.
// voiceSelect.options[i] = new Option(voice.name, i);: This creates a new option in the <select> dropdown for each voice.
// voice.name: The name of the voice (e.g., "Google US English"), which will be displayed in the dropdown.
// new Option(...): Creates a new option element for the dropdown.
// The second parameter i is the value associated with the option, which corresponds to the index of the voice in the voices array.
    voices.forEach((voice,i) => (voiceSelect.options[i]=new Option(voice.name,i)));
}



// voiceSelect.addEventListener("change", ...): This adds an event listener to the voiceSelect dropdown (the <select> element). The "change" event is triggered whenever the user selects a different option from the dropdown.


// speech.voice = voices[voiceSelect.value];: When the user changes the selection in the dropdown, this line updates the speech.voice property to match the voice chosen by the user.
// voiceSelect.value: This refers to the index of the selected option in the dropdown.
// voices[voiceSelect.value]: The code retrieves the SpeechSynthesisVoice object from the voices array using the selected index, setting it as the voice to be used for the speech object.
voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;

//     window.speechSynthesis.speak(speech); is a method that triggers the browser to speak the text defined in the speech object (an instance of SpeechSynthesisUtterance). Here's a brief explanation:

// window.speechSynthesis: This refers to the browser's built-in speech synthesis engine.
// speak(): This method takes a SpeechSynthesisUtterance object (in this case, speech) as its argument and plays the speech through the device's speakers.
// speech: This object contains the text and other properties (like pitch, rate, language) that define how the speech will be synthesized and spoken.
    window.speechSynthesis.speak(speech);
})