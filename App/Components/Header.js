import React, { Component,PropTypes } from 'react';  
import NavigationBar from './NavigationBar';
import ChooseBar from './ChooseBar';
import {  
  Text,  
  View,  
  Platform,  
  StyleSheet,
} from 'react-native'; 


class Header extends Component{
  render(){
    return(
      <View>
         <NavigationBar
            title='NodeJS论坛'
            leftImageSource={require('../Imgs/moreChoose.png')}
            rightImageSource={require('../Imgs/tips.png')}
            rightTextColor='#FFF'
            titleTextColor='#FFF'
            barBGColor = '#1FBCD2'
            leftItemFunc={this.props.leftItemAction}
            rightItemFunc={this.props.rightItemAction}/>
      </View>
    )
  }
}

export default Header;