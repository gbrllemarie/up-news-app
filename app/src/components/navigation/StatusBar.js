import React, {Stylesheet, Component, View} from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';

export default class StatusBar extends Component {

		render() {
			return (<View style={styles.SBbackground}></View>);
		}

}

const styles = EStyleSheet.create({

	SBbackground: {
		height: 20
	};
	
})