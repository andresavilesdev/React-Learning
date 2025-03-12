// const personajes = ['Goku', 'Vegeta', 'Trunks'];

// const [ , , p3 ] = personajes

// console.log(p3); 


// const returnArray = () => {
//     return ['ABC',123];
// }

// const [,a] = returnArray();

// console.log(a);


// Task
const erdaa = ( valor ) => {
    return [valor, ()=>{console.log("Hello World")} ]
}

const erda = erdaa("value-example");

const [name] = erda;
const [, setName ] = erda;

console.log(name)
setName();
