import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constraint } from '../../../modelos/bbdd/constraint';
import { Unique } from '../../../modelos/bbdd/unique';
import { ForeignKey } from '../../../modelos/bbdd/foreignKey';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class ModalComponent implements OnInit {
  
  private scriptForm: FormGroup;
  private constraint: FormGroup;
  private campos: FormArray;
  private detector: boolean = false;

  private lista: Constraint[] = [];

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
    ) {

      this.scriptForm = data.form;
  }
    
  ngOnInit() {
    
    this.campos = this.scriptForm.controls.campos.value;
    this.constraint = this.scriptForm.controls.constraints.value;
    
    this.constraint = this.fb.group({
      unique: new FormControl([null, [Validators.required]]),
      foreignKey: new FormControl([null, [Validators.required]]),
    });
            
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
           
    if(this.constraint.value.unique.length > 0){
      let constraint = new Unique(this.constraint.value.unique);
      this.scriptForm.controls.constraint.setValue(constraint);
      // this.lista.push(constraint);
      // console.log('lista unique ',this.lista);      
    } 
    
    if (this.constraint.value.foreignKey.length > 0) {
      let constraint = new ForeignKey(this.constraint.value.foreignKey);
      
      this.scriptForm.controls.constraint.setValue(constraint);
      // this.lista.push(constraint);
      // console.log('lista fk ',this.lista);
    }

    // console.log('lista modal ',this.lista);
    
    this.dialogRef.close({
      'constraints' : this.constraint,
      // 'lista' : this.lista,
    });
  }
  
  
}