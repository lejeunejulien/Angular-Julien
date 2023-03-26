import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './imdb/search-result/search-result.component';
//import { Resolver_search } from './shared/service/test.service';

const routes: Routes = [{path : '', loadChildren : () => import('./imdb/imdb.module').then(m =>m.ImdbModule)}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
