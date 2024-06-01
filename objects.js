// examples


// let person={ firstName:'Ibrahim',secondName:'Ali',age:22}
// // const key =object.keys(person)
// // console.log(keys)
// const entries = object.entries(person)
// console.log(entries)

//            its used for objects
// let i;
// for (let i =0; i<=20; i++){
//     if( i% 2== 0){
//         continue
//     }
//     console.log(i)
// }

// Objects are collections of key-value pairs.

let person = {
    firstName: "ubax",
    lastName: "abdi",
    age: "30",
    isEmployed: true,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.firstName); 
console.log(person.fullName()); 
console.log(person.age);
console.log( person.isEmployed)
