import React, { useEffect } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const numbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'twenty',
  'thirty',
  'fourty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
  'hundred',
];

export default function Voice() {
  let recognition;
  
  function onVoiceActivation(event) {
    recognition.start();
  }

  useEffect(function () {
    recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    const grammar = '#JSGF V1.0; grammar numbers; public <number> = ' + numbers.join(' | ') + ' ;'
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
      const num = event.results[0][0].transcript;
      console.log('Result received: ' + num + '.');
      console.log('Confidence: ' + event.results[0][0].confidence);
    }
    
    recognition.onspeechend = function() {
      recognition.stop();
    }
    
    recognition.onnomatch = function(event) {
      // was not able to recognize
    }
    
    recognition.onerror = function(event) {
      console.log('Error occcurred: ', event.error)
    }
  }, []);
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ marginLeft: '20px', width: '48px' }} onClick={onVoiceActivation}>
      <g transform="matrix(2,0,0,2,0,0)">
        <path d="M12 18.5v5" style={{ fill: 'none', stroke: '#191919', strokeLinecap: 'round', strokeLinejoin: 'round' }}></path>
        <path d="M12 .5a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0v-7a4 4 0 0 0-4-4z" style={{ fill: '#b2b2b2' }}></path>
        <path d="M12 11.9a4 4 0 0 1-4-4v3.6a4 4 0 0 0 8 0V7.9a4 4 0 0 1-4 4z" style={{ fill: 'gray' }}></path>
        <path d="M19 8.5v3a7 7 0 0 1-14 0v-3" style={{ fill: 'none', stroke: '#191919', strokeLinecap: 'round', strokeLinejoin: 'round' }}></path>
        <path d="M12 .5a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0v-7a4 4 0 0 0-4-4z" style={{ fill: 'none', stroke: '#191919', strokeLinecap: 'round', strokeLinejoin: 'round' }}></path>
      </g>
    </svg>
  );
}