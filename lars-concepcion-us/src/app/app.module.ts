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
import { LeftSidebarComponent } from './main/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './main/right-sidebar/right-sidebar.component';
import { CenterbarComponent } from './main/centerbar/centerbar.component';
import { TimelineComponent } from './client/timeline/timeline.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';
import { HeaderComponent } from './main/header/header.component';
import { ContactComponent } from './client/contact/contact.component';
import { AboutComponent } from './client/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './admin/authentication/authentication.component';
import { HeadersEditorComponent } from './admin/user_interface/headers-editor/headers-editor.component';
import { EducationInputFieldComponent } from './admin/user_interface/headers-editor/education-input-field/education-input-field.component';
import { AlertBoxComponent } from './popup_module/alert-box/alert-box.component';
import { AddPortfolioComponent } from './admin/user_interface/add-portfolio/add-portfolio.component';
import { AddAboutComponent } from './admin/user_interface/add-about/add-about.component';
import { AddBlogPostComponent } from './admin/user_interface/add-blog-post/add-blog-post.component';
import { ProfilePhotoComponent } from './admin/user_interface/headers-editor/profile-photo/profile-photo.component';
import { CoverPhotoComponent } from './admin/user_interface/headers-editor/cover-photo/cover-photo.component';
import { PersonalBrandComponent } from './admin/user_interface/headers-editor/personal-brand/personal-brand.component';
import { ProfileCoverComponent } from './main/header/profile-cover/profile-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    RightSidebarComponent,
    NavComponent,
    FooterComponent,
    LeftSidebarComponent,
    CenterbarComponent,
    TimelineComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    AuthenticationComponent,
    HeadersEditorComponent,
    EducationInputFieldComponent,
    ProfilePhotoComponent,
    AlertBoxComponent,
    AddPortfolioComponent,
    AddAboutComponent,
    AddBlogPostComponent,
    CoverPhotoComponent,
    PersonalBrandComponent,
    ProfileCoverComponent, 
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
      { path: '', redirectTo: 'timeline', pathMatch: 'full'},
      //localhost:4200/timeline
      { path: 'timeline', component: TimelineComponent},
      //localhost:4200/portfolio
      { path: 'portfolio', component: PortfolioComponent },
      //localhost:4200/about
      { path: 'about', component: AboutComponent },
      //localhost:4200/admin <== optional value
      { path: 'admin', component: AuthenticationComponent }
    ])
  ],
  entryComponents: [
    ContactComponent,
    EducationInputFieldComponent,
    ProfilePhotoComponent,
    AddPortfolioComponent,
    AddAboutComponent,
    AlertBoxComponent,
    AddBlogPostComponent,
    CoverPhotoComponent,
    PersonalBrandComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
