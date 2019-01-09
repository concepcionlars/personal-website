import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';

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
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeadersEditorComponent } from './webpage/webEditor/headers-editor/headers-editor.component';
import { EducationInputFieldComponent } from './webpage/webEditor/headers-editor/education-input-field/education-input-field.component';
import { AlertBoxComponent } from './popup_module/alert-box/alert-box.component';
import { AddPortfolioComponent } from './webpage/webEditor/add-portfolio/add-portfolio.component';

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
    AuthenticationComponent,
    HeadersEditorComponent,
    EducationInputFieldComponent,
    AlertBoxComponent,
    AddPortfolioComponent, 
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
      // { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about', component: AboutComponent },
      { path: 'admin', component: AuthenticationComponent }
    ])
  ],
  entryComponents: [
    ContactComponent,
    HeadersEditorComponent,
    EducationInputFieldComponent,
    AddPortfolioComponent,
    AlertBoxComponent
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
