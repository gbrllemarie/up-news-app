import React from 'react';

const axios = require('axios');
class StorageService {
    news = [];
    announcements = [];
    breakthroughs = [];
    profiles = [];
    async getNews() {
        this.news = [];
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://up.edu.ph/index.php/category/news/feed/')
            .then( (response) => {
                let feed = response.data;
                this.news = feed.items;
            })
            .catch((err)=>{
                console.log(err);
        });
        console.log(this.news);
    }
    async getAnnouncements() {
        this.announcements = [];
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://up.edu.ph/index.php/category/announcements/feed/')
            .then( (response) => {
                let feed = response.data;
                this.announcements = feed.items;
            })
            .catch((err)=>{
                console.log(err);
        });
        console.log(this.announcements);
    }
    async getBreakthroughs() {
        this.breakthroughs = [];
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://up.edu.ph/index.php/category/breakthroughs/feed/')
            .then( (response) => {
                let feed = response.data;
                this.breakthroughs = feed.items;
            })
            .catch((err)=>{
                console.log(err);
        });
        console.log(this.breakthroughs);
    }
    async getProfiles() {
        this.profiles = [];
        await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://up.edu.ph/index.php/category/profiles/feed/')
            .then( (response) => {
                let feed = response.data;
                this.profiles = feed.items;
            })
            .catch((err)=>{
                console.log(err);
        });
        console.log(this.profiles);
    }
}

export default StorageService;
