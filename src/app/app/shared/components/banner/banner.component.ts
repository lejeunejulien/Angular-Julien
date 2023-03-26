import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestServiceService } from '../../service/test.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  recherche! : string | undefined
  search! : string

  selector : number = 0
  constructor(private _TestService : TestServiceService,private _formBuilder : FormBuilder,private _router : Router){
  }

  submit(){

    //console.log(this.selector)

    this._router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
      }
       this._router.onSameUrlNavigation = 'reload';

      console.log(this.search)

    if(this.selector==0){
      this._router.navigateByUrl("imdb/search-result/film/" + this.search)
    }

    if(this.selector==1){
      this._router.navigateByUrl("imdb/search-result/serie/" + this.search)
    }

  }

}
