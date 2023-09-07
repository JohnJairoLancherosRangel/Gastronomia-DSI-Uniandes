import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ProductosDataService } from '../ProductosDataService';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  // RECIBE EVENT EMITER DE COMPONENTE CULTURA PARA SABER LA CULTURA QUE SELECCIONO Y MOSTRAR COMPONENTE RECETAS
  @Input() culturaSeleccionada: string | undefined;
  
  Productos: any [] = [];
  @Input() mostrarComponenteProductos: boolean = false;

  constructor(private ProductosData : ProductosDataService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.Productos = this.ProductosData.obtenerProductos();

    if (changes['culturaSeleccionada']) {     
      this.mostrarProductos();
      
    }
  }

  // ARREGLO DE PAISES QUE COINCIDEN CON LA CULTURA SELECCIONADA (EMITIDA)
  ProductosFiltrados: any[] = [];

  mostrarProductos(){

    // SE REINICIA CUANDO SE LLAMA AL MÉTODO
    this.ProductosFiltrados = [];

    // RECORRE LOS PRODUCTOS PROVEIDOS POR EL SERVICIO
    for(const Producto of this.Productos){

      for(const cultura of Producto.culturasGastronomicas){
          
        // SI CORRESPONDE CON LA CULTURA EMITIDA AGREGA EL PAIS
        if(cultura == this.culturaSeleccionada){
          this.ProductosFiltrados.push(Producto);
        }

      }
      
    }

  }

  @Output() MostrarPaises = new EventEmitter<boolean>();
  VolverAPaises(){
      this.MostrarPaises.emit(true);
  }
  
}
