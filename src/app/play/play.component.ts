import { Games } from './../model/model.game';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  games: Games[];
   baseUrl: string = 'http://localhost:3000/games';

  constructor(private http: HttpClient, private router: Router) { }

  getGames() {
       return this.http.get<Games[]>(this.baseUrl)
     }

  ngOnInit() {

    this.getGames().subscribe((data: Games[]) => {
         this.games = data;
  });

  }


   //To navigate to the success page which displays the message "Thank you for playing"

   
  playNow(){
    this.router.navigate(['success']);
  }
}




