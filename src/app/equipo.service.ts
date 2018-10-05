import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

equipo:any[] = [
{
nombre:'Ignacio',
especialidad:'HTML',
descripcion:'this is the description of the object "equipo" that is located inside the service.'
},
{
  nombre:'Maria',
  especialidad:'CSS',
  descripcion:'this is the description of the object "equipo" that is located inside the service.'
  },

]

  constructor() {
    console.log('fucionando servicio');
   }

obtenerEquipo(){
return this.equipo;
}

obtenerUno(i){
return this.equipo[i];  
}

}
