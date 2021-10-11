import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  APIURL: string;
  Jokes: String[] = [];
  People: String[] = [];

  constructor(private http: HttpClient, config: ConfigService) {
    this.APIURL = config.config_url;
  }

  ngOnInit() {}
  search(text) {
    console.log('fired');
    const headers = new HttpHeaders({ h1: 'v1', h2: 'v2' });
    this.http
      .get<any>(this.APIURL + '/Search/SearchChuck?text=' + text, {
        headers: headers,
      })
      .subscribe({
        next: (data) => {
          this.Jokes = [''];
          if (data.result) {
            data.result.forEach((element) => {
              this.Jokes.push(element.value);
            });
            return this.Jokes;
          } else return null;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    this.http
      .get<any>(this.APIURL + '/Search/SearchSwapi?text=' + text)
      .subscribe({
        next: (data) => {
          this.People = [''];
          if (data) {
            data.results.forEach((element) => {
              this.People.push(element.name);
            });
          } else {
            this.People.length === 0;
          }
          return data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
