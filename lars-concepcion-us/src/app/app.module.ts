import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { RightSidebarComponent } from './main/right-sidebar/right-sidebar.component';
import { CenterbarComponent } from './main/centerbar/centerbar.component';
import { TimelineComponent } from './webpage/timeline/timeline.component';
import { PortfolioComponent } from './webpage/portfolio/portfolio.component';
import { HeaderComponent } from './main/header/header.component';
import { ContactComponent } from './webpage/contact/contact.component';
import { AboutComponent } from './webpage/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    RightSidebarComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    CenterbarComponent,
    TimelineComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: TimelineComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  entryComponents: [
    ContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
