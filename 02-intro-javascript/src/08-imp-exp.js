import  heroes, { owners } from "./data/heros";

// console.log(owners)

export const getHeroById = (id) => heroes.find((hero) => hero.id === id)

// console.log(getHeroById(1))

const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner)

// console.log(getHeroByOwner('DC'))
