import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule , MatTabsModule , MatSelectModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { ModalComponent } from './componentes/modal/modal.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ModalComponent]
})
export class SharedModule { }
