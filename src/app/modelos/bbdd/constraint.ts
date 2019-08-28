import { Tabla } from "./tabla";

export abstract class Constraint {
      
    abstract generarConstraint(tabla: Tabla): string;
}