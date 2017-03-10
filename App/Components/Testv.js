
import React, { Component, PropTypes } from 'react';
import { requireNativeComponent,NativeModules } from 'react-native';

var Test = requireNativeComponent('Test', Testv);
var TestManager = NativeModules.TestManager;

export default class Testv extends Component {
  
    //点击事件
    _onClick(){
        console.log("123123123");
        TestManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    }

  render() {
      var region = {
      latitude: 37.48,
      longitude: -122.16,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
     
    return <Test {...this.props} title="踩你妈" onClick={this._onClick.bind(this)}/>;
  }
}


