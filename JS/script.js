`use stric`


//elementos
const Figuras = [
    {
        
        nombre: " Nagito Komaeda",
        altura: "14cm",
        descripcion: 'Una figura del personaje del juego Danganronpa 2: Goodbye dispair, hecho de resina sintetica y vistiendo el traje con el que se lo presento en 2020 por el decimo aniversario desde la salida del juego.',
        precio: 1000,
        imagen: "IMG/productos/figura_nagitokomaeda.webp",
        alt: "figura de un chico de cabello claro y traje, llamado nagito komaeda",
    },

    {
     
        nombre: "Roronoa Zoro",
        altura: "15cm",
        descripcion: 'Una figura del personaje Zoro del anime y manga "One Piece", hecho con uno de los materiales conocidos como PVC (cloruro de polivinilo) uno de los materiales más comúnes permitiendo los detalles. El personaje se muestra con su vestimenta negra y llevando sus caracteristicas 3 espadas por la cual es tan conocido por usar a la vez.',
        precio: 1500,
        imagen: "IMG/productos/figura_zoro.webp",
        alt: "Figura del personaje zoro, con pelo verde, 3 espadas y una cicatriz en el ojo",
    },
    {
        nombre: "Victor Nikiforov",
        altura: "14cm",
        descripcion: 'Figura del personaje Victor del anime "Yuri on ice!!!", hecho del material PVC(cloruro de polivinilo) un material que permite los detalles de la figura. El personaje va con su ropa casual junto a un peluche del perro Vicchan. Proximante se sacara a Yuri para que puedas tener el juego de la pareja junta.',
        precio: 1200,
        imagen: 'IMG/productos/figura_victornikiforov.webp',
        alt:"Figura del personaje victor, chico con traje, pelo gris, sentado y con un peluche de un perro marron",
    },
    {
        nombre: "Gojo Satoru",
        altura: "15cm",
        descripcion: 'Figura del personaje Gojo del anime "Jujutsu Kaisen", hecho con PVC(cloruro de polivinilo) permitiendo mantener un buen nivel de detalle, actualmente tenemos la versión con su ropa de casual y próximamente sacaremos más figuras con el mostrando los ojos del cual el fandom esta tan enamorado. ',
        precio: 1300,
        imagen: 'IMG/productos/figura_gojosatoru.webp',
        alt: "figura del personaje gojo, chico con el pelo blanco sentado, con una venda en los ojos y un aparente entero negro azulado.",
    }
]

const mangas = [
    {
        nombre:"Bungou Stray Dogs + novela ligera" ,
        demografia: "Seinen",
        estadoDelManga: "en curso",
        cantidad: "32",
        precio: 15000 , 
        imagen: "IMG/productos/manga_bsd.webp",
        alt: "colección de libros como comics de origen japones llamado bungou stray dogs",
    },
    {
        nombre:"Assassination Classroom",
        demografia: "Shonen",
        estadoDelManga: "Finalizado",
        cantidad: " 21" ,
        precio: 10000,
        imagen: "IMG/productos/manga_assassinationclasstoom.webp",
        alt: "colección de libros como comics de origen japones llamado Assassination Classroom",
    },
    {
        nombre:"Kuroshitsuji" ,
        demografia: "shonen",
        estadoDelManga: "en curso (suspensión indefinida)",
        cantidad: "34" ,
        precio: 16000,
        imagen: "IMG/productos/manga_kuroshitsuji.webp",
        alt:"colección de libros como comics de origen japones llamado kuroshitsuji",
    },
    {
        nombre:"Death Note" ,
        demografia: "Shonen",
        estadoDelManga: "Finalizado",
        cantidad: "12 + especial" ,
        precio: 12000,
        imagen: "IMG/productos/manga_deathnote.webp",
        alt: "colección de libros como comics de origen japones llamado death note.",
    }
]

