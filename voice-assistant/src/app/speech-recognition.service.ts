import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  private recognition: any;

  constructor() {
    // Initialize the Speech Recognition API
    this.recognition = new (window as any).webkitSpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = 'en-US';  // Language set to English
  }

  // Start the speech recognition process
  startListening(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.recognition.start();
      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript; // Get the speech-to-text result
        resolve(transcript);
      };
      this.recognition.onerror = (event: any) => {
        reject('Speech Recognition error: ' + event.error);
      };
    });
  }

  // Stop the recognition process
  stopListening() {
    this.recognition.stop();
  }
}
