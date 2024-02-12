const productos = [
    {id: "1001", titulo: "SPELL MY NAME", autor: "TONI BRAXTON", genero: "JAZZ", tipo: "VINILO", idioma: "INGLES", stock: 4, precio: 145000, img: "../img/SPELL MY NAME.GIF"},
    {id: "1002", titulo: "SHINE A LIGHT", autor: "BRYAN ADAMS", genero: "POP", tipo: "VINILO", idioma: "INGLES", stock: 6, precio: 145000, img: "../img/SHINE A LIGHT.GIF"},
    {id: "1003", titulo: "PLASTIC HEARTS", autor: "MILEY CYRUS", genero: "POP", tipo: "VINILO", idioma: "INGLES", stock: 2, precio: 299000, img: "../img/PLASTIC HEARTS.GIF"},
    {id: "1004", titulo: "BRIDGES TO BREMEN", autor: "THE ROLLING STONES", genero: "ROCK", tipo: "CD", idioma: "INGLES", stock: 4, precio: 375000, img: "../img/BRIDGES TO BREMEN.GIF"},
    {id: "1005", titulo: "BLACK RAIN", autor: "OZZY OSBOURNE", genero: "ROCK", tipo: "VINILO", idioma: "INGLES", stock: 9, precio: 299000, img: "../img/BLACK RAIN.GIF"},
    {id: "1006", titulo: "THE BRIDGE", autor: "STING", genero: "ROCK", tipo: "CD", idioma: "INGLES", stock: 9, precio: 195000, img: "../img/THE BRIDGE.GIF"},
    {id: "1007", titulo: "REBEL HEART TOUR", autor: "MADONNA", genero: "POP", tipo: "CD", idioma: "INGLES", stock: 6, precio: 295000, img: "../img/REBEL HEART TOUR.GIF"},
    {id: "1008", titulo: "LICKED LIVE IN NYC", autor: "THE ROLLING STONES", genero: "ROCK", tipo: "VINILO", idioma: "INGLES", stock: 7, precio: 575000, img: "../img/LICKED LIVE IN NYC.GIF"},
    {id: "1009", titulo: "LATIDO INFINITO", autor: "EROS RAMAZZOTTI", genero: "POP", tipo: "VINILO", idioma: "ESPAÑOL", stock: 4, precio: 189000, img: "../img/LATIDO INFINITO.GIF"},
    {id: "1010", titulo: "LOUIS WISHES YOU A COOL YULE", autor: "LOUIS ARMSTRONG", genero: "JAZZ", tipo: "VINILO", idioma: "INGLES", stock: 6, precio: 169000, img: "../img/LOUIS WISHES YOU A COOL YULE.GIF"},
    {id: "1011", titulo: "JACKSON 5 CHRISTMAS ALBUM", autor: "JACKSON 5IVE", genero: "JAZZ", tipo: "VINILO", idioma: "INGLES", stock: 7, precio: 169000, img: "../img/JACKSON 5 CHRISTMAS ALBUM.GIF"},
    {id: "1012", titulo: "SE MORIR", autor: "ANDRES CEPEDA", genero: "POP", tipo: "CD", idioma: "ESPAÑOL", stock: 5, precio: 155000, img: "../img/SE MORIR.GIF"},
    {id: "1013", titulo: "GRRR LIVE!", autor: "THE ROLLING STONES", genero: "ROCK", tipo: "VINILO", idioma: "INGLES", stock: 4, precio: 475000, img: "../img/GRRR LIVE.GIF"},
    {id: "1014", titulo: "CALLE 13", autor: "CALLE 13", genero: "POP", tipo: "CD", idioma: "ESPAÑOL", stock: 3, precio: 130000, img: "../img/CALLE 13.GIF"},
    {id: "1015", titulo: "KRAKEN II", autor: "KRAKEN", genero: "ROCK EN ESPAÑOL", tipo: "VINILO", idioma: "ESPAÑOL", stock: 8, precio: 139000, img: "../img/KRAKEN II.GIF"},
    {id: "1016", titulo: "LA PACHANGA", autor: "VILMA PALMA E VAMPIROS", genero: "ROCK EN ESPAÑOL", tipo: "VINILO", idioma: "ESPAÑOL", stock: 5, precio: 185000, img: "../img/VILMA PALMA E VAMPIROS.GIF"},
    {id: "1017", titulo: "HONESTIDAD BRUTAL", autor: "ANDRES CALAMARO", genero: "ROCK EN ESPAÑOL", tipo: "CD", idioma: "ESPAÑOL", stock: 4, precio: 465000, img: "../img/HONESTIDAD BRUTAL.GIF"},
    {id: "1018", titulo: "DYNAMO", autor: "SODA STEREO", genero: "ROCK EN ESPAÑOL", tipo: "VINILO", idioma: "ESPAÑOL", stock: 5, precio: 315000, img: "../img/DYNAMO.GIF"},
    {id: "1019", titulo: "COLORES SANTOS", autor: "GUSTAVO CERATI", genero: "ROCK EN ESPAÑOL", tipo: "VINILO", idioma: "ESPAÑOL", stock: 7, precio: 185000, img: "../img/COLORES SANTOS.GIF"},
    {id: "1020", titulo: "NADA PERSONAL", autor: "SODA STEREO", genero: "ROCK EN ESPAÑOL", tipo: "CD", idioma: "ESPAÑOL", stock: 6, precio: 315000, img: "../img/NADA PERSONAL.GIF"},
    {id: "1021", titulo: "3980", autor: "VILMA PALMA E VAMPIROS", genero: "ROCK EN ESPAÑOL", tipo: "CD", idioma: "ESPAÑOL", stock: 4, precio: 185000, img: "../img/3980.GIF"},
]
// géneros: JAZZ, POP, ROCK, ROCK  EN ESPAÑOL
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(pdt => pdt.id === id);
            resolve(producto);
        }, 200)
    })
}

