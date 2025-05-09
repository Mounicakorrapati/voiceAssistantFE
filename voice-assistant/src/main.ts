import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import the standalone component

bootstrapApplication(AppComponent).catch(err => console.error(err));
