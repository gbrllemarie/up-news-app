import React from 'react';

const axios = require('axios');
class StorageService {
    news = [];
    announcements = [];
    breakthroughs = [];
    profiles = [];
    async getData(category) {
        this[category] = [];
        await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://up.edu.ph/index.php/category/${category}/feed/`)
            .then( (response) => {
                let feed = response.data;
                this[category] = feed.items;
            })
            .catch((err)=>{
                console.log(err);
        });
    }

}

export default StorageService;
