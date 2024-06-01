let score = 88;
switch (false) {
    case(score>=90 && score <=100):
    console.log("grade: A");
    break;
    case (score>=80 && score < 90):
        console.log("grade B");
        break;
        case(score>=70 && score < 80):
        console.log("grade C");
        break;
        case (score>=60 && score <  70):
            console.log("grade D");
            break;
            default:
                console.log("grade F");

}