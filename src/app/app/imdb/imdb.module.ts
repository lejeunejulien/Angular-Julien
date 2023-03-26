import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImdbRoutingModule } from './imdb-routing.module';
import { NewsComponent } from './news/news.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdComponent } from './id/id.component';


@NgModule({
  declarations: [
    NewsComponent,
    SearchResultComponent,
    IdComponent
  ],
  imports: [
    CommonModule,
    ImdbRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ImdbModule { }
