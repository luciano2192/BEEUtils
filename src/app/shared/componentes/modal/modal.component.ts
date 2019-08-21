import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { GeneradorCreateService } from '../../../services/bbdd/generador-create/generador-create.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class ModalComponent implements OnInit {
  
  private scriptForm: FormGroup;
  private constraintForm: FormGroup;
  private detector: boolean = false;
  private campos: FormArray;
  private scriptFormConstraint: any;

  constructor(
    private _generadorCreateService:GeneradorCreateService, 
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    ) {

    this.scriptForm = this._generadorCreateService.obtenerFormulario();
   }

  ngOnInit() {
    this.campos = this.scriptForm.controls.campos.value;
    this.scriptFormConstraint = this.scriptForm.controls.constraints.value;
    
    this.constraintForm = this.fb.group({
      unique: new FormControl([]),
      foreignKey: new FormControl([]),
    });

    this.scriptFormConstraint.push(this.constraintForm);

    console.log(this.scriptFormConstraint);

    this.constraintForm.controls.unique.value.push('hola');    

    this.verificarSiLosNombreCamposEstanVacios();    
  }

  cerrarModal(){
    this.dialogRef.close();
  }

  verificarSiLosNombreCamposEstanVacios():boolean {
    for( let i = 0 ; i < this.campos.length ; i++ ){      
      if(this.campos[i].nombreCampo === null || this.campos.length <= 1){        
        return this.detector = true;
      }
    }
  }


}