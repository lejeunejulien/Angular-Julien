import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestServiceService } from '../../shared/service/test.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  errorMessage! : string
 
  title! : string
  year! : string
  img! : string
  synopsis! : string
  starList! : any[]
  genreList! : any[]
  directors! : any[]
  writers! : any[]
  search! : string
  id! : string
  type! : string

  constructor(private _TestService : TestServiceService, private _activatedRoute : ActivatedRoute){

    //Récupère les paramètres

    this.search = this._activatedRoute.snapshot.params['search']
    this.type = this._activatedRoute.snapshot.params['type']

    console.log(this._activatedRoute.snapshot.params['search'])
    console.log(this._activatedRoute.snapshot.params['type'])

    //Récupère les data suivant les paramètres

    //this.search = this._activatedRoute.snapshot.data['search'].result

    // Film /////////////////
    if(this.type=="film"){

      this._TestService.search_movie(this.search).subscribe({

      next : (data_movie) => {
        this.id = data_movie.result[0].id
        //console.log(this.id)

      },
      error : (err) => {
        this.errorMessage=err.statusText
      }
        })
    }

    // Serie /////////////////
    if(this.type=="serie"){

      this._TestService.search_serie(this.search).subscribe({

      next : (data_serie) => {
        this.id = data_serie.result[0].id
          
      },
      error : (err) => {
        this.errorMessage=err.statusText
      }
        })
    }
    
    //////////////////////////////////////////////

    this._TestService.getfullcast(this.id).subscribe({
      next : (data_fc) => {

        //console.log(data_fc)

        this.title = data_fc.title
        this.year = data_fc.year
        this.directors = data_fc.directors.items
        this.writers = data_fc.writers.items

        //console.log(data_fc.directors.items)
        //console.log(data_fc.directors.items[0].name)

        //console.log(data.writers)

      },
      error : (err) => {
        this.errorMessage=err.statusText
      }
    })

     //Title ////////////////////////
     this._TestService.gettile(this.id).subscribe({
      next : (data_title) => {
        //console.log(data_title)
        this.starList=data_title.actors
        //console.log(this.starList)
      },
      error : (err) => {
        this.errorMessage=err.statusText
      }
    })

    //////////////////////////////////

    this._TestService.getwiki(this.id).subscribe({
      next : (data_wiki) => {
        this.synopsis = data_wiki.plotShort.plainText
      },
      error : (err) => {
        this.errorMessage=err.statusText
      }
    })
  }
}
