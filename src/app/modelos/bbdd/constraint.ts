export class Constraint {
    
    public campo: any;
    name: any;

    constructor(campo: any) {
        this.campo = campo.nombreCampo;
    }

    public setCampo(nuevoCampo: string) {
        this.campo = nuevoCampo;
    }

    public getCampo() {
        return this.campo;    
    }
}