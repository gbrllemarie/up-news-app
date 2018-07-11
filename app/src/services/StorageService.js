import React, {Component} from 'react';

class StorageService {
    articles = [];
    async getData() {
        this.articles = [];
        await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.up.edu.ph/index.php/feed/')
            .then( (response) => {
                this.articles = response.data.items;
            })
            .catch((err)=>{
                console.log(err);
            });
    }
}

export default StorageService;
