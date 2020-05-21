import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageFotosComponent } from "./page-fotos/page-fotos.component";

const routes: Routes = [
  {
    path: "",
    component: PageFotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
