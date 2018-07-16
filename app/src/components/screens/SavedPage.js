import React, { Component } from 'react';
import {View,Text} from 'react-native';
import StorageService from '../../services/StorageService.js';

class SavedPage extends Component {
    render() {
        return(
            <Text>
                Breakthroughs
            </Text>
        );
    }
    // constructor(props) {
    //     super(props);
    //     this.storage = new StorageService();
    //     this.state = {
    //         loading: true,
    //         articles : []
    //     };
    // }

    //  componentDidMount() {
    //      this.setState({loading: true});
    //      this.storage.getData().then(()=> {
    //          this.setState({loading: false, articles: this.storage.articles});
    //      });
    // }
    
    // listArticles() {
    //     return this.storage.articles.map((article)=> {
    //         return( <Text key={article.guid}>{article.title.toString()}</Text>);
    //       });
    // }

    // render() {
    //     if (this.state.loading) {
    //         return(
    //             <Text>Loading</Text>
    //         );
    //     }
    //     else {return(
    //         <View>
    //             {this.listArticles()}
    //         </View>
           
    //     );}
    // }
}

export default SavedPage;