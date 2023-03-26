import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { Resolver_id_box_office, Resolver_id_comingsoon } from '../shared/service/test.service';
import { IdComponent } from './id/id.component';
import { NewsComponent } from './news/news.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [{path : '', component : NewsComponent},
{path : 'search',component: SearchResultComponent},
{path : 'id/:type/:id', component: IdComponent},
{path : 'imdb/BackHome', component : NewsComponent },
{path : 'imdb/search-result/:type/:search', component : SearchResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImdbRoutingModule { }
