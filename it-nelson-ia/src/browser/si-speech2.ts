
//import  { useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



export function comando():any {

    //const [message, setMessage] = useState('vuoto') ;
    const commands = [
      
      {
        //command: '* is my name',
        command: 'Mi chiamo *',
        //callback: (name: any) => setMessage(`Hi ${name}!`),
        callback: (name: any) => console.log(`Hi ${name}!`),
        matchInterim: true
      },
      {
        command: 'I miei sport preferiti sono * e *',
        //callback: (sport1: any, sport2: any) => setMessage(`#1: ${sport1}, #2: ${sport2}`)
        callback: (sport1: any, sport2: any) => console.log(`#1: ${sport1}, #2: ${sport2}`)
      },
      
      {
        command: 'Ciao',
        //callback: () => setMessage('Buonasera!'),
        callback: () => console.log('eseguito ciao'),
        matchInterim: true
      },
      {
        command: 'che ora',
        //callback: () => setMessage('sono le sedici')
        callback: () => console.log('eseguito che ora')
      }
    ]
  
    const {
      transcript,    
      browserSupportsSpeechRecognition
    } = useSpeechRecognition({commands});
  
  
    if (!browserSupportsSpeechRecognition) {
      ;
    }
   
    SpeechRecognition.startListening({ continuous: true, language: 'it-IT' });
  
    return transcript

}