export const getProductoCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.filter(pdt => pdt.genero === idCategoria);
            resolve(producto);
        }, 200)
    })
}

// INFORMACION CON LOS GENEROS COMO CORRESPONDEN
// const productos = [
//     {id: 1001, titulo: "SPELL MY NAME", autor: "TONI BRAXTON", genero: "JAZZ", tipo: "VINILO", idioma: "INGLES", stock: 4, precio: 145000, img: "./img/SPELL MY NAME.GIF"},
//     {id: 1002, titulo: "SHINE A LIGHT", autor: "BRYAN ADAMS", genero: "POP", tipo: "VINILO", idioma: "INGLES", stock: 6, precio: 145000, img: "./img/SHINE A LIGHT.GIF"},
//     {id: 1003, titulo: "PLASTIC HEARTS", autor: "MILEY CYRUS", genero: "POP", tipo: "VINILO", idioma: "INGLES", stock: 2, precio: 299000, img: "./img/PLASTIC HEARTS.GIF"},
//     {id: 1004, titulo: "BRIDGES TO BREMEN", autor: "THE ROLLING STONES", genero: "ROCK", tipo: "CD", idioma: "INGLES", stock: 4, precio: 375000, img: "./img/BRIDGES TO BREMEN.GIF"},
//     {id: 1005, titulo: "BLACK RAIN", autor: "OZZY OSBOURNE", genero: "HEAVY", tipo: "VINILO", idioma: "INGLES", stock: 9, precio: 299000, img: "./img/BLACK RAIN.GIF"},
//     {id: 1006, titulo: "THE BRIDGE", autor: "STING", genero: "ROCK", tipo: "CD", idioma: "INGLES", stock: 9, precio: 195000, img: "./img/THE BRIDGE.GIF"},
//     {id: 1007, titulo: "REBEL HEART TOUR", autor: "MADONNA", genero: "POP", tipo: "CD", idioma: "INGLES", stock: 6, precio: 295000, img: "./img/REBEL HEART TOUR.GIF"},
//     {id: 1008, titulo: "LICKED LIVE IN NYC", autor: "THE ROLLING STONES", genero: "ROCK", tipo: "VINILO", idioma: "INGLES", stock: 7, precio: 575000, img: "./img/LICKED LIVE IN NYC.GIF"},
//     {id: 1009, titulo: "LATIDO INFINITO", autor: "EROS RAMAZZOTTI", genero: "LATIN POP", tipo: "VINILO", idioma: "ESPAÑOL", stock: 4, precio: 189000, img: "./img/LATIDO INFINITO.GIF"},
//     {id: 1010, titulo: "LOUIS WISHES YOU A COOL YULE", autor: "LOUIS ARMSTRONG", genero: "JAZZ", tipo: "VINILO", idioma: "INGLES", stock: 6, precio: 169000, img: "./img/LOUIS WISHES YOU A COOL YULE.GIF"},
//     {id: 1011, titulo: "JACKSON 5 CHRISTMAS ALBUM", autor: "JACKSON 5IVE", genero: "SOUL", tipo: "VINILO", idioma: "INGLES", stock: 7, precio: 169000, img: "./img/JACKSON 5 CHRISTMAS ALBUM.GIF"},
//     {id: 1012, titulo: "SE MORIR", autor: "ANDRES CEPEDA", genero: "LATIN POP", tipo: "CD", idioma: "ESPAÑOL", stock: 5, precio: 155000, img: "./img/SE MORIR.GIF"},
//     {id: 1013, titulo: "GRRR LIVE!", autor: "THE ROLLING STONES", genero: "ROCK", tipo: "VINILO", idioma: "INGLES", stock: 4, precio: 475000, img: "./img/GRRR LIVE.GIF"},
//     {id: 1014, titulo: "CALLE 13", autor: "CALLE 13", genero: "ROCK EN ESPAÑOL", tipo: "CD", idioma: "ESPAÑOL", stock: 3, precio: 130000, img: "./img/CALLE 13.GIF"},
//     {id: 1015, titulo: "KRAKEN II", autor: "KRAKEN", genero: "HEAVY", tipo: "VINILO", idioma: "ESPAÑOL", stock: 8, precio: 139000, img: "./img/KRAKEN II.GIF"},
//     {id: 1016, titulo: "LA PACHANGA", autor: "VILMA PALMA E VAMPIROS", genero: "ROCK EN ESPAÑOL", tipo: "VINILO", idioma: "ESPAÑOL", stock: 5, precio: 185000, img: "./img/VILMA PALMA E VAMPIROS.GIF"},
//     {id: 1017, titulo: "HONESTIDAD BRUTAL", autor: "ANDRES CALAMARO", genero: "ROCK EN ESPAÑOL", tipo: "CD", idioma: "ESPAÑOL", stock: 4, precio: 465000, img: "./img/HONESTIDAD BRUTAL.GIF"},
//     {id: 1018, titulo: "DYNAMO", autor: "SODA STEREO", genero: "ROCK EN ESPAÑOL", tipo: "VINILO", idioma: "ESPAÑOL", stock: 5, precio: 315000, img: "./img/DYNAMO.GIF"},
//     {id: 1019, titulo: "COLORES SANTOS", autor: "GUSTAVO CERATI", genero: "ROCK EN ESPAÑOL", tipo: "VINILO", idioma: "ESPAÑOL", stock: 7, precio: 185000, img: "./img/COLORES SANTOS.GIF"},
//     {id: 1020, titulo: "NADA PERSONAL", autor: "SODA STEREO", genero: "ROCK EN ESPAÑOL", tipo: "CD", idioma: "ESPAÑOL", stock: 6, precio: 315000, img: "./img/NADA PERSONAL.GIF"},
// ]