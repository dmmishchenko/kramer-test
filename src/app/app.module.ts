import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EdidListModule } from './edid-list/edid-list.module';
import { EDID_REPOSITORY_TOKEN } from './base/tokens';
import { EdidRepositoryService } from './services/edid-repository.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EdidListModule],
  providers: [
    { provide: EDID_REPOSITORY_TOKEN, useClass: EdidRepositoryService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
