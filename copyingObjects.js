// Copying objects is just a simple thing but I was doing it wrong

const obj = { id: 1 }

const obj1 = obj
const obj2 = obj
const obj3 = obj

// If anyone of the objects out of obj1, obj2, obj3 is changed,
// the change will spread throughout the world :)
// obj1 changes obj too, so obj2, obj3 become the same as obj1, obj

// It is simple but I didn't notice
// So, the solution is to use spread operator

const obj4 = { ...obj }
