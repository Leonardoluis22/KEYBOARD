//get all keys

const keys = document.querySelectorAll('.key');
//play notes
function playNote(event) {
  //KeyCode
  let audioKeyCode = getKeyCode(event);
  // Typed or pressed Key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
  // if key exists
  const isKeyExists = key;
  if (!isKeyExists) {
    return;
  }
  addPlayngClass(key);
  playAudio(audioKeyCode);
}

function addPlayngClass(key) {
  key.classList.add('playing');
}

function getKeyCode(event) {
  let keyCode;
  const isKeyBoard = event.type === 'keydown';
  if (isKeyBoard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}
//click with mouse
keys.forEach(function (key) {
  key.addEventListener('click', playNote);
  key.addEventListener('transitionend', function (event) {
    event.target.classList.remove('playing');
  });
});
//keyboard type
window.addEventListener('keydown', playNote);
