import { Constraint } from "./constraint";
import {Tabla} from "../../modelos/bbdd/tabla";


export class Unique extends Constraint {
    
    private ENTER: string = "\n";
    private campos: string[];        

    constructor(campo: string[]) {
        super();
        
        this.campos = campo;
    }
    
    obtenerCampos() {
        if ( this.campos.length > 1 ) {
            return '(' + this.campos.join() + ')';
        } return this.campos;
    }

    generarConstraint(tabla: Tabla): string {

        let scriptConstraint = "ALTER TABLE " + tabla.nombreTabla
                +   this.ENTER + "ADD CONSTRAINT " + "UNIQUE"
                +   this.obtenerCampos() + ';'
                +   this.ENTER + "GO" + this.ENTER + this.ENTER;
        
        return scriptConstraint.toUpperCase();
    }
}