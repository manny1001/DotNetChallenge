import { Component, OnInit, ElementRef } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JokeComponent } from '../Joke/Joke.component';
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-Chuck',
  templateUrl: './Chuck.component.html',
  styleUrls: ['./Chuck.component.css'],
})
export class ChuckComponent implements OnInit {
  APIURL: string;
  categories: string[] = ['', ''];
  category: string;
  closeResult = '';
  Joke: string;

  constructor(
    private http: HttpClient,
    config: ConfigService,
    private dialog: MatDialog,
    private modalService: NgbModal
  ) {
    this.APIURL = config.config_url;
  }

  ngOnInit() {
    this.getAllCategories();
  }
  openDialog(value) {
    this.getJoke(value);
  }

  getAllCategories() {
    this.http.get<any>(this.APIURL + '/chuck/categories').subscribe({
      next: (data) => {
        this.categories = data;
        return data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
  getJoke(value) {
    this.http
      .get<any>(this.APIURL + 'chuck/random?category=' + value)
      .subscribe({
        next: (data) => {
          this.Joke = data.value;
          alert(data.value);
          return data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
