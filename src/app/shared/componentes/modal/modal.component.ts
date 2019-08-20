import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { GeneradorCreateService } from '../../../services/bbdd/generador-create/generador-create.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class ModalComponent implements OnInit {
  
  private campos: FormArray;
  detector: boolean = false;

  optionPK: string;
  optionFK: string;
  optionsUnique = [];

  constructor(
    private _generadorCreateService:GeneradorCreateService, 
    public dialogRef: MatDialogRef<ModalComponent>
    ) {

    this.campos = this._generadorCreateService.obtenerCampos();
   }

  ngOnInit() {
    this.verificarSiLosNombreCamposEstanVacios();    
  }

  cerrarModal(){
    this.dialogRef.close();
    console.log(this.optionsUnique);
    console.log(this.optionPK);
    console.log(this.optionFK);
  }

  verificarSiLosNombreCamposEstanVacios():boolean {
    for( let i = 0 ; i < this.campos.length ; i++ ){      
      if(this.campos[i].nombreCampo === null || this.campos.length <= 1){        
        return this.detector = true;
      }
    }
  }

}