export class Cliente {
    nombre: string;
    cif: string;
    direccion: string;
    grupo: number;

    constructor(nombre:string, cif:string, direccion:string,grupo:number){
        this.nombre = nombre;
        this.cif = cif;
        this.direccion = direccion;
        this.grupo = grupo;
    }
}
