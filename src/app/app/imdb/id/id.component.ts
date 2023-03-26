import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestServiceService } from '../../shared/service/test.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent {

    cpt=1
    el! : number
    type! : string
    id! : string
    id_string! : string
    errorMessage! : string;

    title! : string
    year! : string
    img! : string
    synopsis! : string
    starList! : any[]
    genreList! : any[]
    directors! : any[]
    writers! : any[]

    constructor(private _TestService : TestServiceService, private _activatedRoute : ActivatedRoute){

      //Récupérer les paramètres

      this.el= parseInt(this._activatedRoute.snapshot.params['id'])
      this.type = this._activatedRoute.snapshot.params['type']

      //console.log(this._activatedRoute.snapshot.params['id'])
      //console.log(this._activatedRoute.snapshot.params['type'])
      //this.search = this._activatedRoute.snapshot.data['search'].result

      // Coming soon
      if(this.type=="coming"){
        this._TestService.getcomingsoon().subscribe({
          next : (data) => {
            //this.comingsoon=data.items
            //this.img_comingsoon=data.items[this.id_comingsoon].image
            this.id = data.items[this.el].id
            this.title = data.items[this.el].title
            this.year= data.items[this.el].year
            this.img = data.items[this.el].image

            //this.starList = data.items[this.el].starList
            //this.genreList = data.items[this.el].genreList

            //console.log(this.id)
            //this.id_string=this.id.toString()

            //Full cast ////////////////////////:
            this._TestService.getfullcast(this.id).subscribe({
              next : (data_fullcast) => {

                //console.log(data_fullcast)
                //console.log(data.writers.items[0].name)

                this.directors = data_fullcast.directors.items
                this.writers = data_fullcast.writers.items

                //console.log(data_fullcast.directors.items)
                //console.log(data_fullcast.directors.items[0].name)


                //console.log(this.writers)
                //console.log(this.directors)

              },
              error : (err) => {
                this.errorMessage=err.statusText
              }
            })

            //Title ////////////////////////
            this._TestService.gettile(this.id).subscribe({
              next : (data_title) => {
                this.starList=data_title.actors

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

          },
          error : (err) => {
            this.errorMessage=err.statusText
          }
        })
      }

      /////////////////////////////////////////////////////

      // Box office
      if(this.type=="box"){
        this._TestService.getBoxOffice().subscribe({
          next : (data) => {

            this.id = data.items[this.el].id
            this.img = data.items[this.el].image

            //Full cast ////////////////////////:
            this._TestService.getfullcast(this.id).subscribe({
              next : (data_fullcast) => {

                //console.log(data_fullcast)
                //console.log(data.writers.items[0].name)

                this.title = data_fullcast.title
                this.year = data_fullcast.year
                this.directors = data_fullcast.directors.items
                this.writers = data_fullcast.writers.items

                //console.log(data_fullcast.directors.items)
                //console.log(data_fullcast.directors.items[0].name)

                //console.log(data.writers)

              },
              error : (err) => {
                this.errorMessage=err.statusText
              }
            })

            //Title ////////////////////////
            this._TestService.gettile(this.id).subscribe({
              next : (data_title) => {
                this.starList=data_title.actors
              },
              error : (err) => {
                this.errorMessage=err.statusText
              }
            })

            ////////////////////////////

            this._TestService.getwiki(this.id).subscribe({
              next : (data_wiki) => {
                this.synopsis = data_wiki.plotShort.plainText

              },
              error : (err) => {
                this.errorMessage=err.statusText
              }
            })

          },
          error : (err) => {
            this.errorMessage=err.statusText
          }
        })
      }
    }
}
