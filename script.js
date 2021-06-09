const me = {
  name: 'Mateusz', // string - primitive type
  lastname: 'Choma', // string - primitive type
  car: { // object - NOT a primitive type - passed by reference
    brand: 'Opel',
    fuel: 'ON'
  },
  favoriteColors: ['green'] // array - NOT a primitive type - passed by reference
}

console.log('me', me)

// this is not a real copy - only passing a reference
const copy1 = me

console.log('copy1', copy1)


// spread operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
console.time()
const copy2 = {
  ...me
}
console.timeEnd()

console.log('copy2', copy2)

// this example below does the same as example with spread
console.time()
const copy3 = Object.assign({}, me)
console.timeEnd()

console.log('copy3', copy3)

// only a shallow copy
console.log(me.car === copy1.car)
console.log(me.car === copy2.car)
console.log(me.car === copy3.car)
console.log(me.favoriteColors === copy1.favoriteColors)
console.log(me.favoriteColors === copy2.favoriteColors)
console.log(me.favoriteColors === copy3.favoriteColors)

console.time()
const copy4 = JSON.parse(JSON.stringify(me))
console.timeEnd()

console.log('copy4', copy4)

// deep copy
console.log(me.car === copy4.car)
console.log(me.favoriteColors === copy4.favoriteColors)