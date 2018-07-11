import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView,Modal,TouchableHighlight} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import StorageService from '../../services/StorageService.js';

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.storage = new StorageService();
        this.state = {
            loading: true,
            articles : [],

        };
    }

     componentDidMount() {
         this.setState({loading: true});
         this.storage.getData().then(()=> {
            this.setState({loading: false, articles: this.storage.articles});
         });
    }

    getThumbnail(art){
        let photourl = ""
        if (art.thumbnail == ""){
            photourl = require('../../img/default.png')
        }else{
            photourl = {uri : art.thumbnail}
        }
        return photourl
    }
    
    listArticles() {
        return this.storage.articles.map((article)=> {
            return(
                <Card
                    key={article.guid}
                    image={this.getThumbnail(article)}>
                    <Text style={{marginBottom: 10}}>
                        {article.title.toString()}
                    </Text>
                <Button
                    rightIcon={{name: 'code'}}
                    color='white'
                    backgroundColor='#800000'
                    fontFamily='Helvetica'
                    buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Read more' />
                </Card>

            );
          });
    }

    render() {
        console.log(this);
        if (this.state.loading) {
            return(
                <Text>Loading</Text>
           );
        }
        else {
            return(
                <View style={styles.maincon}>
                    <Text style={styles.title}>News</Text>
                    <View style={styles.redUnderline} />
                    <ScrollView style={styles.cardcon}>
                        {this.listArticles()}
                    </ScrollView>
                </View>
               
            );
        }
    }
}

export default LandingPage;

const styles = StyleSheet.create({

    maincon: {
        marginTop : 50,
        marginBottom : 50,
        marginLeft : 30,
        marginRight : 30
    },

    title: {
        fontFamily: 'Helvetica',
        fontSize: 30,
        color: '#800000'
    },

    redUnderline: {
        marginTop: 5,
        height: 0.5,
        backgroundColor: '#800000'
    },

    cardcon: {
        marginTop: 20,
        marginBottom: 20
    }

})
