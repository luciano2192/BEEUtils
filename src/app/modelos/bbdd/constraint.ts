import { Campo } from "./campo";

export class Constraint {
    
    public campo: string;

    constructor(campo: Campo) {
        this.campo = campo.nombreCampo;
    }

    public setCampo(nuevoCampo: string) {
        this.campo = nuevoCampo;
    }

    public getCampo() {
        return this.campo;    
    }

    public getClass() {
        return Constraint.name;
    }
}