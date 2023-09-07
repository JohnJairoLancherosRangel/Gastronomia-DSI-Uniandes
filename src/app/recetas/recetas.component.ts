import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { RecetasDataService } from '../RecetasDataService';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

// RECIBE EVENT EMITER DE COMPONENTE CULTURA PARA SABER LA CULTURA QUE SELECCIONO Y MOSTRAR COMPONENTE RECETAS
  @Input() culturaSeleccionada: string | undefined;
  
  Recetas: any [] = [];

  constructor(private RecetasData : RecetasDataService){}

  ngOnChanges(changes: SimpleChanges): void {
    this.Recetas = this.RecetasData.obtenerRecetas();

    if (changes['culturaSeleccionada']) {     
      this.mostrarRecetas();
      
    }
  }

  // ARREGLO DE PAISES QUE COINCIDEN CON LA CULTURA SELECCIONADA (EMITIDA)
  RecetasFiltradas: any[] = [];

  mostrarRecetas() {

    // SE REINICIA CUANDO SE LLAMA AL MÉTODO
    this.RecetasFiltradas = [];

    console.log("TODAS LAS RECETAS" + this.Recetas);
    for(const Receta of this.Recetas){
      
      
      console.log(Receta.culturaGastronomica + "==?" + this.culturaSeleccionada );
      if(Receta.culturaGastronomica == this.culturaSeleccionada){
        this.RecetasFiltradas.push(Receta);
      }
    }
    console.log("Entró A Recetas");
  }

  @Output() MostrarPaises = new EventEmitter<boolean>();
  VolverAPaises(){
      this.MostrarPaises.emit(true);
  }

}
