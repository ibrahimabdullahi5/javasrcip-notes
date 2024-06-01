
//  Example of declaring array

//  let student1 ="ibrahim"
// let student2 ="hussein"
// let student =["ibrahi","hussein","mohamed","rukia"]
// console.log(student);
// console.log(student[2])
// console.log(student.length)
// console.log(student[0])


//     Example of interating arrary

// let student =["ibrahim","hussein","mohamed","rukia"]
// let i=0;
// while(i<student.length){
//     console.log(student[i])
//     i++
// }

//  let data =["red0","green1","yellow2","blue3",]
//  console.log(data);
//  console.log(data[3])
//  console.log(data.length)
    
// let data =["red0","green1","yellow2","blue3",]
// let i = 0;
// while(i<data.length){
//     console.log(data[i])
//     i++
// }
//   examples
//   let Town =["zuza","horizan","malindo","wifi",]
//   console.log(Town);
//   console.log(Town.length);
//   console.log(Town[3])

  // let Town =["zuza","horizan","malindo","wifi",]
  // let i = 0;
  // while(i<Town.length){
  //   console.log(Town[i])
    // i++
  
  // let data =["red0","green1","yellow2","blue3",]
  // data.push ("yellow5")
  // data.unshift("red7")
  // data.pop()
  // data.shift()
  // console.log(data)

  // let copy=["red00","ibrahim",...data,"ibrahim"];
  // copy.push("school")
  // console.log(copy)

  // // method of slice
  // console,log(copy.slice(3,7))


  // examples of arrays
  // let town =["wajir","mandera","garissa","kisi",]
  // console.log(town)
  // console.log(town.length)
  // console.log(town[3]);

  // let town =["wajir","mandera","garissa","kisi",]
  // let i = 0;
  // while(i<town.length){
  //   console.log(town)
  //   i++
  // }

  // let data =["red0","green1","yellow2","blue3",];
  // data.push("green7");
  // data.unshift("pink");
  // data.pop("green7")
  // data.shift("yellow2")
  // console.log(data);

  // // examles copy
  // let copy=["red00","ibrahim",...data,"abdi"];
  // copy.push("school")
  // copy.unshift("mohamed")
  // copy.pop("yellow8")
  // copy.unshift("pai2")
  // console.log(copy);
  
  // let copy=[...data];
  // copy.push("warsame");
  // copy.unshift("green1")
  // copy.pop("red6")
  // copy.shift("warsame")
  // console.log(copy)
  // console.log(copy.slice(5,9));

  // examles of slice
  let phone = "07270049987";
let firstthree = phone.slice(0,3);
let lasttwo = phone.slice(8);
let messsage = `${firstthree} ***** ${lasttwo}`;
console.log(messsage.slice(5,7))