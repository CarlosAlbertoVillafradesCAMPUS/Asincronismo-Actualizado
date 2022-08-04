const funtAsync = () => { //creamos una promesa
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('yesss, Async complete'), 3000)
        : reject(new Error('Errorrr!!!!'))
    })
};

/*creamor una function asincronica, que hace que la ejecucion del codigo no se trabe si no que mientras espera la
ejecucion de alguna parte del codigo, se va ejecutando lo siguiente de manera asincronica*/
const anotherFunc = async () => { 
    const something = await funtAsync();
    console.log(something);
    console.log('holaaaaa');
}

console.log('before');
anotherFunc();
console.log('After');