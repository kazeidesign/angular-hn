import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemCommentsComponent } from './pages/item-comments/item-comments.component';

import { HackernewsApiService } from './services/hackernews-api.service';
import { DomainePipe } from './pipes/domaine.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    DomainePipe,
    ItemCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    Routing
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
