import React, { Component } from 'react';
const axios = require('axios');

class StorageService extends Component {
    getData() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://www.up.edu.ph/index.php/feed/')
            .then( (response) => {
              console.log(response.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

}

export default new StorageService();