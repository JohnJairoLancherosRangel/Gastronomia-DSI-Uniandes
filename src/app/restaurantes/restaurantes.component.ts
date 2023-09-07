import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { RestaurantesDataService } from '../RestaurantesDataService';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {

   // RECIBE EVENT EMITER DE COMPONENTE CULTURA PARA SABER LA CULTURA QUE SELECCIONO Y MOSTRAR COMPONENTE RECETAS
   @Input() culturaSeleccionada: string | undefined;
  
   Restaurantes: any [] = [];
   @Input() mostrarComponenteRestaurantes: boolean = false;
 
   constructor(private RestaurantesData : RestaurantesDataService){}
   
   ngOnChanges(changes: SimpleChanges): void {
     this.Restaurantes = this.RestaurantesData.obtenerRestaurantes();
 
     if (changes['culturaSeleccionada']) {     
       this.mostrarRestaurantes();    
     }
   }
 
   // ARREGLO DE PAISES QUE COINCIDEN CON LA CULTURA SELECCIONADA (EMITIDA)
   RestaurantesFiltrados: any[] = [];
 
   mostrarRestaurantes(){
 
     // SE REINICIA CUANDO SE LLAMA AL MÉTODO
     this.RestaurantesFiltrados = [];
 
     // RECORRE LOS PRODUCTOS PROVEIDOS POR EL SERVICIO
     for(const Restaurante of this.Restaurantes){
 
       for(const cultura of Restaurante.culturasGastronomicas){
           
         // SI CORRESPONDE CON LA CULTURA EMITIDA AGREGA EL PAIS
         if(cultura == this.culturaSeleccionada){
           this.RestaurantesFiltrados.push(Restaurante);
         }
 
       }
       
     }
 
   }

   @Output() MostrarPaises = new EventEmitter<boolean>();
  VolverAPaises(){
      this.MostrarPaises.emit(true);
  }
}
