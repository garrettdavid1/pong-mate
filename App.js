import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, AppState } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading, Asset, Font } from 'expo';
import { RootNavigation } from './components/screens/RootNavigation';
import { LoginNavigation } from './components/screens/Login/LoginNavigation';

console.disableYellowBox = true;
export default class App extends React.Component {
  	state = {
    	isLoadingComplete: false,
		appState: AppState.currentState,
		authenticated: false
  	};

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange); 
  }

  componentWillUnmount() {
      AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
        //Make API call to refresh data here.
    }
    this.setState({ appState: nextAppState });
}

render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={this._loadResourcesAsync}
                onError={this._handleLoadingError}
                onFinish={this._handleFinishLoading}
                backgroundColor={styles.backgroundColor}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                {/* {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */}
                {/* {this.state.authenticated ? <RootNavigation /> : <Login confirmAuth={this.confirmAuth}/>} */}
                {this.state.authenticated ? <RootNavigation /> : <LoginNavigation app={this} />}
            </View>
        );
    }
}

_loadResourcesAsync = async () => {
    return Promise.all([
        Asset.loadAsync([
            require('./assets/icon.png'),
            require('./assets/splash.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
        }),
    ]);
};
_handleLoadingError = error => {
    console.warn(error);
};

_handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
};

confirmAuth = () => {
    this.setState({
        authenticated: true
    })
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
},
});