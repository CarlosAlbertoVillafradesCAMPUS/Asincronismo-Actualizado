const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

//funcion principal para obtener informacion
function fetchData(urlAPI, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText)) //el metodo JSON.parse tranformará este texto en un objeto.
            }
            else{
                const error = new Error('error' + urlAPI);
                callback(error, null)
            }
        }
    }
    xhttp.send()  
    /*xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
    xmlhttp.readyState → Retorna el estado de la petición.
    xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
    xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
    xmlhttp.send() → Envía la petición.*/ 
}

/*se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products'
 para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros
  (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).*/ 
fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    /*se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1,
     se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1
      y nuevamente una función anónima.*/
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if (error2) return console.error(error2);
        /*Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, 
        se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del
         objeto data2 de la función anterior*/ 
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})