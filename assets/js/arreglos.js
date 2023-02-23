let arrCosas = [
    true,
    1234,
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    'Enzo',
    ['X', 'Megaman', 'Zero', 'Dr. Light']
];

// console.log(arrCosas);
// console.log(arrCosas[7][3]);

let arr = ['X', 'Megaman', 'Zero', 'Dr. Light'];
console.log(arr);

console.log('1) Agregar al final "Metroid Prime"');
arr.push('Metroid Prime');
console.log(arr);

console.log('2) Agregar al inicio "The Legend of Zelda"');
arr.unshift('The Legend of Zelda');
console.log(arr);

console.log('3) Remover "Zero" del array');
let indexToRemove = arr.indexOf('Zero');
if(indexToRemove > -1) {
    arr.splice(indexToRemove,1);
}
console.log(arr);