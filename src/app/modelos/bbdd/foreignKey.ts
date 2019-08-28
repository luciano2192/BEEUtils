import { Constraint } from "./constraint";
import { Tabla } from "./tabla";

export class ForeignKey extends Constraint {

    private ENTER: string = "\n";
    private tablaDestino:string;
    private campoDestino:string;
    private campo: string;
    
    constructor(campo: string, campoDestino?: string, tablaDestino?: string) {
        super()

        this.campo = campo;
        this.campoDestino = campoDestino;
        this.tablaDestino = tablaDestino;
    }

    generarConstraint(tabla: Tabla): string {

        let scriptConstraint = "ALTER TABLE " + tabla.nombreTabla
                +   this.ENTER + "ADD CONSTRAINT " + "FOREIGN KEY"
                +   this.campo + " REFERENCES "
                +   this.tablaDestino + this.campoDestino + ";"
                +   this.ENTER + "GO" + this.ENTER + this.ENTER;
        
        return scriptConstraint.toUpperCase();
    }


}

