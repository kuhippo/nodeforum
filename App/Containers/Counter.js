import React, { Component, PropTypes } from 'react'
import {decrement,increment} from '../Actions/actions'
import { connect } from 'react-redux'

import {  
  Text,  
  View,  
  Platform,  
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated
} from 'react-native'; 

class Counter extends Component {

  componentWillReceiveProps(newProps){
    // console.log('asdasd')
  }
  increment(){
    const { dispatch } = this.props;
    dispatch(increment())
  }
  decrement(){
  const { dispatch } = this.props;
  dispatch(decrement())
  }
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { counter } = this.props;
    //渲染组件，包括一个数字，四个按钮
    return (
      <View>
        <Text>
        Clicked: {counter} times
        </Text>
        <TouchableOpacity onPress={this.increment.bind(this)}><Text>123123</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.decrement.bind(this)}><Text>zcxzc</Text></TouchableOpacity>
      </View>
    )
  }
}


//将state.counter绑定到props的counter
function mapStateToProps(state) {
const {counter} = state
// console.log(counter)
  return {
    counter
  }
}

export default connect(mapStateToProps)(Counter)

