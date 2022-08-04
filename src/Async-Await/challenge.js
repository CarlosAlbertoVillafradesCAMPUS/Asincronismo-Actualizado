import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
const fetchData = async (urlApi) => { //el llamado a nuestra api con fetch
    const response = await fetch(urlApi);
    const data = await response.json(); //transformar nuestro llamado en un objeto json
    return data;
}

const anotherFunction = async (urlApi) =>{
    /*asi es que se hacen las peticiones a una api, no estan necesario hacer tantos llamados, solo nos necesarios
    o hasta con un solo llamado se puede llegar a toda la informacion de una api*/
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        //mostrando informacion con los tres llamados
        console.log(products);
        console.log(product.title);
        console.log(category.name);

        //mostrando informacion solo con el primer llamado
        /*console.log(products);
        console.log(products[0].title);
        console.log(products[0].category.name);*/

    } catch (error){
        console.error(error)
    }
};

anotherFunction(API);