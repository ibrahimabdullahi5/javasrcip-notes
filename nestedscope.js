
// function outside() {
//     const x = 5;
//     function inside(x) {
//       return x * 2;
//     }
//     return inside;
//   }
  
//   console.log(outside()(10)); 

//   exapmles 
  function outside() {
    let y = 10;
    function inside (y) {
        return y * 3;
    }
    return inside;
  }
  console.log(outside()(15)); 