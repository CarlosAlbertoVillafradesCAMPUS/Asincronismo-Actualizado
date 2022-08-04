const cows = 12;

const countCows = new Promise(function (resolve, reject){
    if (cows > 10) {
        resolve(`we have ${cows} cows on the farm`);
    }
    else{
        reject(`Error, we not have the cows`)
    }
});
countCows.then((result) =>{
    console.log(result)
}).catch((error) =>{
    console.log(error)
}).finally(() =>{
    console.log('Finally')
})
//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa

const number = 10;

const countNumber = new Promise(function (resolve, reject){
    if (number > 10) {
        resolve('yesss, the number is > to 10')
    }
    else{
        reject('Nooo, the numer is < to 10')
    }
});

countNumber.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {console.log('Finally')})