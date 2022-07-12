import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ThemeSwitcherComponent } from './components/toolbar/theme-switcher.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'gigs',
    loadChildren: () => import('./gigs/gigs.module').then((m) => m.GigsModule),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./starships/starships.module').then((m) => m.StarshipsModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ToolbarComponent,
    ThemeSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
