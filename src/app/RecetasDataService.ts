import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetasDataService {

    Recetas: any[] = [

        { nombre: 'Paella Valenciana Tradicional', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=DNin1AD-WUQ&ab_channel=TULIORecomienda',
        descripcion: 'La paella, o paella valenciana, como se le conoce fuera de Valencia, es sin lugar a dudas uno de los platos más representativos de la gastronomía española. No se trata de un plato difícil de hacer, aunque es cierto que tiene sus pequeños trucos y peculiaridades.', 
        FotoUrl: 'https://media.tenor.com/0W6xwx69P3IAAAAC/paella-mussels.gif', 
        preparacion: `La Paella Valenciana, un plato icónico de la región de Valencia en España, se prepara con amor y tradición. Comienza calentando aceite de oliva en una paellera grande y añadiendo pollo y conejo troceados. Una vez dorados, se retiran y se reserva. Luego, en el mismo aceite, se sofrien pimientos, tomates y judías verdes frescas, antes de agregar azafrán y pimentón para dar color y sabor. El arroz se añade y se mezcla bien con los ingredientes antes de volver a colocar el pollo y el conejo en la paellera. Finalmente, se cocina a fuego lento hasta que el arroz absorba todos los sabores y se forme una deliciosa costra en la parte inferior, conocida como 'socarrat'. La Paella Valenciana es una celebración de los ingredientes frescos y la cultura culinaria de la región.`,
        culturaGastronomica: "Mediterranea"},

        { nombre: 'Ensalada Mediterranea', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=rYgJskIIeC0&ab_channel=FloretteEspa%C3%B1a',
        descripcion: 'La Ensalada Mediterránea, un plato ligero y saludable, es una celebración de los sabores frescos y vibrantes de la región mediterránea. Para prepararla, se comienza con una base de lechuga crujiente, tomates maduros y pepinos frescos, todos cortados en trozos. Luego se agregan aceitunas Kalamata y queso feta desmenuzado para un toque salado y cremoso. Un aderezo simple de aceite de oliva virgen extra, jugo de limón fresco, ajo picado y hierbas aromáticas como el orégano y el tomillo, se vierte sobre la ensalada, realzando los sabores y creando un plato refrescante que captura la esencia de la cocina mediterránea.', 
        FotoUrl: 'https://media.tenor.com/b77fPD8Fn2EAAAAC/salad-ensalada.gif', 
        preparacion: `La Ensalada Mediterránea, un plato ligero y saludable, es una celebración de los sabores frescos y vibrantes de la región mediterránea. Para prepararla, se comienza con una base de lechuga crujiente, tomates maduros y pepinos frescos, todos cortados en trozos. Luego se agregan aceitunas Kalamata y queso feta desmenuzado para un toque salado y cremoso. Un aderezo simple de aceite de oliva virgen extra, jugo de limón fresco, ajo picado y hierbas aromáticas como el orégano y el tomillo, se vierte sobre la ensalada, realzando los sabores y creando un plato refrescante que captura la esencia de la cocina mediterránea.`,
        culturaGastronomica: "Mediterranea"},


        { nombre: 'Sushi', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=D2gWau1l-sk&ab_channel=Abelca',
        descripcion: 'El sushi es un icónico plato japonés que combina arroz sazonado con vinagre, pescado crudo o cocido, mariscos y vegetales, todo enrollado en alga nori o servido en pequeñas porciones. Se caracteriza por su equilibrio de sabores y texturas, con una base de arroz pegajoso y saborizado, acompañado de ingredientes frescos y delicadamente preparados. El sushi se sirve con frecuencia con salsa de soja, wasabi y jengibre encurtido, y es conocido por su presentación artística y su énfasis en la frescura y calidad de los ingredientes. Es un favorito en la gastronomía japonesa y se ha convertido en un plato apreciado en todo el mundo.', 
        FotoUrl: 'https://media.tenor.com/fM1MzIyHNRcAAAAC/japanesefood-sushi.gif', 
        preparacion:'La preparación del sushi comienza con la cocción del arroz glutinoso, que se sazona con una mezcla de vinagre, azúcar y sal. Luego, se estira una lámina de alga nori sobre una esterilla de bambú y se cubre con una capa delgada de arroz. Se agregan ingredientes como pescado crudo, mariscos, aguacate, pepino y más. El sushi se enrolla con cuidado en forma de cilindro utilizando la esterilla, luego se corta en porciones pequeñas. Se sirve con salsa de soja, wasabi y jengibre encurtido, y su presentación artística y equilibrio de sabores hacen que sea una delicia culinaria apreciada en todo el mundo.', 
        culturaGastronomica: "Japonesa"},


        { nombre: 'Pasta', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=X8LuqxgO7Ew&ab_channel=AlimentosDoria',
        descripcion: `La pasta es un alimento versátil y reconfortante que se prepara a partir de harina y agua (a menudo con huevos) y se moldea en diversas formas y tamaños. Se cocina en agua hirviendo y se sirve con una variedad de salsas y condimentos, como tomate, queso, aceite de oliva, hierbas y carnes. Su textura varía, desde pasta fresca y tierna hasta opciones secas y más firmes. La pasta es un pilar de la cocina italiana, pero se disfruta en todo el mundo debido a su adaptabilidad y capacidad para ser el lienzo de una amplia gama de sabores y estilos culinarios.`, 
        FotoUrl: 'https://i.gifer.com/7IEU.gif', 
        preparacion:'La preparación de la pasta comienza con la cocción de la pasta seca o fresca en agua hirviendo con sal hasta que esté al dente, lo que significa que esté cocida pero aún firme al morderla. Mientras tanto, se prepara una salsa que puede ser tan simple como aceite de oliva y ajo salteados, o más elaborada con tomates, hierbas y otros ingredientes. Una vez cocida, la pasta se escurre y se mezcla con la salsa, permitiendo que los sabores se combinen. Finalmente, se sirve caliente, a menudo espolvoreada con queso rallado y adornada con hierbas frescas. La versatilidad de la pasta permite una amplia variedad de combinaciones de sabores, desde clásicas como la pasta a la bolognesa hasta creaciones más creativas e innovadoras.', 
        culturaGastronomica: "Francesa" },

        { nombre: 'Pizza', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=crdtrzZj3fo&ab_channel=KatastrofaLaCocina',
        descripcion: `La pizza es un plato clásico de la cocina italiana que consiste en una base de masa horneada cubierta con salsa de tomate y queso, y se puede adornar con una variedad de ingredientes como pepperoni, champiñones, pimientos y otros. Es conocida por su sabor reconfortante y su versatilidad, siendo una de las comidas más populares en todo el mundo. La combinación de sabores y texturas, con su mezcla de crujiente y suave, hace que la pizza sea una deliciosa elección para muchas ocasiones.`, 
        FotoUrl: 'https://media.tenor.com/t-oztj01FeAAAAAC/pizza.gif', 
        preparacion:'La preparación de la pizza comienza con la masa, que se estira y se acomoda en una bandeja. Luego, se cubre generosamente con una salsa de tomate sazonada y se espolvorea con queso mozzarella. A continuación, puedes personalizarla con tus ingredientes favoritos, como pepperoni, champiñones, pimientos y aceitunas. La pizza se hornea en un horno caliente hasta que la masa esté dorada y crujiente, y el queso se derrita y burbujee. El resultado es una deliciosa obra maestra de sabor y textura que se sirve caliente y lista para disfrutar.', 
        culturaGastronomica: "Francesa" },


        { nombre: 'Picada', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=3XfaCM5lCrg&ab_channel=Recetasparatodaocasion',
        descripcion: 'La picada colombiana es un festín culinario que combina una variedad de sabores y texturas en un solo plato. Se compone de una selección de carnes asadas, como chorizo, chicharrón y carne de cerdo, acompañadas de arepas, plátano maduro frito, yuca, morcilla y hogao (una salsa de tomate y cebolla). Esta mezcla de ingredientes crea una experiencia gastronómica rica y abundante que es popular en Colombia y se disfruta en reuniones familiares y celebraciones. La picada colombiana refleja la diversidad de sabores y productos regionales del país.', 
        FotoUrl: 'https://i.makeagif.com/media/9-15-2016/Z47fMN.gif', 
        preparacion:'La preparación de la picada colombiana es un proceso que combina la parrilla y la fritura para lograr una mezcla de sabores y texturas. Comienza asando carnes como el chorizo, el chicharrón y la carne de cerdo en la parrilla hasta que estén doradas y crujientes. Mientras tanto, se fríen plátanos maduros, yuca y arepas hasta que estén dorados y tiernos. La morcilla se cuece al vapor y el hogao se prepara con tomate, cebolla y especias. Una vez que todos los componentes están listos, se sirven juntos en una abundante presentación en la que los comensales pueden combinar los ingredientes a su gusto. La picada colombiana es una fiesta de sabores y una celebración de la comida regional de Colombia.', 
        culturaGastronomica: "Latinoamericana" },

        { nombre: 'Tacos', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=uFGFtLB7hWw&ab_channel=TULIORecomienda',
        descripcion: 'Los tacos mexicanos son un ícono de la gastronomía mexicana, conocidos por su simplicidad y delicioso sabor. Consisten en tortillas de maíz o harina rellenas de una variedad de ingredientes, como carne asada, carnitas, pollo, pescado o verduras. Estos ingredientes se aderezan con condimentos y salsas, como guacamole, salsa picante, cebolla y cilantro fresco. Los tacos son versátiles y se pueden personalizar según los gustos individuales. Son una comida callejera popular en México y se disfrutan en todo el mundo por su sabor auténtico y su capacidad para combinar una amplia gama de sabores y texturas en cada bocado.', 
        FotoUrl: 'https://i.pinimg.com/originals/1d/3d/26/1d3d260088cf340b6b03a1e637197b55.gif', 
        preparacion:'La preparación de los tacos comienza con la elección de la proteína, que puede ser carne asada, pollo, cerdo o incluso opciones vegetarianas como champiñones. La carne se sazona con una mezcla de especias y se cocina a la parrilla o en una sartén hasta que esté tierna y ligeramente dorada. Mientras tanto, se calientan las tortillas de maíz o harina en una plancha o comal hasta que estén calientes y flexibles. Luego, se ensamblan los tacos colocando una porción de carne en cada tortilla y agregando ingredientes adicionales como cebolla, cilantro, salsa picante y guarniciones a gusto. Los tacos se sirven típicamente con limones para darles un toque de acidez fresca. La belleza de los tacos radica en su versatilidad y en la posibilidad de personalizarlos según los sabores preferidos de cada comensal.', 
        culturaGastronomica: "Latinoamericana" },

        { nombre: 'Sancocho', 
        VideoPreparacion: 'https://www.youtube.com/watch?v=DPr7wRpkpLc&ab_channel=RositaCocina',
        descripcion: 'El sancocho colombiano es un reconfortante guiso tradicional de la cocina colombiana. Este plato se caracteriza por combinar una variedad de carnes, como pollo, cerdo y res, con verduras como yuca, plátano, papa y maíz. Se cocina a fuego lento en un caldo sazonado con hierbas y especias, lo que le confiere un sabor profundo y delicioso. El sancocho es un plato abundante y lleno de sabores auténticos de Colombia, y suele servirse con arroz, aguacate y ají picante. Es un favorito en celebraciones y ocasiones especiales, y refleja la riqueza de la gastronomía colombiana.', 
        FotoUrl: 'https://i.pinimg.com/originals/25/8e/8a/258e8ab8220429ee035fff7b32af3eca.gif', 
        preparacion:'La preparación del sancocho colombiano comienza seleccionando una variedad de carnes, como pollo, cerdo y res, junto con una mezcla de verduras que incluye yuca, papa, plátano y maíz. Estos ingredientes se colocan en una olla grande con agua y se cocinan a fuego lento durante varias horas. Durante la cocción, se añaden hierbas y especias como cilantro, cebolla verde y ajo para dar sabor al caldo. El resultado es un guiso abundante y sabroso que se sirve caliente, a menudo acompañado de arroz, aguacate y ají picante para agregar un toque extra de sabor. El sancocho es un plato reconfortante y tradicional en la gastronomía colombiana, perfecto para reuniones familiares y ocasiones especiales.', 
        culturaGastronomica: "Latinoamericana" },

        { nombre: 'Bandeja Paisa',
        VideoPreparacion: 'https://www.youtube.com/watch?v=1n6bq4wfoSU&ab_channel=RositaCocina', 
        descripcion: 'La bandeja paisa es un icónico plato de la cocina colombiana que representa una comida abundante y satisfactoria. Consiste en una combinación de carnes, como carne molida o carne asada, chorizo y chicharrón (cerdo frito), acompañadas de arroz, frijoles, aguacate, huevo frito, plátano maduro frito y arepa. Este plato se caracteriza por su variedad de ingredientes y su generosa porción, lo que lo convierte en una opción popular para aquellos que desean una comida completa y abundante. La bandeja paisa es una deliciosa muestra de la comida colombiana y refleja la riqueza de la gastronomía de la región paisa en Colombia.', 
        FotoUrl: 'https://i.makeagif.com/media/4-16-2021/MUZTtg.gif', 
        preparacion:'La preparación de la bandeja paisa es un proceso que involucra la cocción de varios ingredientes para crear una comida abundante y deliciosa. Comienza con la preparación de carnes como carne molida o carne asada, chorizo y chicharrón, que se cocinan hasta que estén doradas y crujientes. Mientras tanto, se cocinan los frijoles y se prepara arroz blanco. Además, se fríen huevos hasta que las yemas estén ligeramente líquidas. Se sirve todo en una bandeja grande, junto con aguacate, plátano maduro frito y arepa. La presentación es generosa y variada, lo que hace de la bandeja paisa un plato emblemático de la comida colombiana, ideal para aquellos que desean disfrutar de una comida copiosa y llena de sabor.', 
        culturaGastronomica: "Latinoamericana" }
     
      ];
  
      obtenerRecetas() {
        return this.Recetas;       
      }   

}