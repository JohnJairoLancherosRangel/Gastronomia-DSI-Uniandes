import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesDataService {

    paises: any[] = [
        { nombre: 'Colombia', culturasGastronomicas: ["Mediterranea","Latinoamericana"]},
        {nombre: 'México', culturasGastronomicas: ["Latinoamericana"]},
        { nombre: 'Francia', culturasGastronomicas: ["Mediterranea","Francesa"] },
        {nombre:'Japón', culturasGastronomicas: ["Japonesa"]}
        // Otras culturas...
      ];
  
      obtenerPaises() {
        console.log(this.paises);
        return this.paises;       
      }   

}