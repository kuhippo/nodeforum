import React from 'react';
import {
    Navigator,
    View,
    StyleSheet,
    Text,
} from 'react-native';

import Index from './Index';


class App extends React.Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <Navigator
                    initialRoute={{ name: 'Index', component: Index }}
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    } }
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.params} />
                        )
                    } }
                    />
            </View>
        )
    }
}

export default App;