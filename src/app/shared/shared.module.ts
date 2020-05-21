import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PageFotosComponent } from "../page-fotos/page-fotos.component";

@NgModule({
  declarations: [PageFotosComponent],
  imports: [CommonModule, FormsModule]
})
export class SharedModule {}
