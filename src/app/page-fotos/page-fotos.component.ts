import { Component, OnInit } from "@angular/core";
import { PageFotosService } from "./page-fotos.service";
import { PageFoto } from "./page-foto";

@Component({
  selector: "app-page-fotos",
  templateUrl: "./page-fotos.component.html",
  styleUrls: ["./page-fotos.component.css"],
  preserveWhitespaces: true
})
export class PageFotosComponent implements OnInit {
  public fotos: PageFoto[];

  constructor(private service: PageFotosService) {}

  ngOnInit() {
    this.getListFoto();
  }

  getListFoto() {
    this.service.getFotos().subscribe(
      (data: PageFoto[]) => {
        this.fotos = data;
        // console.log(this.fotos);
        // console.log(data);
      },
      error => {
        console.log("API NÃO FUNCIONA");
      }
    );
  }
}
