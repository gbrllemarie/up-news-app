import React,{Component} from 'react';
import {View,Text,Platform,ScrollView,Dimensions,Share} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button, Icon} from 'react-native-elements';
import HTML from 'react-native-render-html';
import moment from 'moment';

class ArticleView extends Component {

    onClick() {
        Share.share({
            title: `${this.props.navigation.getParam('title')}`,
            url: `${this.props.navigation.getParam('guid')}`,
            message: `Check out this UP Article ${Platform.OS === 'android'? this.props.navigation.getParam('guid'): ''}`

        }, {
            dialogTitle: 'Share UP Article',
            subject: 'UP Article'
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
            <ScrollView>
                <Button
                    icon = {Platform.OS === 'ios' ? {type:'ionicon', name:'ios-arrow-back-outline', color:'#800000',size:24} : {type:'ionicon', name:'md-arrow-back', color:'#424242',size:24}}
                    onPress = {()=>goBack()}
                    buttonStyle={{
                        backgroundColor:'transparent',
                        padding: 0,
                        justifyContent: 'flex-start',
                        marginLeft: 10,
                        paddingVertical: 10
                    }}
                    containerViewStyle={{marginLeft:0}}
                />
                <View>
                    <Text style={styles.categoryTitle}>{categories[0]}</Text>
                    <Text style={styles.articleTitle}>{this.props.navigation.getParam('title')}</Text>
                </View>
                <View style={styles.articleMetaContainer}>
                    <Text style={styles.articleMeta}>{moment(pubDate.slice(0,10)).format('DD MMMM YYYY')}</Text>
                    <Icon type='entypo' name='dot-single' color='#7B7B7B'/>
                    <Text style={styles.articleMeta}>Written by {this.props.navigation.getParam('author')}</Text>
                </View>
                <View style={styles.articleButtons}>
                    <Button title='Save'
                        icon={Platform.OS === 'ios' ? {type:'ionicon', name:'ios-bookmark-outline', color:'#800000'} : {type:'ionicon', name:'md-bookmark', color:'#800000'}}
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonText}
                        containerViewStyle={{marginLeft:0}}
                    />
                    <Button title='Share'
                        icon={Platform.OS === 'ios' ? {type:'ionicon', name:'ios-share-outline', color:'#800000'} : {type:'ionicon', name:'md-share-alt', color:'#800000'}}
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonText}
                        containerViewStyle={{marginLeft:0}}
                        onPress={()=>{this.onClick()}}
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
                        figcaption: () => { return null; }
                    }}
                    tagsStyles={{
                        p: {
                            paddingHorizontal: 36,
                            paddingVertical: 8
                        },
                        figure: {
                            paddingVertical: 12,
                            width: w,
                            maxWidth: w,
                            height: h,
                            maxHeight: h
                        },
                        img: {
                            width: w,
                            maxWidth: w,
                            height: h,
                            maxHeight: h
                        }
                    }}
                    classesStyles={{
                        'attachment-thumbnail': {
                            display: 'none'
                        }
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
        paddingHorizontal: 36,
        color: '#800000',
        fontSize:'1rem',
        fontWeight: 'bold'
    },
    articleTitle: {
        paddingVertical: 12,
        paddingHorizontal: 36,
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#424242'
    },
    articleMetaContainer: {
        paddingHorizontal: 36,
        flexDirection: 'row'
    },
    articleMeta: {
        color: '#7B7B7B',
        fontSize: '1rem'
    },
    articleButtons: {
        paddingVertical: 23,
        paddingHorizontal: 36,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText: {
        color: '#800000',
        fontSize:'1rem'
    },
    buttonStyle: { 
        backgroundColor: 'transparent',
        borderColor: '#800000',
        borderWidth: 2,
        borderRadius: 4,
        paddingVertical: 3,
        paddingHorizontal:8
    }
});