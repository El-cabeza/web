// //map

// const products = [
//   { name: 'camisa', price: 10.99, category: 'roupas' },
//   { name: 'Chaleira eletrica', price: 49.99, category: 'eletro' },
//   { name: 'fogao', price: 400, category: 'eletro' },
//   { name: 'calça', price: 50.99, category: 'roupas' },
// ]

// //adicionando item no fim do array
// products.push({ name: 'cama', price: 4550.99, category: 'moveis' },)
// //adicionando item no inicio do array
// products.unshift({ name: 'armario', price: 1250.99, category: 'moveis' },)

// products.map((product) => {
//   if (product.name === 'fogao') {
//     product.name = 'liquidificador'
//     product.price = 79.99
//   }
//   if (product.name === 'Chaleira eletrica') {
//     product.name = 'panela'
//     product.category = 'cozinha'
//     product.price = 125.79
//   }
//   if (product.category === 'moveis') {
//     product.name = 'sofá'
//     product.price = 2399.99
//   }
// })

// console.log(products)

// Numeros aleatórios
let list = [];
let randomNumber;
let temp;
const maxNumbers = 10;

for (let i = 0; i < maxNumbers; i++) {
  list[i] = i + 1;
}

for (let i = list.length; i;) {
  randomNumber = Math.random() * i-- | 0;
  temp = list[randomNumber];
  list[randomNumber] = list[i];
  list[i] = temp;
}
console.log(list);