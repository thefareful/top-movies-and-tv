import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DetailedComponent } from "./detailed/detailed.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'detailed/:id', component: DetailedComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  
  export class AppRoutingModule {}