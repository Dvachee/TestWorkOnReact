import Axios from 'axios';



const instansAxios = Axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    } 
  })

export const shopApi = {
    getItems() {
        return instansAxios.get(`items`)
        .then(response => response.data)
    },
    like(itemId) {
        return instansAxios.patch(`items/${itemId}`, {
            "favorite": true
        })
        .then(response => response.data)
    },
    dislike(itemId) {
        return instansAxios.patch(`items/${itemId}`, {
            "favorite": false
        })
        .then(response => response.data)
    }

}


