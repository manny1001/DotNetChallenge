import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Swapi',
  templateUrl: './Swapi.component.html',
  styleUrls: ['./Swapi.component.css'],
})
export class SwapiComponent implements OnInit {
  APIURL: string;
  SwapiPeople: string[] = ['', ''];
  SwapiData: [];
  constructor(config: ConfigService, private http: HttpClient) {
    this.APIURL = config.config_url;
  }

  ngOnInit() {
    this.getSWAPIPeople();
  }

  getSWAPIPeople() {
    this.http.get<any>(this.APIURL + '/swapi/people').subscribe({
      next: (data) => {
        this.SwapiData = data.results;
        /* data.results.forEach((element) => {
          console.log(element.name);
        }); */
        return this.SwapiData;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
