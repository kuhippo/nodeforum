import React,{Component} from 'react';
import {ScreenHeight,ScreenWidth} from '../Commom/Commom.js'
import {
  View,
  Dimensions,
  Animated,
  Text,
  TouchableHighlight
} from 'react-native';

const sliderWidth = 200;

class SliderFilter extends Component{
  constructor(props){
    super(props);
    this.state={
      right:new Animated.Value(-sliderWidth),
    }
  }
    componentDidMount(){
      Animated.spring(this.state.right, {
            toValue: 0,
            friction: 6,
            tension: 10,
        }).start();
    }
    
    _hideSilder() {
      console.log("click alpha view and hide filter ");
      Animated.spring(this.state.right, {
            toValue: -sliderWidth,
            friction: 6,
            tension: 10,
        }).start();
        setTimeout(()=>{
            this.props.touchClose()
        },400);
    }
      render(){
        return(
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.4)',flex: 1}}>
            	<TouchableHighlight onPress={ this._hideSilder.bind(this)} activeOpacity={ 0.9 }>
                    <View style={{width:ScreenWidth,height:ScreenHeight,position:'absolute'}} >
    	            </View>
    	        </TouchableHighlight>
                <Animated.View style={{top: 0,left: this.state.right,width: sliderWidth,height: ScreenHeight,backgroundColor:'orange'}}>
                    <Text style={{top: 100}}>点击的登录</Text>
                </Animated.View>
            </View>
        )
    }
}
export default SliderFilter;