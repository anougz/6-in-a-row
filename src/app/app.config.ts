import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes} from '@angular/router';

export let appConfig: ApplicationConfig;

appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
  ]
};

export class environment {
  static apiUrl: string;
}

environment.apiUrl = 'http://localhost:8080/api';
