import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Share, Platform } from 'react-native';
import { Card, Button, List, ListItems } from 'react-native-elements';
import moment from 'moment';
import StorageService from '../../services/StorageService.js';

class SavedPage extends Component {
   
    // Fetch saved pages in constructor.
    constructor(props) {
        super(props);
        this.storage = new StorageService();
        this.state = {
            loading: true,
            news : [],
        };
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
                <View style={global.styles.maincon}>
                    <Text style={global.styles.title}>Profiles</Text>
                    <View style={global.styles.redUnderline} />
                    <ScrollView style={global.styles.cardcon}>
                        {this.listSavedPages()}
                    </ScrollView>
                </View>
               
            );
        }
    }

}

export default SavedPage;