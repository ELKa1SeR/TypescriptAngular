import{Product, taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 150
    },
    {
        description: 'ipad',
        price:200
    }
];



const[total,tax]= taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log("Total", total);
console.log("Tax", tax)