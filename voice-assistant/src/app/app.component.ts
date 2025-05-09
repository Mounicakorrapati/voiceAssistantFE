import { Component } from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],  // Import HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  speechText: string = '';  // Variable to hold the recognized speech text

  constructor(
    private speechRecognitionService: SpeechRecognitionService,
    private http: HttpClient
  ) {}

  // Function to start listening to speech
  listenToSpeech() {
    this.speechRecognitionService.startListening()
      .then((text) => {
        console.log('Recognized Text: ', text);
        this.speechText = text; // Display the recognized text on the screen
        this.sendTextToBackend(text); // Send recognized text to the backend
      })
      .catch((err) => {
        console.error('Error: ', err);
      });
  }

  // Send the recognized speech text to the backend
  sendTextToBackend(text: string) {
    this.http.post('http://localhost:8080/convert-speech-to-text', text, { responseType: 'text' })
      .subscribe((response) => {
        console.log('Backend Response: ', response);
      });
  }
}
