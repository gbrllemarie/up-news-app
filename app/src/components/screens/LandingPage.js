import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView,Modal,TouchableHighlight,ActivityIndicator} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import moment from 'moment';
import StorageService from '../../services/StorageService.js';

class LandingPage extends Component {

    constructor(props) {
        super(props);
       this.storage = new StorageService();
        this.state = {
            loading: true,
            news : [],
        };
    }

     componentDidMount() {
        this.setState({loading: true});
        this.storage.getData('news').then(()=> {
            this.setState({loading: false, news: this.storage.news});
         });

    }

    getThumbnail(art){
        let photourl = ""
        if (art.thumbnail == ""){
            photourl = require('../../img/default.png')
        }else{
            photourl = {uri : art.thumbnail.replace("_thumbnail-150x150","")}
        }
        return photourl
    }
    
    listArticles() {
        return this.state.news.map((article)=> {
            return(
                <Card
                    key={article.guid}
                    image={this.getThumbnail(article)}>
                    <Text style={styles.articleTitle}>
                        {article.title.toString()}
                    </Text>

                    <Text style={styles.datecon}>
                        {moment(article.pubDate.slice(0,10)).format('DD MMMM YYYY')}
                    </Text>

                    <View style={styles.butcon}>
                        <Button
                            icon ={{name: 'library-books', color:'#800000', size: 25}}
                            backgroundColor='white'
                            fontFamily='Helvetica'
                            buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            onPress={()=>this.props.navigation.navigate('ArticleView')}/>
                        <Button
                            icon={{name: 'bookmark', color:'#800000', size: 25}}
                            backgroundColor='white'
                            fontFamily='Helvetica'
                            buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}/>
                        <Button
                            icon={{name: 'share', color:'#800000', size: 25}}
                            backgroundColor='white'
                            fontFamily='Helvetica'
                            buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}/>
                    </View>
                </Card>

            );
          });
    }

    render() {
        if (this.state.loading) {
            return(
                <View style={{flex: 1, padding: 50}}>
                    <ActivityIndicator style={{justifyContent: 'center', alignItems: 'center', height: 80}}/>
                </View>
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
        marginRight : 30,
    },

    title: {
        fontFamily: 'Helvetica',
        fontSize: 30,
        color: '#800000'
    },

    articleTitle: {
        fontFamily: 'Helvetica-Light',
        fontSize: 20,
        color: '#880000'
    },

    redUnderline: {
        marginTop: 5,
        height: 0.5,
        backgroundColor: '#800000'
    },

    cardcon: {
        marginTop: 20,
        marginBottom: 20
    },

    butcon: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    datecon: {
        fontSize: 18,
        fontFamily: 'Helvetica-Light',
        color: '#1A1A1A',
        marginTop: 8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    buttons: {

    }

})
