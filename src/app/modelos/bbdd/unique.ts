import { Constraint } from "./constraint";
import {Tabla} from "../../modelos/bbdd/tabla";


export class Unique extends Constraint {
    
    private ENTER: string = "\n";
    private campos: string[];        

    constructor(campo: any) {
        super(campo);
    }
    
    obtenerCampos(): string {
        return this.campo;
    }

    obtenerClase(): string {
        return Unique.name;
    }

    // se le pasa un array como parametro y genera la union
    // de las unique si hay mas de una
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

    /*
        Tiene que estar en el service y
        deberia recibir una tabla, donde esten las constraint unique 
    */

    generarConstraint(tabla: Tabla): string {

        let scriptConstraint = "ALTER TABLE " + tabla.nombreTabla
                +   this.ENTER + "ADD CONSTRAINT " + this.obtenerClase()
                +   this.cargarCamposUnique() + ';'
                +   this.ENTER + "GO" + this.ENTER + this.ENTER;
        
        return scriptConstraint.toUpperCase();
    }
}