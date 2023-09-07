import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gastronomia';

  culturaSeleccionada: string = ''; // Inicialmente no hay cultura seleccionada

  mostrarComponentePaises: boolean = false;
  mostrarComponenteRecetas: boolean = false;
  mostrarComponenteProductos: boolean = false;
  mostrarComponenteRestaurantes: boolean = false;
  mostrarComponenteCulturas: boolean = true;

  seleccionarCultura(cultura: string) {
    this.culturaSeleccionada = cultura;
  }

  mostrarPaises(MostrarPaises: boolean){
    this.mostrarComponenteCulturas= false;
    this.mostrarComponentePaises = MostrarPaises;
  }

  VolverACulturas(MostrarCulturas: boolean){
    this.mostrarComponenteCulturas = true;
    this.mostrarComponentePaises = false;
    console.log("Valor de Volver:" + this.mostrarComponenteCulturas);
  }

  VolverAPaises(MostrarPaises: boolean){
    this.mostrarComponenteRecetas = false;
    this.mostrarComponenteProductos = false;
    this.mostrarComponenteRestaurantes = false;
    this.mostrarComponentePaises = MostrarPaises;    
  }

  mostrarRecetas(MostrarRecetas:boolean){
    this.mostrarComponentePaises = false;
    this.mostrarComponenteRecetas = MostrarRecetas;
  }

  mostrarProductos(MostrarProductos:boolean){
    this.mostrarComponentePaises = false;
    this.mostrarComponenteProductos = MostrarProductos;
  }

  mostrarRestaurantes(MostrarRestaurantes:boolean){
    this.mostrarComponentePaises = false;
    this.mostrarComponenteRestaurantes = MostrarRestaurantes;
  }


}
