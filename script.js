// select all keys//
const keys = document.querySelectorAll('.key')

//listeners
// add event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

//handlers
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}