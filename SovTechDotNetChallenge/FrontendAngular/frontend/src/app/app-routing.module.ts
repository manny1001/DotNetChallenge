import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ChuckComponent } from './Chuck/Chuck.component';
import { SwapiComponent } from './Swapi/Swapi.component';

const routes: Routes = [
  { path: 'chuck', component: ChuckComponent },
  { path: 'swapi', component: SwapiComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
