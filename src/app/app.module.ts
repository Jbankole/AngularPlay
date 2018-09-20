import { FollowersComponent } from './followers/followers.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { MybootstrapComponent } from './mybootstrap/mybootstrap.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthorsBootstrappedComponent } from './authors-bootstrapped/authors-bootstrapped.component';
import { PrimaryNaveBarComponent } from './primary-nave-bar/primary-nave-bar.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { BuckyTutorialComponent } from './bucky-tutorial/bucky-tutorial.component';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    MybootstrapComponent,
    HomePageComponent,
    FollowersComponent,
    ProfileComponent,
    NotFoundPageComponent,
    AuthorsBootstrappedComponent,
    PrimaryNaveBarComponent,
    OrderHistoryComponent,
    BuckyTutorialComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'followers/:username', component: ProfileComponent},      
      {path: 'followers', component: FollowersComponent},
      {path: 'authors', component: AuthorsBootstrappedComponent},
      {path: 'myAccount/orderHistory', component: OrderHistoryComponent},
      {path: 'buckyTutorial', component: BuckyTutorialComponent},
      {path: '**', component: NotFoundPageComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
