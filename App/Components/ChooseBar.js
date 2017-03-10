import React, { Component,PropTypes } from 'react';  
import {ScreenHeight,ScreenWidth} from '../Commom/Commom'
import {  
  Text,  
  View,  
  Platform,  
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated
} from 'react-native'; 

// 样式
const chooseBar = StyleSheet.create({
  //主体View的内容
   container:{
    flexDirection:'row',
    height:40,
   },
  // 字体样式
  pathStyles: {   
    color: '#FFF',
  }, 
  pathContaint:{
    backgroundColor:'#1FBCD2',
    flex:1,
    justifyContent: 'center', //垂直居中
    alignItems:'center'//水平居中
  }
});

const Path = ({i,title,onPress}) => {
  
  return (
    <TouchableOpacity style={chooseBar.pathContaint} onPress={() =>onPress(i)}>
      <View>
        <Text style={chooseBar.pathStyles}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class ChooseBar extends Component{
  constructor(props){
    super(props)
    this.state=({
      left:new Animated.Value(0)
    })
  }
  //插入真实Dom时调用
  componentDidMount(){

  }
  // 当接收到新的参数会调用此方法 
  componentWillReceiveProps(nextProps){
    Animated.spring(          // Uses easing functions
    this.state.left,    // The value to drive
    {toValue: this.props.scrollX,
    //  friction: 6,
    //  tension: 10,  
    },           // Configuration
    ).start();      

  }
  
  render(){
    
    return(
      <View>
        <View style={chooseBar.container}>
            {this.props.tabs.map((tab,i) => 
                    <Path title={tab.title} i={i} onPress={this.props.onPress}/>
            )}
        </View>
        <View>
         <Animated.View          
          style={{left: this.state.left,backgroundColor:'red',width:ScreenWidth/5,height:1}}> 
        </Animated.View>
        </View>
      </View>
    )
  }
}