import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({
    "projectId":"ng-firebase-todo-list-37033",
    "appId":"1:214376597371:web:85adf244133913f2ad1fde",
    "storageBucket":"ng-firebase-todo-list-37033.appspot.com",
    "apiKey":"AIzaSyAanXIFuGKKYx11VVtC8pNEpOI2pjjyRGw",
    "authDomain":"ng-firebase-todo-list-37033.firebaseapp.com",
    "messagingSenderId":"214376597371"
  })), provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
