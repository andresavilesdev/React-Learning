import { getHeroById } from "./08-imp-exp";

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         // Task

//         const hero1 = getHeroById(2);
//         resolve(hero1);
//         reject("Error al cargar el heroe");
//     },2000)
// });

// promise.then( (hero) =>{
//     console.log("Then promise", hero);
// })
// .catch( err => console.warn(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Task

      const hero1 = getHeroById(id);
      if (hero1){
        resolve(hero1);
      }else
        reject("Error al cargar el heroe");
    }, 2000);
  });
};

getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn );