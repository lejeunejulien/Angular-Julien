import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Item_boxoffice } from '../models/boxoffice';
import { Item_comingsoon } from '../models/comingsoon';
import { Item_top250movies } from '../models/top250movies';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private _httpClient : HttpClient) { }


  getcomingsoon(){
    return this._httpClient.get<any>("https://imdb-api.com/en/API/ComingSoon/k_vmhlchgf")}

  getBoxOffice(){
    return this._httpClient.get<any>("https://imdb-api.com/en/API/BoxOffice/k_vmhlchgf")}

  gettile(id : string|null){
    return this._httpClient.get<any>("https://imdb-api.com/en/API/FullCast/k_vmhlchgf/"+id)}

  search_movie(search_movie : String|null){
    return this._httpClient.get<any>("https://imdb-api.com/en/API/SearchMovie/k_vmhlchgf/"+search_movie)}

  search_serie(search_serie : String|null){
    return this._httpClient.get<any>("https://imdb-api.com/en/API/SearchSeries/k_vmhlchgf/"+search_serie)}

  getfullcast(id : String |null){
    return this._httpClient.get<any>("https://imdb-api.com/en/API/FullCast/k_vmhlchgf/"+id)}

  getwiki(id : String |null){
    return this._httpClient.get<any>("https://imdb-api.com/en/API/Wikipedia/k_vmhlchgf/"+id)}



  /////////////////////////////////////////////////////////////////////////////////
}

//Search

/*

export const Resolver_search: ResolveFn<any> =
  (route: ActivatedRouteSnapshot) => {
    return inject(TestServiceService).search(route.paramMap.get('search'));
}

*/

////////////////////////////////////////////////:

//Accueil

//Resolver avec id
/*
export const Resolver_id_box_office: ResolveFn<any> =
  (route: ActivatedRouteSnapshot) => {
    return inject(TestServiceService).getBoxOffice(route.paramMap.get('id'));
}

export const Resolver_id_comingsoon: ResolveFn<any> =
  (route: ActivatedRouteSnapshot) => {
    return inject(TestServiceService).getcomingsoon(route.paramMap.get('id'));
}

*/


//Resolver sans id
/*
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
  return this._TestService.getcomingsoon.pipe(catchError(err => {return of({error : err})}))}
*/
