import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './header/topbar.component';
import { TopBarComponent2 } from './secondheader/topbar2.component';
import { TopBarComponent3 } from './thirdheader/topbar3.component';
import { FourthComponent } from './4thheader/4thheader.component';
import { FifthComponent } from './5thheader/5thheader.component';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TopBarComponent2,
    TopBarComponent3,
    FourthComponent,
    FifthComponent
  ],

  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
