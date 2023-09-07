import { Component,EventEmitter,Input, OnChanges, Output, SimpleChanges  } from '@angular/core';
import { PaisesDataService } from '../PaisesDataService';
import { CulturasDataService } from '../CulturasDataService';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
 
  // RECIBE EVENT EMITER DE COMPONENTE CULTURA PARA SABER LA CULTURA QUE SELECCIONO 
  @Input() culturaSeleccionada: string | undefined;
  DescripcionCultura:string | undefined;
  
  // ARREGLO INICIAL DE PAISES
  paises: any[] = [];

  // ARREGLO INICIAL DE CULTURAS
  CULTURAS: any[] = [];
  
  // INJECCIÓN DE DEPENDENCIA PARA OBTENER LISTADO DE PAISES
  constructor(private PaisesService: PaisesDataService, private CulturasGastronomicas: CulturasDataService) { }

  // LLENADO DEL ARREGLO DE PAISES Y EJECUCIÓN DE MÉTODO
  ngOnChanges(changes: SimpleChanges, PaisesService: PaisesDataService): void {
    this.paises = this.PaisesService.obtenerPaises();
    this.CULTURAS = this.CulturasGastronomicas.obtenerCulturas();

    if (changes['culturaSeleccionada']) {     
      this.mostrarPaises();     
    }
  }

  // ARREGLO DE PAISES QUE COINCIDEN CON LA CULTURA SELECCIONADA (EMITIDA)
  PaisesFiltrados: any[] = [];

  mostrarPaises() {

    // FOR PARA DESCRIPCION DE LA CULTURA GASTRONOMICA
    for (const cultura of this.CULTURAS){
      if(cultura.nombre == this.culturaSeleccionada){
          this.DescripcionCultura = cultura.descripcion;
      }

    }

    // SE REINICIA CUANDO SE LLAMA AL MÉTODO
    this.PaisesFiltrados = [];

    // RECORRE LOS PAISES PROVEIDOS POR EL SERVICIO
    for(const pais of this.paises){

      for(const cultura of pais.culturasGastronomicas){
          
        // SI CORRESPONDE CON LA CULTURA EMITIDA AGREGA EL PAIS
        if(cultura == this.culturaSeleccionada){
          this.PaisesFiltrados.push(pais.nombre);
        }

      }
      
    }
    
    console.log("Paises Con Cultura Seleccionada " + this.culturaSeleccionada + this.PaisesFiltrados);
    return this.PaisesFiltrados;

  }

  //METODO PARA MOSTRAR COMPONENTE CULTURAS DE NUEVO

  @Output() mostrarComponente = new EventEmitter<boolean>();
  Volver(){
    // Establecer el valor de visibilidad en el servicio
    this.mostrarComponente.emit(true);
  }

  
  @Output() MostrarRecetas = new EventEmitter<boolean>();
  IrARecetas(){
    this.MostrarRecetas.emit(true);
  }

  @Output() MostrarRestaurantes = new EventEmitter<boolean>();
  IrARestaurantes(){
    this.MostrarRestaurantes.emit(true);
  }
  
  @Output() MostrarProductos = new EventEmitter<boolean>();
  IrAProductos(){
    this.MostrarProductos.emit(true);
  }
}
