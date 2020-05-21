import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PageFoto } from "./page-foto";

@Injectable({
  providedIn: "root"
})
export class PageFotosService {
  public url = "https://picsum.photos/v2/list";

  constructor(private http: HttpClient) {}

  public getFotos(): Observable<PageFoto[]> {
    return this.http.get<any[]>(this.url);
  }
}
