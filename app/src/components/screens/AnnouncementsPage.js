import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView,Modal,TouchableHighlight,ActivityIndicator,TouchableOpacity,Share,Platform} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import moment from 'moment';
import StorageService from '../../services/StorageService.js';

class AnnouncementsPage extends Component {

    getThumbnail(art){
        let photourl = ""
        if (art.thumbnail == ""){
            photourl = require('../../img/default.png')
        }else{
            photourl = {uri : art.thumbnail.replace("_thumbnail-150x150","")}
        }
        return photourl
    }

    listAnnouncements() {
        return global.storage.announcements.map((announcement)=> {
            return(
                <Card
                    key={announcement.guid}
                    image={this.getThumbnail(announcement)}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ArticleView',announcement)}>
                        <Text style={global.styles.articleTitle}>
                        {announcement.title.toString()}
                        </Text>

                        <Text style={global.styles.datecon}>
                            {moment(announcement.pubDate.slice(0,10)).format('DD MMMM YYYY')}
                        </Text>
                    </TouchableOpacity>
                        <View style={global.styles.butcon}>
                        
                            <Button
                                icon={{name: 'bookmark', color:'#800000', size: 25}}
                                backgroundColor='white'
                                fontFamily='Helvetica'
                                buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}/>
                            <Button
                                icon={{name: 'share', color:'#800000', size: 25}}
                                backgroundColor='white'
                                fontFamily='Helvetica'
                                buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                onPress={()=>{this.onClick()}}
                            />
                        </View>
                </Card>

            );
          });
    }

   render() {
        if (global.fetching) {
            return(
                <View style={{flex: 1, padding: 50}}>
                    <ActivityIndicator style={{justifyContent: 'center', alignItems: 'center', height: 80}}/>
                </View>
           );
        }
        else {
            return(
                <View style={styles.maincon}>
                    <Text style={styles.title}>Announcements</Text>
                    <View style={styles.redUnderline} />
                    <ScrollView style={styles.cardcon}>
                        {this.listAnnouncements()}
                    </ScrollView>
                </View>
               
            );
        }
    }
}

export default AnnouncementsPage;