export class Ronda{

    cartas:any[]=[];
    puntos:number=0;
    apuesta:any=[];
    colores:string[]=[];
    puntosExtra:number=0;
    puntosPorJugar:number=0;
    intentos:number=0;
    intentosJugados:number=0;
    apuestasValidas:any[]=[];
    

    constructor(cartas:number[], puntos:number, apuestas:any[], colores:string[],
        puntosExtra:number,puntosPorJugar:number,intentos:number,intentosJugados:number,apuestasValidas:any[]){

        this.cartas=cartas;
        this.puntos=puntos;
        this.apuesta=apuestas; 
        this.colores=colores; 
        this.puntosExtra=puntosExtra;
        this.puntosPorJugar=puntosPorJugar;
        this.intentos=intentos;
        this.intentosJugados=intentosJugados;
        this.apuestasValidas=apuestasValidas;
             
    }

    
    

    

}