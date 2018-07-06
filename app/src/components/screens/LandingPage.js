import React, { Component } from 'react';
import {View,Text} from 'react-native';
import StorageService from '../../services/StorageService.js';
const axios = require('axios');
class LandingPage extends Component {

    componentDidMount() {
        {StorageService.getData()}
    }
    render() {
        return(
            <View>
                <Text>TEST</Text>
            </View>
        );
    }
}

export default LandingPage;