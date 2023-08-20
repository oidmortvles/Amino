export class Ronda{

    cartas:any[]=[];
    puntos:number=0;
    apuesta:any=[];
    colores:string[]=[];
    puntosExtra:number=0;

    constructor(cartas:number[], puntos:number, apuestas:any[], colores:string[],puntosExtra:number){

        this.cartas=cartas;
        this.puntos=puntos;
        this.apuesta=apuestas; 
        this.colores=colores; 
        this.puntosExtra=puntosExtra; 
             
    }

    
    

    

}