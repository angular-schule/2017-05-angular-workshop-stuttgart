import { rootReducer } from './_reducers/rootReducer';
import { IAppState } from './_reducers/types';
import { BookStoreService } from './shared/book-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
// TODO: @angular-redux/router

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule,
    // TODO: NgReduxRouterModule
  ],
  providers: [
    BookStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    ngRedux: NgRedux<IAppState>,
    // TODO: ngReduxRouter,
    devTools: DevToolsExtension
  ) {
    ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [], // middlewares
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

    // TODO: ngReduxRouter.initialize();
  }
}
