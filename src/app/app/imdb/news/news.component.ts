import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestServiceService } from 'src/app/app/shared/service/test.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  errorMessage! : string;

  comingsoon! : []
  boxoffice! : []

  img_comingsoon! : string
  id_comingsoon=Math.floor(Math.random() * 5)


  img_box_office! : string
  id_box_office = 0

  //Affichage de départ
  constructor(private _TestService : TestServiceService, private _activatedRoute : ActivatedRoute,private _router : Router){

    //ComingSoon
    this._TestService.getcomingsoon().subscribe({
      next : (data) => {
        this.comingsoon=data.items
        this.img_comingsoon=data.items[this.id_comingsoon].image
      },
      error : (err) => {
        this.errorMessage=err.statusText
      }
    })

    //Box Office
    this._TestService.getBoxOffice().subscribe({
      next : (data) => {
        this.boxoffice=data.items
        this.img_box_office=data.items[this.id_box_office].image
      },
      error : (err) => {
        this.errorMessage=err.statusText
      }
    })
  }

  ////////////////////////////////////////////////////////////////

  info(type : string){

    this._router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
      }
       this._router.onSameUrlNavigation = 'reload';
      if(type=="coming"){
        this._router.navigateByUrl("/id/coming/" + this.id_comingsoon)
      }
      if(type=="box"){
        this._router.navigateByUrl("/id/box/" + this.id_box_office)
      }
  }

  ///////////////////////////////////////////////////////////////////

  // SUIVANT - PRECEDENT
  ////////////////////////////////////////////////
  //Précédent

  previous(type : string ){
    if ((this.id_comingsoon!=0) && (type=="coming")){
      this.id_comingsoon-=1
      this._TestService.getcomingsoon().subscribe({
        next : (data) => {
          this.comingsoon=data.items
          this.img_comingsoon=data.items[this.id_comingsoon].image
        },
        error : (err) => {
          this.errorMessage=err.statusText
        }
      })

    }

    if ((this.id_box_office!=0)&&(type=="box")){
      this.id_box_office-=1
      this._TestService.getBoxOffice().subscribe({
        next : (data) => {
          this.boxoffice=data.items
          this.img_box_office=data.items[this.id_box_office].image
        },
        error : (err) => {
          this.errorMessage=err.statusText
        }
      })
    }
  }

  ////////////////////////////
  //NEXT

  next(type : string){
    if ((this.id_comingsoon<this.comingsoon.length) && (type=="coming")){

      this.id_comingsoon+=1
      this._TestService.getcomingsoon().subscribe({
        next : (data) => {
          this.comingsoon=data.items
          this.img_comingsoon=data.items[this.id_comingsoon].image
        },
        error : (err) => {
          this.errorMessage=err.statusText
        }
      })

    }

    if ((this.id_box_office<this.boxoffice.length)&&(type=="box")){
      this.id_box_office+=1
      this._TestService.getBoxOffice().subscribe({
        next : (data) => {
          this.boxoffice=data.items
          this.img_box_office=data.items[this.id_box_office].image
        },
        error : (err) => {
          this.errorMessage=err.statusText
        }
      })
    }
  }

}
