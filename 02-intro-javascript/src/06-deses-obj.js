const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

// const { name, age, key } = person;

// console.log(name, age, key);

const userContext = ({key, age}) => {
//    console.log(name,age);

    return {
        keyName: key,
        anios: age,
        latlng: {
            lat: 14.1232,
            lng: 12.3232,
        }

    }
}

const { keyName, anios, latlng } = userContext( person );

const { lat, lng } = latlng

console.log( keyName, anios );
console.log( lat, lng );
