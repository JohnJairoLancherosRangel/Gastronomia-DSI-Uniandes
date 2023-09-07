import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesDataService {

    Restaurantes: any[] = [
        { nombre: 'MEDITERRANÉ BAR', 
        ImagenUrl:'https://images.otstatic.com/prod/28328205/4/huge.jpg',
        ciudad: 'Madrid', 
        pais: 'España', 
        EstrellasMichellin:'4', 
        FechaConsecucion:'02/06/2003', 
        culturasGastronomicas: ["Mediterranea"]},
        
        { nombre: 'PARÍS BREAD', 
        ImagenUrl:'https://c4.wallpaperflare.com/wallpaper/358/587/630/baked-goods-bakery-bread-commerce-wallpaper-preview.jpg', 
        ciudad: 'París', 
        pais: 'Francia', 
        EstrellasMichellin:'5', 
        FechaConsecucion:'03/11/1998', 
        culturasGastronomicas: ["Francesa"] },
        
        {
          nombre:'CHUNG NWA FREE CLINIC',
          ImagenUrl:'https://c8.alamy.com/compes/2hnc2hr/singapur-07-de-septiembre-de-2019-locales-y-turistas-clientes-comiendo-en-my-awesome-cafe-restaurante-en-un-antiguo-hospital-convertido-2hnc2hr.jpg',
          ciudad:'Tokio',
          pais:'Japón',
          EstrellasMichellin:'5',
          FechaConsecucion:'28/06/1994',
          culturasGastronomicas: ["Japonesa"]
        },
        {
          nombre:'Doña Segunda',
          ImagenUrl:'https://www.las2orillas.co/wp-content/uploads/2020/12/portada-dona-segunda.jpg',
          ciudad:'Bogotá D.C',
          pais:'Colombia',
          EstrellasMichellin:'5',
          FechaConsecucion:'01/02/2003',
          culturasGastronomicas: ["Latinoamericana"]
        },
        {
          nombre:'Plaza De Mercado La Perseverancia',
          ImagenUrl:'https://fastly.4sqi.net/img/general/600x600/44737310_kP9a09dE48DbROZdcpipmrs3EHheKOOy21ntpFHOvZo.jpg',
          ciudad:'Bogotá D.C',
          pais:'Colombia',
          EstrellasMichellin:'5',
          FechaConsecucion:'04//03/1950',
          culturasGastronomicas: ["Latinoamericana"]
        }

      ];
  
      obtenerRestaurantes() {
        return this.Restaurantes;
      }

}