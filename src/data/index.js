export const categories = [
    {id: 0, name: "Todas las categorías"},
    {id: 1, name: "Filosofía"},
    {id: 2, name: "Literatura"},
    {id: 3, name: "Teología"}
]; 

function getCard(){
    return {
        title: 'El paradigma de hombre cristiano para Soren Kierkegaard',
        date: '08 de octubre de 2023',
        summary: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.',
        views: 12,
        likes: 8,
    };
}

export const posts = [
    getCard(),
    getCard(),
    getCard(),
    getCard(),
    getCard(),
    getCard(),
    getCard(),
    getCard(),
    getCard(),
    getCard(),
    getCard(),
];