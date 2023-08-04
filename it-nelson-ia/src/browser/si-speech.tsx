
// https://github.com/JamesBrill/react-speech-recognition#regeneratorruntime-is-not-defined
import * as React from 'react';
import  { useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {

  const [message, setMessage] = useState('vuoto') ;
  const commands = [
    
    {
      //command: '* is my name',
      command: 'Mi chiamo *',
      callback: (name: any) => setMessage(`Hi ${name}!`),
      //callback: (name: any) => console.log(`Hi ${name}!`),
      matchInterim: true
    },
    {
      command: 'I miei sport preferiti sono * e *',
      callback: (sport1: any, sport2: any) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
      //callback: (sport1: any, sport2: any) => console.log(`#1: ${sport1}, #2: ${sport2}`)
    },
    
    {
      command: 'Ciao',
      callback: () => setMessage('Buonasera!'),
      //callback: () => console.log('eseguito ciao'),
      matchInterim: true
    },
    {
      command: 'che ora',
      callback: () => setMessage('sono le sedici')
      //callback: () => console.log('eseguito che ora')
    }
  ]

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
 
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'it-IT' });

  //else
  //SpeechRecognition.startListening;
  //<p>{message}</p>

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>      
      <button onClick={startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      
      <p>{transcript}</p>
      <p>{message}</p>

    </div>
  );
};
export default Dictaphone;


 