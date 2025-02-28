import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      {
        provide: FaIconLibrary,
        useFactory: () => {
          const library = new FaIconLibrary();
          library.addIcons(faUser);
          return library;
        }
      }
    ]
  }).catch(err => console.error(err));
