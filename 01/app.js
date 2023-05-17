const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if(randomNumber > 5) {
    for(let i=5; i<= randomNumber; i++) { 
        // aby wyświetlić w konsoli wszystkie liczby od 5 do wylosowanej wartości
        console.log(i);
}
    } else if(randomNumber === 10) {
        console.log('5,6,7,8,9,10');
    } else {
        console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
    }
        