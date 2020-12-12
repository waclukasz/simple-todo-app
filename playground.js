// -- Variable declaration --
// var;
// let;
// const;

const stringVariable = 'Some value';
const numberVariable = 100;

console.log(numberVariable)

// stringVariable = 'Another value'; => cannot assign another value to constant

let color = 'red';
console.log(color);


color = 'blue';
console.log(color);

color = false;
console.log(color);

if (1 === 1) {
  const scopedVariable = 'I exist only in this scope'
  console.log(scopedVariable)
}

// console.log(scopedVariable)

if (2 === 2) {
  var globalVariable = 'I exist somwhere else'
}

console.log(globalVariable);

const addFuntion = () => {
  const a = 1;
  const b = 2;

  const getResult = () => {
    const result = a + b;
    console.log(result);
  }

  // console.log(result) not declared

  getResult()
}

addFuntion()

const size = 'big';
const action = new String('run');

console.log(typeof size);
console.log(action);

console.log(size.toLocaleUpperCase());

// const cat = new Object({})

const cat = {
  name: 'Filemon',
  age: '28',
  miau: () => {
    console.log('miau')
  },
  sister: {
    name: 'Diana'
  }
}

console.log(cat.age);

console.log(cat.color) // undefined

console.log(cat.sister.name);
console.log(cat.miau);

// const pets = new Array([])

const pets = [cat, cat.sister];

console.log(typeof pets);
console.log(pets[1]);

pets.forEach((pet, index) => {
  console.log(`Loop element ${index}`, pet);
});

const someArray = [5, '3', ['some text']];

console.log(someArray[2][0])

const filteredArray = someArray.filter((item) => {
  return typeof item === 'number'
})

console.log(filteredArray);