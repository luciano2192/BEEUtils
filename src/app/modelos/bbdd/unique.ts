import { Constraint } from "./constraint";
import {Tabla} from "../../modelos/bbdd/tabla";


export class Unique extends Constraint {
    
    private ENTER: string = "\n";
    private campos: string[];        

    constructor(campo: string[]) {
        super(campo);
    }
    
    obtenerCampos(): string[] {
        return this.campo;
    }

    obtenerClase(): string {
        return Unique.name;
    }

    cargarCamposUnique(): string {

        let camposFormateados = "";

        this.campos.forEach( element => {
            if (this.campos.length > 1) {
                camposFormateados = this.campos.join();
            } else {
                camposFormateados = element;
            }
        });
    
        return '(' + camposFormateados + ')';
    }

    generarConstraint(tabla: Tabla): string {

        let scriptConstraint = "ALTER TABLE " + tabla.nombreTabla
                +   this.ENTER + "ADD CONSTRAINT " + this.obtenerClase()
                +   this.cargarCamposUnique() + ';'
                +   this.ENTER + "GO" + this.ENTER + this.ENTER;
        
        return scriptConstraint.toUpperCase();
    }
}