const llaveros = [
    {
        nombre: "Visión Anemo",
        origen: "Genshin Impact",
        descripcion: "El reconocimiento uno de los 7 Arcontes ahora puede estar en tus manos, puedes elegir el estilo de la nación que más te guste, con esta visión sentiras el viento correr por ti por la lucha y disfrute de la libertad.",
        estilo: "6",
        tamaño: "10x5",
        precio: 6000,
        imagen: "IMG/productos/llavero_anemo.webp",
        alt: "llavero con un dibujo de la llamada visión anemo del juego genshin impact",
    },
    {
        nombre: "Visión Dendro",
        origen: "Genshin Impact",
        descripcion: "El reconocimiento uno de los 7 Arcontes ahora puede estar en tus manos, puedes elegir el estilo de la nación que más te guste, siente la naturaleza y sabiduría de esta visión, no pierdas esas ganas de seguir conociendo mientras sientes la conexión con las plantas.",
        estilo: "7",
        tamaño: "10x5",
        precio: 6000,
        imagen: "IMG/productos/llavero_dendro.webp",
        alt: "llavero con un dibujo de la llamada visión dendro del juego genshin impact",
    },
    {
        nombre: "Visión Geo",
        origen: "Grnshin Impact",
        descripcion: "El reconocimiento uno de los 7 Arcontes ahora puede estar en tus manos, puedes elegir el estilo de la nación que más te guste, por tu dura voluntad de piedra, siente que esta te ayuda a mantenerte fuerte y nunca perder esa fuerza interior como una piedra.",
        estilo: "6",
        tamaño: "10x5",
        precio: 6000,
        imagen: "IMG/productos/llavero_geo.webp",
        alt: "llavero con un dibujo de la llamada visión geo del juego genshin impact",
    },
    {
        nombre: "Visión Pyro",
        origen: "Genshin Impact",
        descripcion: "El reconocimiento uno de los 7 Arcontes ahora puede estar en tus manos, puedes elegir el estilo de la nación que más te guste, alimenta la pasión en tu interior, tan ardiente como el fuego, no dejes que esa llama se apague.",
        estilo: "7",
        tamaño: "10x5",
        precio: 6000,
        imagen: "IMG/productos/llavero_pyro.webp",
        alt: "llavero con un dibujo de la llamada visión pyro del juego genshin impact",
    },
]

const cosplay = [
    {
        nombre: "Grell Sutcliff",
        incluye: "una camisa de lino, con una chaqueta y pantalón de algodón, guantes de latex, una peluca sintética, anteojos falsos de plastico con su sujetador, un moño de tela y un par de anillos para los brazos de elástico.",
        precio: 4000,
        img: "IMG/productos/cosplay_grellsutcliff.webp",
        alt: "todo lo necesario para disfrazarte como grell de kuroshitsuji",
    },
    {
        nombre: "Sasuke Uchiha",
        incluye: "Una camisa y pantalon de algodón, un hakama tubular que debe llegar hasta las rodillas sostenido por un adorno de plástico ",
        precio: 2000,
        img: "IMG/productos/cosplay_sasukeuchiha.webp",
        alt:"todo lo necesario para disfrazarte como sasuke de naruto",
    }, 
    {
        nombre:"Tanjiro Kamada",
        incluye: "una camisa de algodón, un haori con unos pantalones holgados de poliéster, unos aretes de plástico y un poco de marquillaje artístico para la marca",
        precio: 2000,
        img: "IMG/productos/cosplay_tanjiro.webp",
        alt: "todo lo necesario para disfrazarte como tanjiro de demon slayer",
    },
    {
        nombre: "Yor Forger",
        incluye: "vestido negro de tela hasta las rodillas con volantes que simulan una capa, guantes de latex, medias de tela y adornos de plástico para el cabello junto un par de aretes a juego",
        precio: 3500,
        img: "IMG/productos/cosplay_yorforger.webp",
        alt: "todo lo necesario para disfrazarte como yor forger de spy family",

    },
]

const accesorios = [
    {
        nombre: "Anillos Akatsuki",
        incluye: 'Compra de todo el conjunto de los anillos de los akatsuki, hechos de metal, con resina en la parte superior y en cada uno su respectivo kanji como en el anime. Llegan todos en una caja para guardarlos todos juntos y en la parte interna el nombre de a cual personaje le pertenecía',
        cantidad: "10",
        precio: 2000,
        img: "IMG/productos/accesorio_akatsuki.webp",
        alt: "Variedad de anillos de los miembros de los akatsuki",

    },
    {
        nombre: "Collares de Fairy Tail",
        incluye: "un set con 4 collares de metal de colores aleatorios con una cadena de cuerda",
        cantidad: "4",
        precio: 3000,
        img: "IMG/productos/accesorio_fairytail.webp",
        alt: "collares de distintos colores del anime fairy tail",
    },
    {
        nombre: "Pulseras de Nana",
        incluye: "Pulseras combinadas de metal y cuentas de plástico de colores y algunas de metal que representan a cada uno de los personajes. Ideal para compartir con una amiga o pareja",
        cantidad: "2",
        precio: 2000,
        img: "IMG/productos/accesorio_nana.webp",
        alt: "dos pulseras una con adornos rosas y otro negros, inspirados en los personajes del anime NANA",
    },
    {
        nombre:"Pulsera de Ace",
        incluye: "Pulsera con esferas de plástico y cuentas de metal, inspirado en el adorno en el sombrero del personaje Ace de One Piece",
        cantidad: "1",
        precio: 1200,
        img: "IMG/productos/accesorio_ace.webp",
        alt: "pulce con adornos inspirados en el personaje ace",
    }
]

