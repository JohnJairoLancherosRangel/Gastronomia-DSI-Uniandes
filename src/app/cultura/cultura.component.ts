import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CulturasDataService } from '../CulturasDataService';


@Component({
  selector: 'app-cultura',
  templateUrl: './cultura.component.html',
  styleUrls: ['./cultura.component.css']
})
export class CulturaComponent {

  // ARREGLO DE CULTURAS GASTRONOMICAS
  culturas: any[] = [];
  
  // INJECCIÓN DE DEPENDENCIA SERVICIO PARA OBTENER CULTURAS
  constructor(private culturaService: CulturasDataService) { }

  ngOnInit(): void {
    // Inicializar Arreglo con valores del servicio
    this.culturas = this.culturaService.obtenerCulturas();
  }

  @Output() culturaSeleccionada = new EventEmitter<string>();
  @Output() mostrarComponentePaises = new EventEmitter<boolean>();

  seleccionarCultura(cultura: any) {
    // Aquí debes emitir un evento para enviar el nombre de la cultura al componente Paises
    const nombreCultura = cultura.nombre;
    this.culturaSeleccionada.emit(nombreCultura);

    // EMITE TRUE PARA QUE APP.COMPONENT ME MUESTRE LOS PAISES
    this.mostrarComponentePaises.emit(true);
       
  }


}
