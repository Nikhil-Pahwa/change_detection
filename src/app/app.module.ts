import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PcComponent } from './pc/pc.component';
import { StOneFirstComponent } from './pc/st-one-first/st-one-first.component';
import { StTwoFirstComponent } from './pc/st-two-first/st-two-first.component';
import { StOneSecondComponent } from './pc/st-one-first/st-one-second/st-one-second.component';
import { StOneThirdOneComponent } from './pc/st-one-first/st-one-second/st-one-third-one/st-one-third-one.component';
import { StOneThirdTwoComponent } from './pc/st-one-first/st-one-second/st-one-third-two/st-one-third-two.component';
import { StOneFourthComponent } from './pc/st-one-first/st-one-second/st-one-third-one/st-one-fourth/st-one-fourth.component';
import { StTwoSecondOneComponent } from './pc/st-two-first/st-two-second-one/st-two-second-one.component';
import { StTwoSecondTwoComponent } from './pc/st-two-first/st-two-second-two/st-two-second-two.component';


@NgModule({
  declarations: [
    AppComponent,
    PcComponent,
    StOneFirstComponent,
    StTwoFirstComponent,
    StOneSecondComponent,
    StOneThirdOneComponent,
    StOneThirdTwoComponent,
    StOneFourthComponent,
    StTwoSecondOneComponent,
    StTwoSecondTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