const peluches = [
    {
        nombre: "Osamu Dazai",
        material: "Tela y relleno de algodón. Completamente abrazable y para llevar",
        tamaño: "20cm de alto",
        precio: 5000,
        img: "IMG/productos/peluche_dazai.webp",
        alt: "muñeco de tela de un chico castaño y con bata",

    },
    {
        nombre: "Bakugou Katsuki",
        material: "Hecho con tela y relleno de polietileno biobasado. Sin riesgo de explosión por ira",
        tamaño: "18cm de alto",
        precio: 6000,
        img: "IMG/productos/peluche_bakugou.webp",
        alt: "peluche de un chico rubio con su traje de heroe",

    },
    {
        nombre: "Ciel Phantomhive",
        material: "Hecho completamente de algodón y relleno de fibra sintética. Tamaño perfecto para llevarlo a donde vayas para que te apoye en cualquier caso o problema.",
        tamaño: "15cm de alto",
        precio: 3000,
        img: "IMG/productos/peluche_ciel.webp",
        alt: "peluche de chico con pelo azul y su traje de epoca de londres",

    },
    {
        nombre: "Tony Tony Chopper",
        material: "Peluche completamente de tela y relleno de algodón. Abrazable y un buen compañero para tus aventuras",
        tamaño: "16cm de alto",
        precio: 3000,
        img: "IMG/productos/peluche_chopper.webp",
        alt: "peluche del anime one piece del personaje chooper, un reno con nariz azul",

    }
]

const merch = [
    {
        nombre: "Deck Principal",
        anime: "Yu-Gi-Oh!",
        incluye: "Mazo de cartas hechos con cartulina gráfica estructurada que permite que luzca brillante de ambos lados. ",
        precio: 5500,
        img: "IMG/productos/march_cartasyugioh.webp",
        alt: "mazo de cartas que son utilizados en las peleas del anime",
    },
    {
        nombre:"Cartas Clow",
        anime:"Sakura Card Captor",
        incluye: "Mazo de cartas como el que usa Sakura durante el anime, incluyendo las 52 cartas, 3 cartas especiales con materiales de calidad y de tamaño semejante a las originales",
        precio: 6500,
        img: "IMG/productos/march_cartasdesakura.webp",
        alt: "mismo mazo de cartas que usa la protagonista en sakura card captor",
    },
    {
        nombre:"Esferas del dragon",
        anime:"Drabon ball",
        incluye: "una caja con las 7 esferas del dragon construidas de cristal a una escala de 4.4",
        precio: 6700,
        img: "IMG/productos/march_cajasdeesferas.webp",
        alt: "caja con esferas amarillas y estrellas rojas con una cantidad de 1 a 7",
    },
    {
        nombre:"Bandanas de aldeas ninja",
        anime:"Naruto / Naruto Shippuden",
        incluye: "Compra y te enviaremos 3 bandanas aleatorias, con tela y una chapa de metal con la representación de cada aldea y algunas tachadas para representar a los akatsuki.",
        precio: 4000,
        img: "IMG/productos/march_bandananaruto.webp",
        alt: "bandanas con los simbolos de las diferentes aldeas de naruto y algunas tachadas",
    }
]


//Figura1
// const $productos = document.querySelector('#producto');
const $foto = document.querySelector('#imagen');


