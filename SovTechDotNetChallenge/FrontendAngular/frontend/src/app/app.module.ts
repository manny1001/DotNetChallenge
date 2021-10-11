import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { ChuckComponent } from './Chuck/Chuck.component';
import { SwapiComponent } from './Swapi/Swapi.component';
import { DatatransferService } from './service/datatransfer.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { JokeComponent } from './Joke/Joke.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChuckComponent,
    SwapiComponent,
    JokeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  exports: [MaterialModule],
  providers: [DatatransferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
