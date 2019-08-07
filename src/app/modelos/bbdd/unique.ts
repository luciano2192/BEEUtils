import { Constraint } from "./constraint";
import { Tabla } from "./tabla";
import { Campo } from "./campo";

export class Unique extends Constraint {
    private ENTER: string = "\n";
    // crear array con las constraint
    
    constructor(campo: Campo) {
        super(campo);
    }

    public getClass() {
        return Unique.name;
    }


    getConstraint(tabla: Tabla) {
        // que se genere la constraint con los valores del array
        // no pasarle como parametro el array
        // hacer la misma funcion en las otras constraint
        let create="";

        if (tabla.motor === "SQLServer") {
            tabla.campos.forEach( (campo) => {
                create += "ALTER TABLE " + tabla.nombreTabla
                +  this.ENTER + "ADD CONSTRAINT " + tabla.constraints
            })
        }
    
        tabla.campos.forEach( (campo) => {
            if(tabla.motor === "SQLServer") {
                create += "ALTER TABLE " + tabla.nombreTabla
                +  this.ENTER + "ADD CONSTRAINT " + tabla.constraints //ver tabla, propiedad constraints, las diferentes constraint van dentro ?
                //en el scriptForm del component no esta cargada
                +  " (" + campo.nombreCampo + "); "
                //para el caso de UNIQUE, nombreCampo deberia ser un array
                //para poder concatenar los campos en un solo unique
                +  this.ENTER + "GO" + this.ENTER+this.ENTER;
            }
        });
    
    return create.toUpperCase();

    }
}