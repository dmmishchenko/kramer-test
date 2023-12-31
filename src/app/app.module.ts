import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EdidListModule } from './edid-list/edid-list.module';
import { EDID_REPOSITORY_TOKEN } from './base/tokens';
import { EdidRepositoryService } from './services/edid-repository.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EdidListModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [
    { provide: EDID_REPOSITORY_TOKEN, useClass: EdidRepositoryService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
