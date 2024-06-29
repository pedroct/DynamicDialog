import { bootstrapApplication } from '@angular/platform-browser';
import { DynamicDialogExampleDemo } from './app/dynamic-dialog-example-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(DynamicDialogExampleDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));