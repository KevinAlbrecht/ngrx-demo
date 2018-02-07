import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/movies.reducer';
import { reducers } from './store/reducers/reducer';
import { EffectsModule } from '@ngrx/effects/';
import { effects, MovieEffect } from './store/effects/effect';
import { MovieService } from './services/movie.service';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('elements', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects)
  ],
  providers: [MovieEffect, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
