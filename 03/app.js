const x = 10;
let iteration = 0;
let randomNumber = -1;


while(randomNumber !== x){
    randomNumber = Math.round(Math.random() * 10);
    iteration++;

    // console.log(randomNumber, iteration);
    // to check if we really draw lots in a range to 10
}

console.log(iteration);