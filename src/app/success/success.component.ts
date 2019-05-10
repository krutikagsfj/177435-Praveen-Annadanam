import { Games } from './../model/model.game';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  games: Games[];
  baseUrl: string = 'http://localhost:3000/games';

  constructor(private router:Router, private http: HttpClient) { }


 


  ngOnInit(/*game=Games*/) {
      this.router.navigate(['success']);
    //  return this.http.get<Games[]>(this.baseUrl + '/' +game);
     
  }



  //To select the game after clicking on Play Now and display the amount accordingly

  
  private _localStorage;public get localStorage() {
    return this._localStorage;
  }
public set localStorage(value) {
    this._localStorage = value;
  }


  




}



