import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { ScreenHeight,ScreenWidth } from '../Commom/Commom'
import { requestTopics,fetchTopics,tabs,decrement,increment,seleceterTab } from '../Actions/actions'
import NavigationBar from '../Components/NavigationBar'
// import 
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Modal,
  ScrollView,
  Image,
  WebView
} from 'react-native';


const styles = StyleSheet.create({
    header:{
        height:60,
        width:ScreenWidth,
        flexDirection:'row',

        // justifyContent:'space-around'
    },
    headImge:{
        width:40,
        height:40,
        marginLeft:10,
        borderRadius:20,
        alignSelf:'center'

    },
    rightView:{
        marginLeft:10,
        flex:1,
        height:60,
        flexWrap:"wrap",
        alignItems:'stretch'
        
    },
    topInfo:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    bottomInto:{
        flex:1,
        flexDirection:'row',
        justifyContent:"flex-end"
    },
    author:{
        // marginTop:10,
        marginLeft:5,
        
    },
    scroll:{
        height:ScreenHeight-64,
    },
    // 日期
    date:{

    },
    // 评论
    comment:{

    }
    ,
    // 查看
    browse:{

    },
    titleView:{
       height:40,
       justifyContent:'center'
    },
    title:{
        fontSize:17,
        alignSelf:"center",

    },



})


export default class detail extends Component{
    constructor(props) {
    super(props);
    this.state={
        height:500,
    }
  }
    _leftItemAction(){
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }

  _finisnload(){

  }
  componentDidMount(){

  }

    render(){
        const {author,content,reply_count,title,visit_count} = this.props.dataSource;
        const {avatar_url,loginname} = author
        return(
            <View>
                <NavigationBar
                title='详情'
                leftImageSource={require('../Imgs/back.png')}
                rightTextColor='#FFF'
                titleTextColor='#FFF'
                barBGColor = '#1FBCD2'
                leftItemFunc={this._leftItemAction.bind(this)}/>
                <ScrollView style={styles.scroll}>
                    <View style={styles.header}>
                        <Image style={styles.headImge} source={{uri:avatar_url}}/> 
                        <View style={styles.rightView}>
                            <View style={styles.topInfo}> 
                                <Text style={styles.author}>{loginname}</Text>
                                <Text style={styles.date}>1123123</Text>
                            </View>
                            <View style={styles.bottomInto}>
                                <Text style={styles.date}>{reply_count}</Text>
                                <Text style={styles.browse}>{visit_count}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <WebView style={{height:this.state.height}} 
                             source={{html: `<!DOCTYPE html><html><body>${content}<script>window.onload=function(){window.location.hash = 1;document.title = document.body.clientHeight;}</script></body></html>`}}
                             onLoad={this._finisnload()}
                             scrollEnabled={false}
                             onNavigationStateChange={(title)=>{
                                this.setState({
                                    height:(parseInt(title.title)+20)
                                })
                                }}/>
                </ScrollView>
            </View>
        )
    }
}