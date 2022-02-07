window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', e => {
  const result = Array.from(e.results)
    .map(res => res[0])
    .map(res => res.transcript)
    .join('');

  console.log(result);
});

recognition.addEventListener('end', () => recognition.start());

recognition.start();
