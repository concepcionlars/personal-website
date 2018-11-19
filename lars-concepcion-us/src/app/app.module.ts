import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { CenterbarComponent } from './main/centerbar/centerbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    CenterbarComponent
  ],
  imports: [
    BrowserModule,
    NgScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
