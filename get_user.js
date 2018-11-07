const API_USER = "https://jsonplaceholder.typicode.com/users/"

function userUrl(userId) {
  return `${API_USER}${userId}`
  /* 
  https://jsonplaceholder.typicode.com/users/2
 {
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
  "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
      "lat": "-43.9509",
      "lng": "-34.4618"
    }
  },
  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
  }
 }
  */
}

function fetchUser(userId) {
  return fetch(userUrl(userId))
    .then(response => response.json())
    .then(responseJSON => {
      return {
        name: responseJSON.name,
        company: responseJSON.company.name
      };
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchUser: fetchUser }
