import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function PostData(urlAPI, data) { //los dos parametros significan a la API y a la data que le vamos ahacer post
    const response = fetch(urlAPI, {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response;
};

const data = {
    "title": "My New Product 'Villafrades'",
    "price": 9999999,
    "description": "My Excelent Product",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  };

  PostData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('Finally'));