function cargarFigura1() {

    // const $modelodetalle = document.createElement('div');
   
    const imag = document.createElement('img');
    imag.src=(Figuras[0].imagen);
    imag.alt= (Figuras[0].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);



    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (Figuras[0].nombre);
    $detalle.prepend($titulo);



    const $lista = document.createElement('ul');

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (Figuras[0].descripcion);
    $lista.append($descrip);

    const $alto = document.createElement('li');
    $alto.classList.add('card-text');
    $alto.textContent = ('Altura:' + Figuras[0].altura);
    $lista.append($alto);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio:' + Figuras[0].precio);
    $lista.append($precio);

    $titulo.after($lista);


};


function cargarFigura2() {

    const imag = document.createElement('img');
    imag.src=(Figuras[1].imagen);
    imag.alt= (Figuras[1].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);


    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (Figuras[1].nombre);
    $detalle.prepend($titulo);



    const $lista = document.createElement('ul');

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (Figuras[1].descripcion);
    $lista.append($descrip);

    const $alto = document.createElement('li');
    $alto.classList.add('card-text');
    $alto.textContent = ('Altura:' + Figuras[1].altura);
    $lista.append($alto);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio:' + Figuras[1].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarFigura3() {

    const imag = document.createElement('img');
    imag.src=(Figuras[2].imagen);
    imag.alt= (Figuras[2].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);


    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (Figuras[2].nombre);
    $detalle.prepend($titulo);



    const $lista = document.createElement('ul');

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (Figuras[2].descripcion);
    $lista.append($descrip);

    const $alto = document.createElement('li');
    $alto.classList.add('card-text');
    $alto.textContent = ('Altura:' + Figuras[2].altura);
    $lista.append($alto);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio:' + Figuras[2].precio);
    $lista.append($precio);

    $titulo.after($lista);


};


