import { Constraint } from "./constraint";
import {Tabla} from "../../modelos/bbdd/tabla";


export class Unique extends Constraint {
    
    private ENTER: string = "\n";
    private campos: string = "";        

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
    cargarCamposUnique(camposUnique: Array<string>): string {

        camposUnique.forEach( element => {
            if (camposUnique.length > 1) {
                this.campos = camposUnique.join();
            } else {
                this.campos = element;
            }
        });
    
        return '(' + this.campos + ')';
    }

    /*
        Tiene que estar en el service y
        deberia recibir una tabla, donde esten las constraint unique 
    */

    generarConstraint(camposUnique: Array<string>): string {
        let tabla: Tabla;

        this.campos += "ALTER TABLE " + tabla.nombreTabla
                +   this.ENTER + "ADD CONSTRAINT " + this.obtenerClase()
                +   this.cargarCamposUnique(camposUnique) + ';'
                +   this.ENTER + "GO" + this.ENTER + this.ENTER;
        
        return this.campos.toUpperCase();
    }
}