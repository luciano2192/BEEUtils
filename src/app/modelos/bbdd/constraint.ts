import { Tabla } from "./tabla";

export abstract class Constraint {
      
    public campo: string[];
    name: any;

    constructor(campo: string[]) {
        this.campo = campo;
    }

    public setearCampo(nuevoCampo: string[]) {
        this.campo = nuevoCampo;
    }

    public obtenerCampo() {
        return this.campo;    
    }

    abstract generarConstraint(tabla: Tabla): string;
}