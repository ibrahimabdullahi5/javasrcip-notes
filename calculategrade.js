function calculategrade(marks){
    if (marks > 79){
        return 'A'
    }else if (marks >= 60 && marks <=79){
        return 'B'
    }else if (marks >= 49 && marks <=59){
        return 'C'
    }else if (marks >=40 && marks <=49){
        return 'D';
    }else if (marks <40){
        return 'E';
    }
}
// // console.log(calculategrade(20))

// const studentmarks = prompt('Enter student marks(between 0 and 100):');
// if (!isNaN(studentmarks)&& studentmarks <=100 && studentmarks >=0){
// const grade =calculategrade(studentmarks)
// console.log(grade)

// }else {
//     console.log('invalid input,please input a number between 0 and 100')
// }

let grade;
switch(true){
    case marks >=79:
    grde='B'
    break;
    case marks >=60:
    grde='C'
    break;
    case marks >=50:
    grde='D'
    break;
    case marks >=50:
    grde='D'
    break;
    default:
        grade='E'
}
console.log(grade)
