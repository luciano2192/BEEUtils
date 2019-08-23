import { Constraint } from "./constraint";
import { Tabla } from "./tabla";

export class ForeignKey extends Constraint {

    private ENTER: string = "\n";
    
    constructor(nombreCampo: string[]) {
        super(nombreCampo);
    }

    obtenerCampo(): string[] {
        return this.campo;
    }

    obtenerClase(): string {
        return ForeignKey.name;
    }

    generarConstraint(tabla: Tabla): string {

        let scriptConstraint = "ALTER TABLE " + tabla.nombreTabla
                +   this.ENTER + "ADD CONSTRAINT " + this.obtenerClase()
                +   this.obtenerCampo() + ';'
                +   this.ENTER + "GO" + this.ENTER + this.ENTER;
        
        return scriptConstraint.toUpperCase();
    }

    //ALTER TABLE nombretabla
    //ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

}

