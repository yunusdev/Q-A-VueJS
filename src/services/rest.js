import Vue from 'vue'
import Axios from 'axios'

export default {

    const headers = {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE'",
        "Access-Control-Allow-Headers": "X-Requested-With,content-type",
        "Access-Control-Allow-Credentials": 'true',
        "Content-Type": "application/json",
    },

    getHeaders(){

        const token = localStorage.getItem('token');
        return token ? new HttpHeaders().set('Authorization', 'Bearer ' + token) : null;
    },

    get(link) {

        Axios.get(link, {headers: this.getHeaders()}).toPromise();
    }

}