function cargarFigura4() {

    const imag = document.createElement('img');
    imag.src=(Figuras[3].imagen);
    imag.alt= (Figuras[3].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);


    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (Figuras[3].nombre);
    $detalle.prepend($titulo);



    const $lista = document.createElement('ul');

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (Figuras[3].descripcion);
    $lista.append($descrip);

    const $alto = document.createElement('li');
    $alto.classList.add('card-text');
    $alto.textContent = ('Altura:' + Figuras[3].altura);
    $lista.append($alto);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio:' + Figuras[3].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

//MANGAS

function cargarManga1() {

    const imag = document.createElement('img');
    imag.src=(mangas[0].imagen);
    imag.alt= (mangas[0].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);
    
    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (mangas[0].nombre);
    $detalle.prepend($titulo);



    const $lista = document.createElement('ul');

    const $demo = document.createElement('li');
    $demo.classList.add('card-text');
    $demo.textContent = (mangas[0].demografia);
    $lista.append($demo);

    const $estado = document.createElement('li');
    $estado.classList.add('card-text');
    $estado.textContent = ('Estado del manga: ' + mangas[0].estadoDelManga);
    $lista.append($estado);

    const $volumen = document.createElement('li');
    $volumen.classList.add('card-text');
    $volumen.textContent = ('Volúmenes: ' + mangas[0].cantidad);
    $lista.append($volumen);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + mangas[0].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarManga2() {

    const imag = document.createElement('img');
    imag.src=(mangas[1].imagen);
    imag.alt= (mangas[1].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (mangas[1].nombre);
    $detalle.prepend($titulo);



    const $lista = document.createElement('ul');

    const $demo = document.createElement('li');
    $demo.classList.add('card-text');
    $demo.textContent = (mangas[1].demografia);
    $lista.append($demo);

    const $estado = document.createElement('li');
    $estado.classList.add('card-text');
    $estado.textContent = ('Estado del manga: ' + mangas[1].estadoDelManga);
    $lista.append($estado);

    const $volumen = document.createElement('li');
    $volumen.classList.add('card-text');
    $volumen.textContent = ('Volúmenes: ' + mangas[1].cantidad);
    $lista.append($volumen);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + mangas[1].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarManga3() {

    const imag = document.createElement('img');
    imag.src=(mangas[2].imagen);
    imag.alt= (mangas[2].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (mangas[2].nombre);
    $detalle.prepend($titulo);



    const $lista = document.createElement('ul');

    const $demo = document.createElement('li');
    $demo.classList.add('card-text');
    $demo.textContent = (mangas[2].demografia);
    $lista.append($demo);

    const $estado = document.createElement('li');
    $estado.classList.add('card-text');
    $estado.textContent = ('Estado del manga: ' + mangas[2].estadoDelManga);
    $lista.append($estado);

    const $volumen = document.createElement('li');
    $volumen.classList.add('card-text');
    $volumen.textContent = ('Volúmenes: ' + mangas[2].cantidad);
    $lista.append($volumen);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + mangas[2].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarManga4() {

    const imag = document.createElement('img');
    imag.src=(mangas[3].imagen);
    imag.alt= (mangas[3].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (mangas[3].nombre);
    $detalle.prepend($titulo);

    const $lista = document.createElement('ul');

    const $demo = document.createElement('li');
    $demo.classList.add('card-text');
    $demo.textContent = (mangas[3].demografia);
    $lista.append($demo);

    const $estado = document.createElement('li');
    $estado.classList.add('card-text');
    $estado.textContent = ('Estado del manga: ' + mangas[3].estadoDelManga);
    $lista.append($estado);

    const $volumen = document.createElement('li');
    $volumen.classList.add('card-text');
    $volumen.textContent = ('Volúmenes: ' + mangas[3].cantidad);
    $lista.append($volumen);





    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + mangas[3].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

//LLAVEROS
function cargarLlavero1() {

    const imag = document.createElement('img');
    imag.src=(llaveros[0].imagen);
    imag.alt= (llaveros[0].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (llaveros[0].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $orig = document.createElement('li');
    $orig.classList.add('card-text');
    $orig.textContent = ("Origen del estilo:" +llaveros[0].origen);
    $lista.append($orig);

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (llaveros[0].descripcion);
    $lista.append($descrip);

    const $estilo = document.createElement('li');
    $estilo.classList.add('card-text');
    $estilo.textContent = ('Estilos disponibles: ' + llaveros[0].estilo);
    $lista.append($estilo);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = ('Tamaño del llavero: ' + llaveros[0].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + llaveros[0].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarLlavero2() {

    const imag = document.createElement('img');
    imag.src=(llaveros[1].imagen);
    imag.alt= (llaveros[1].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (llaveros[1].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $orig = document.createElement('li');
    $orig.classList.add('card-text');
    $orig.textContent = ("Origen del estilo:" +llaveros[1].origen);
    $lista.append($orig);

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (llaveros[1].descripcion);
    $lista.append($descrip);

    const $estilo = document.createElement('li');
    $estilo.classList.add('card-text');
    $estilo.textContent = ('Estilos disponibles: ' + llaveros[1].estilo);
    $lista.append($estilo);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = ('Tamaño del llavero: ' + llaveros[1].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + llaveros[1].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarLlavero3() {

    const imag = document.createElement('img');
    imag.src=(llaveros[2].imagen);
    imag.alt= (llaveros[2].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (llaveros[2].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $orig = document.createElement('li');
    $orig.classList.add('card-text');
    $orig.textContent = ("Origen del estilo:" +llaveros[2].origen);
    $lista.append($orig);

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (llaveros[2].descripcion);
    $lista.append($descrip);

    const $estilo = document.createElement('li');
    $estilo.classList.add('card-text');
    $estilo.textContent = ('Estilos disponibles: ' + llaveros[2].estilo);
    $lista.append($estilo);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = ('Tamaño del llavero: ' + llaveros[2].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + llaveros[2].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarLlavero4() {

    const imag = document.createElement('img');
    imag.src=(llaveros[3].imagen);
    imag.alt= (llaveros[3].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (llaveros[3].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $orig = document.createElement('li');
    $orig.classList.add('card-text');
    $orig.textContent = ("Origen del estilo:" +llaveros[3].origen);
    $lista.append($orig);

    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (llaveros[3].descripcion);
    $lista.append($descrip);

    const $estilo = document.createElement('li');
    $estilo.classList.add('card-text');
    $estilo.textContent = ('Estilos disponibles: ' + llaveros[3].estilo);
    $lista.append($estilo);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = ('Tamaño del llavero: ' + llaveros[3].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + llaveros[3].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

//COSPLAY
function cargarcosplay1() {

    const imag = document.createElement('img');
    imag.src=(cosplay[0].img);
    imag.alt= (cosplay[0].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (cosplay[0].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (cosplay[0].incluye);
    $lista.append($descrip);



    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + cosplay[0].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarcosplay2() {

    const imag = document.createElement('img');
    imag.src=(cosplay[1].img);
    imag.alt= (cosplay[1].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (cosplay[1].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (cosplay[1].incluye);
    $lista.append($descrip);



    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + cosplay[1].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarcosplay3() {

    const imag = document.createElement('img');
    imag.src=(cosplay[2].img);
    imag.alt= (cosplay[2].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (cosplay[2].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (cosplay[2].incluye);
    $lista.append($descrip);



    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + cosplay[2].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarcosplay4() {

    const imag = document.createElement('img');
    imag.src=(cosplay[3].img);
    imag.alt= (cosplay[3].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (cosplay[0].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (cosplay[3].incluye);
    $lista.append($descrip);



    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + cosplay[3].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

//ACCESORIO
function cargaraccesorio1() {

    const imag = document.createElement('img');
    imag.src=(accesorios[0].img);
    imag.alt= (accesorios[0].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (accesorios[0].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (accesorios[0].incluye);
    $lista.append($descrip);

    const $cant = document.createElement('li');
    $cant.classList.add('card-text');
    $cant.textContent = ('cantidad: ' + accesorios[0].cantidad);
    $lista.append($cant);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + accesorios[0].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargaraccesorio2() {

    const imag = document.createElement('img');
    imag.src=(accesorios[1].img);
    imag.alt= (accesorios[1].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (accesorios[1].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (accesorios[1].incluye);
    $lista.append($descrip);

    const $cant = document.createElement('li');
    $cant.classList.add('card-text');
    $cant.textContent = ('cantidad: ' + accesorios[1].cantidad);
    $lista.append($cant);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + accesorios[1].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargaraccesorio3() {

    const imag = document.createElement('img');
    imag.src=(accesorios[2].img);
    imag.alt= (accesorios[2].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (accesorios[2].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (accesorios[2].incluye);
    $lista.append($descrip);

    const $cant = document.createElement('li');
    $cant.classList.add('card-text');
    $cant.textContent = ('cantidad: ' + accesorios[2].cantidad);
    $lista.append($cant);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + accesorios[2].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargaraccesorio4() {

    const imag = document.createElement('img');
    imag.src=(accesorios[3].img);
    imag.alt= (accesorios[3].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (accesorios[3].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $descrip = document.createElement('li');
    $descrip.classList.add('card-text');
    $descrip.textContent = (accesorios[3].incluye);
    $lista.append($descrip);

    const $cant = document.createElement('li');
    $cant.classList.add('card-text');
    $cant.textContent = ('cantidad: ' + accesorios[3].cantidad);
    $lista.append($cant);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + accesorios[3].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

//PELUCHE
function cargarpeluche1() {

    const imag = document.createElement('img');
    imag.src=(peluches[0].img);
    imag.alt= (peluches[0].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (peluches[0].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $material = document.createElement('li');
    $material.classList.add('card-text');
    $material.textContent = (peluches[0].material);
    $lista.append($material);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = (peluches[0].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + peluches[0].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarpeluche2() {

    const imag = document.createElement('img');
    imag.src=(peluches[1].img);
    imag.alt= (peluches[1].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (peluches[1].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $material = document.createElement('li');
    $material.classList.add('card-text');
    $material.textContent = (peluches[1].material);
    $lista.append($material);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = (peluches[1].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + peluches[1].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarpeluche3() {

    const imag = document.createElement('img');
    imag.src=(peluches[2].img);
    imag.alt= (peluches[2].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (peluches[2].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $material = document.createElement('li');
    $material.classList.add('card-text');
    $material.textContent = (peluches[2].material);
    $lista.append($material);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = (peluches[2].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + peluches[2].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarpeluche4() {

    const imag = document.createElement('img');
    imag.src=(peluches[3].img);
    imag.alt= (peluches[3].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (peluches[3].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    
    const $material = document.createElement('li');
    $material.classList.add('card-text');
    $material.textContent = (peluches[3].material);
    $lista.append($material);

    const $tamaño = document.createElement('li');
    $tamaño.classList.add('card-text');
    $tamaño.textContent = (peluches[3].tamaño);
    $lista.append($tamaño);


    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + peluches[3].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

//MERCH
function cargarmerch1() {

    const imag = document.createElement('img');
    imag.src=(merch[0].img);
    imag.alt= (merch[0].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (merch[0].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $anime = document.createElement ('li');
    $anime.classList.add ('card-text');
    $anime.textContent = ('Anime: ' + merch[0].anime);
    $lista.append($anime);

    const $incluye = document.createElement('li');
    $incluye.classList.add('card-text');
    $incluye.textContent = (merch[0].incluye);
    $lista.append($incluye);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + merch[0].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarmerch2() {

    const imag = document.createElement('img');
    imag.src=(merch[1].img);
    imag.alt= (merch[1].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (merch[1].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $anime = document.createElement ('li');
    $anime.classList.add ('card-text');
    $anime.textContent = ('Anime: ' + merch[1].anime);
    $lista.append($anime);

    const $incluye = document.createElement('li');
    $incluye.classList.add('card-text');
    $incluye.textContent = (merch[1].incluye);
    $lista.append($incluye);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + merch[1].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarmerch3() {

    const imag = document.createElement('img');
    imag.src=(merch[2].img);
    imag.alt= (merch[2].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (merch[2].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $anime = document.createElement ('li');
    $anime.classList.add ('card-text');
    $anime.textContent = ('Anime: ' + merch[2].anime);
    $lista.append($anime);

    const $incluye = document.createElement('li');
    $incluye.classList.add('card-text');
    $incluye.textContent = (merch[2].incluye);
    $lista.append($incluye);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + merch[2].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

function cargarmerch4() {

    const imag = document.createElement('img');
    imag.src=(merch[3].img);
    imag.alt= (merch[3].alt);
    imag.classList.add('img-bordes');
    $foto.prepend(imag);

    const $detalle = document.querySelector('#detalles');
    const $titulo = document.createElement('h3');
    $titulo.classList.add('card-title');
    $titulo.textContent = (merch[3].nombre);
    $detalle.prepend($titulo);


    const $lista = document.createElement('ul');

    const $anime = document.createElement ('li');
    $anime.classList.add ('card-text');
    $anime.textContent = ('Anime: ' + merch[3].anime);
    $lista.append($anime);

    const $incluye = document.createElement('li');
    $incluye.classList.add('card-text');
    $incluye.textContent = (merch[3].incluye);
    $lista.append($incluye);

    const $precio = document.createElement('li');
    $precio.classList.add('card-text');
    $precio.textContent = ('Precio: ' + merch[3].precio);
    $lista.append($precio);

    $titulo.after($lista);


};

//Documento
document.addEventListener("DOMContentLoaded",function activaclick(){
    const recibidio = localStorage.getItem ("cargar");
    
    
        switch (recibidio) {
            case "figNagito":
                cargarFigura1();
                break;
            case "figZoro":
                cargarFigura2();
                
                break;
            case "figVictor":
                cargarFigura3();
                break;
            case "figGojo":
                cargarFigura4();
                break;
            case "manga_bsd":
                cargarManga1();
                break;
            case "manga_assassinationclasstoom":
                cargarManga2();
                break;
            case "manga_kuroshitsuji":
                cargarManga3();
                break;
            case "manga_deathnote":
                cargarManga4();
                break;
            case "llavero_anemo":
                cargarLlavero1();
                break;
            case "llavero_dendro":
                cargarLlavero2();
                break;
            case "llavero_geo":
                cargarLlavero3();
                break;
            case "llavero_pyro":
                cargarLlavero4();
                break;
            case "grell":
                cargarcosplay1();
                break;
            case "sasuke":
                cargarcosplay2();
                break;
            case "tanjiro":
                cargarcosplay3();
                break;
            case "yor":
                cargarcosplay4();
                break;
            case "accesorio_akatsuki":
                cargaraccesorio1();
                break;
            case "accesorio_fairytail":
                cargaraccesorio2();
                break;
            case "accesorio_nana":
                cargaraccesorio3();
                break;
            case "accesorio_ace":
                cargaraccesorio4();
                break;
            case "Dazai":
                cargarpeluche1();
                break;
            case "Bakugou":
                cargarpeluche2();
                break;
            case "ciel":
                cargarpeluche3();
                break;
            case "tony":
                cargarpeluche4();
                break;
            case "march_cartasyugioh":
                cargarmerch1();

                break;
            case "march_cartasdesakura":
                cargarmerch2();
                break;
            case "esferas":
                cargarmerch3();
                break;
            case "bandanas":
                cargarmerch4();
                break;

        };
    
    
        localStorage.removeItem("cargar");
        
        
})