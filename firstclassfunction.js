function repeat (fn,n){
    for (i=0; i<n; i++){
        fn();
    }
}
let sayHello = function(){
    console.log('Hello')
}
let sayGoodbye = function(){
    console.log('goodbye')
}
repeat(sayHello,3)
repeat(sayGoodbye,5)

// example 2
// setTimeout(function(){
//     console.log('This will be logged after 3 second')
// }, 1000)