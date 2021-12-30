const PRODUCTS = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/200/300/?random',
        description: 'Product 1 description',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/200/300/?random',
        description: 'lore ipsum lorema',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/200/300/?random',
        description: 'Product 3 description',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 400,
        image: 'https://picsum.photos/200/300/?random',
        description: 'Product 4 description',
    },
];

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id: any){
    return PRODUCTS.find(product => product.id === id);
}