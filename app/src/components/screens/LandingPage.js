import React, { Component } from 'react';
import {View,Text} from 'react-native';
import StorageService from '../../services/StorageService.js';

class LandingPage extends Component {

    constructor() {
        super();
        this.storage = new StorageService();
    }

    componentDidMount() {
        this.storage.getData();
    }
    render() {
     //   var articlesItem = this.storage.articles.map((article)=> {
       //     return( <Text>{article.title}</Text>);
       // }); this is for printing titles
       
        return(
            <View>
                <Text>TEST</Text>
                
            </View>
           
        );
    }
}

export default LandingPage;