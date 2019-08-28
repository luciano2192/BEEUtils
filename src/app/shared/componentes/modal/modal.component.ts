import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  
  modalForm = new FormGroup({
    fkForm : new FormGroup({
      tablaDestino: new FormControl(null, [Validators.required]),
      campoDestino: new FormControl(null, [Validators.required]),
      foreignKey: new FormControl(null, [Validators.required]),
    }),
    uniqueForm : new FormGroup({
      unique: new FormArray([]),
    }),
  });  

  private scriptForm: FormGroup;
  private campos: FormArray;
  private detector: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) {

      this.scriptForm = data.form;
  }
    
  ngOnInit() {
    
    this.campos = this.scriptForm.controls.campos.value;
       
    this.verificarSiLosNombreCamposEstanVacios();
  }

  verificarSiLosNombreCamposEstanVacios():boolean {
    for( let i = 0 ; i < this.campos.length ; i++ ){      
      if(this.campos[i].nombreCampo === null || this.campos.length <= 1){        
        return this.detector = true;
      }
    }
  }

  guardandoListas(): void {

    this.modalForm.controls.uniqueForm.setValue({
      unique: this.modalForm.controls.unique.value,
    });

    this.modalForm.controls.fkForm.setValue({
      foreignKey: this.modalForm.controls.foreignKey.value,
    });

    console.log(this.modalForm);
        
    this.dialogRef.close({
      'constraints' : this.modalForm,
    });
    
  }
  
}