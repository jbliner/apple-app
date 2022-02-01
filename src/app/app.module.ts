import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './header/topbar.component';
import { TopBarComponent2 } from './secondheader/topbar2.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopBarComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
