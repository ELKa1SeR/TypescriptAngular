//lo comentado es por que lo hemos desestructurado

export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia",
    price: 150.0
}


const tablet: Product = {
    description: "Ipad",
    price: 250.0
}

export interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

// function taxCalculation( options: TaxCalculationOptions): number[]{
//     let total= 0;

//     options.products.forEach(product =>{
//         total += product.price;
//     });

//     return[total, total * options.tax]

// }

 //function taxCalculation( options: TaxCalculationOptions): [number, number]{
 //function taxCalculation({tax,products}: TaxCalculationOptions): [number, number]{
export function taxCalculation(options: TaxCalculationOptions): [number, number]{

    const{ tax, products}= options;

    let total= 0;

     products.forEach(({price}) =>{
        total += price;
     });

   return[total, total * tax]

    }


const shoppingCart= [phone,tablet];
const tax = 0.15;

// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// })
//aplicamos la destructuracion de la constante
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})


//console.log('Total', result[0]);
console.log('Total',total);
console.log('Total', taxTotal);










