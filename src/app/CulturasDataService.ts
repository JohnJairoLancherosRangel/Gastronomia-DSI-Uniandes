import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CulturasDataService {

    culturas: any[] = [
        { nombre: 'Mediterranea', descripcion: `La cultura gastronómica mediterránea es un verdadero festín para los sentidos. Originaria de las regiones costeras que rodean el Mar Mediterráneo, esta tradición culinaria se caracteriza por su énfasis en ingredientes frescos y naturales. Aceite de oliva virgen extra, tomates maduros, hierbas aromáticas como el tomillo y el orégano, y pescado fresco son pilares fundamentales de esta cocina. Los platos mediterráneos son conocidos por su sencillez y su capacidad para resaltar los sabores naturales de los ingredientes. Es una cultura culinaria que promueve la salud y el bienestar, con una rica historia que se remonta a siglos atrás y que sigue deleitando paladares en todo el mundo.`},
        { nombre: 'Francesa', descripcion: `La cultura gastronómica francesa es una celebración de la exquisitez y la sofisticación culinaria. Conocida en todo el mundo por su alta cocina, esta tradición culinaria se basa en la calidad de los ingredientes y la precisión en la preparación. Desde los vinos exquisitos hasta los quesos artesanales, y desde los croissants frescos hasta los platos de alta cocina como el coq au vin y el bouillabaisse, la comida francesa es una obra de arte. Los chefs franceses han elevado la cocina a un arte, y la degustación de platos es una experiencia que involucra todos los sentidos. La cultura gastronómica francesa es un legado culinario que ha influenciado a cocineros de todo el mundo y sigue siendo un faro de la gastronomía internacional.`},
        { nombre: 'Japonesa', descripcion: `La cultura gastronómica japonesa es una elegante danza de sabores y tradiciones arraigadas en la simplicidad y la reverencia por la frescura de los ingredientes. En Japón, la comida se considera una forma de arte y un reflejo de la estación y la naturaleza. Desde el sushi delicadamente preparado hasta el ramen reconfortante y los platos tradicionales como el tempura y el sashimi, la cocina japonesa se caracteriza por su atención meticulosa a los detalles. La comida se sirve de manera estética, y la presentación es tan importante como el sabor. La cultura gastronómica japonesa es un viaje sensorial que abarca desde los mercados callejeros llenos de vida hasta los restaurantes de alta gama, y es un testimonio de la dedicación a la calidad y la excelencia en cada bocado.` },
        { nombre: 'Latinoamericana', descripcion: `La cultura gastronómica latinoamericana es una celebración de la diversidad y la pasión por la comida. Desde México hasta Argentina, este vasto continente ofrece una rica paleta de sabores y tradiciones culinarias. Las bases de la cocina latinoamericana son los ingredientes autóctonos, como el maíz, el chile, el frijol y el aguacate, que se combinan en una variedad de platos deliciosos. Desde los tamales mexicanos y las arepas colombianas hasta el ceviche peruano y el asado argentino, la comida latinoamericana es un viaje de sabores que refleja la historia, la cultura y la diversidad de cada país. Los colores, los aromas y la hospitalidad son parte integral de esta cultura culinaria que ha conquistado corazones en todo el mundo.` }
        // Otras culturas...
      ];
  
      obtenerCulturas() {
        return this.culturas;
      }

}