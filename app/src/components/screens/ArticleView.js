import React,{Component} from 'react';
import { View, Text, Image, Platform, ScrollView, Dimensions, Share } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button, Icon} from 'react-native-elements';
import HTML from 'react-native-render-html';
import moment from 'moment';

var RNFS = require('react-native-fs');
var path = RNFS.DocumentDirectoryPath +'/data.json'

class ArticleView extends Component {
    onClickShare() {
        Share.share({
            title: `${this.props.navigation.getParam('title')}`,
            url: `${this.props.navigation.getParam('guid')}`,
            message: `Check out this UP Article ${Platform.OS === 'android'? this.props.navigation.getParam('guid'): ''}`

        }, {
            dialogTitle: 'Share UP Article',
            subject: 'UP Article'
        });
    }

    onClickSave() {
        console.log(path)
        console.log(this.props.navigation.state)
        RNFS.writeFile(path, JSON.stringify(this.props.navigation.state.params), 'utf8')
          .then((success) => {
            console.log('FILE WRITTEN!');
          })
          .catch((err) => {
            console.log(err.message);
          });
    }

    render() {
        const Dimensions = require('Dimensions')
        const w = Dimensions.get('window').width;
        const h = parseInt(Dimensions.get('window').width * 0.5625);

        const {goBack} = this.props.navigation;
        const content = this.props.navigation.getParam('content','no content');
        const pubDate = this.props.navigation.getParam('pubDate')
        const categories = this.props.navigation.getParam('categories')

        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Button
                    icon = {Platform.OS === 'ios' ? {type:'ionicon', name:'ios-arrow-back-outline', color:'#800000',size:36} : {type:'ionicon', name:'md-arrow-back', color:'#424242',size:36}}
                    onPress = {()=>goBack()}
                    buttonStyle={{
                        backgroundColor:'transparent',
                        justifyContent: 'flex-start',
                        paddingVertical: 24,
                        paddingHorizontal: 24
                    }}
                    containerViewStyle={{marginLeft:0}}
                />
                <View>
                    <Text style={styles.categoryTitle}>{categories[0]}</Text>
                    <Text style={styles.articleTitle}>{this.props.navigation.getParam('title')}</Text>
                </View>
                <View style={styles.articleMetaContainer}>
                    <Text style={styles.articleMeta}>{ moment(pubDate.slice(0,10)).format('DD MMMM YYYY').toUpperCase() }</Text>
                </View>
                <View style={styles.articleButtons}>
                    <Button title='Save'
                        icon={Platform.OS === 'ios' ? {type:'ionicon', name:'ios-bookmark-outline', color:'#800000'} : {type:'ionicon', name:'md-bookmark', color:'#800000'}}
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonText}
                        containerViewStyle={styles.buttonContainerStyle}
                        onPress={()=>{this.onClickSave()}}

                    />
                    <Button title='Share'
                        icon={Platform.OS === 'ios' ? {type:'ionicon', name:'ios-share-outline', color:'#800000'} : {type:'ionicon', name:'md-share', color:'#800000'}}
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonText}
                        containerViewStyle={styles.buttonContainerStyle}
                        onPress={()=>{this.onClickShare()}}
                    />
                </View>
                <HTML
                    html={content} 
                    debug={true}
                    textSelectable={true}
                    baseFontStyle={{
                        fontSize: 18,
                        color: '#454545',
                        textAlign: 'justify',
                        lineHeight: 24
                    }}
                    renderers={{
                        img: (attrs) => <Image key={attrs.src} source={{ uri: attrs.src }} style={{ width: w, height: w * 0.67 }}/>,
                        newscaption: (attrs) => (
                            <Text
                                key={attrs.data}
                                style={{
                                    paddingHorizontal: 48,
                                    paddingVertical: 12,
                                    fontStyle: 'italic',
                                    fontWeight: '700',
                                    color: '#666'
                                }}>
                                { attrs.data }
                            </Text>
                        )
                    }}
                    alterNode={(node) => {
                        // remove thumbnail images
                        if (node.name === 'img' && node.attribs.class.indexOf('attachment-thumbnail') >= 0) return {};

                        // hack around the figcaption to allow properly displaying the captions
                        if (node.name === 'figcaption') {
                            node.name = 'newscaption';
                            node.attribs.data = node.children[0].children[0].data;
                            node.children = [];
                            return node;
                        }
                    }}
                    tagsStyles={{
                        p: {
                            paddingHorizontal: 48,
                            paddingVertical: 8
                        },
                    }}
                />
            </ScrollView>
        );
    }
}

export default ArticleView;

const styles = EStyleSheet.create({
    categoryTitle: {
        paddingTop: 24,
        paddingHorizontal: 48,
        color: '#800000',
        fontSize:'rem',
        fontWeight: 'bold'
    },
    articleTitle: {
        paddingVertical: 12,
        paddingHorizontal: 48,
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#424242'
    },
    articleMetaContainer: {
        paddingHorizontal: 48,
        flexDirection: 'row'
    },
    articleMeta: {
        color: '#7B7B7B',
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    articleButtons: {
        paddingVertical: 24,
        paddingHorizontal: 48,
        flexDirection: 'row'
    },
    buttonText: {
        color: '#800000',
        fontWeight: '700'
    },
    buttonStyle: {
        backgroundColor: 'transparent',
        borderColor: '#800000',
    },
    buttonContainerStyle: {
        padding: 0,
        marginLeft: 0,
        marginRight: 0,
        flex: 1
    }
});