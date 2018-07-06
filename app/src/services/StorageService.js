import React, {Component} from 'react';
const axios = require('axios');

class StorageService {
    articles = [];
    async getData() {
        this.articles = [];
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://www.up.edu.ph/index.php/feed/')
            .then( (response) => {
                let feed = response.data;
                this.articles = feed.items;
            })
            .catch((err)=>{
                console.log(err);
            });
        console.log(this.articles);
    }
}

export default StorageService;
