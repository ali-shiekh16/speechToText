window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const texts = document.querySelector('.texts');

recognition.addEventListener('result', e => {
  const result = Array.from(e.results)
    .map(res => res[0])
    .map(res => res.transcript)
    .join('');

  p.innerText = result;

  if (e.results[0].isFinal) p = document.createElement('p');

  texts.appendChild(p);
});

recognition.addEventListener('end', () => recognition.start());

recognition.start();
