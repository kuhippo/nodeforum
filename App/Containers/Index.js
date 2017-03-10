import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { ScreenHeight,ScreenWidth } from '../Commom/Commom'
import Header from '../Components/Header'
import { requestTopics,fetchTopics,tabs,decrement,increment,seleceterTab } from '../Actions/actions'
import SliderFilter from '../Components/SliderFilter'
import ListVw from  '../Components/ListVw'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Counter from './Counter';
import Detail from './Detail';
import MapView from '../Components/MapView'
import Testv from '../Components/Testv'
import Countv from '../react-native-counting-master/index'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Modal
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentStyle:{
     flexDirection:'column',
     alignItems:'stretch',
     alignSelf:'auto',
     height:ScreenHeight,
  },
  defaultTabBar:{
    backgroundColor:'#1FBCD2',
    borderBottomColor: 'rgba(0,0,0,0.05)',
    color:'#FFF'
  }
});

         
class Index extends Component {

  

   constructor(props){
      super(props)
      this.state={
        all:{},
        good:{},
        share:{},
        ask:{},
        job:{},
        fixedTop:0,
        silderVisiable:false,
        routes: [
        { key: '1', title: '全部' },
        { key: '2', title: '精华' },
        { key: '3', title: '分享' },
        { key: '4', title: '问答' },
        { key: '5', title: '招聘' },
        ],
      }



  
  }
  _leftItemAction(){
    console.log('点击了左边');
   this.setState({
      silderVisiable:true
    })
  
  }
  
  componentDidMount(){
    //加载all
    const {dispatch} = this.props
    dispatch(fetchTopics('all',1));
  }

  
  _rightItemAction(){
    console.log('点击了右边');

  }
  
  
  _hideSilder(){
    this.setState({
      silderVisiable:false
    })
    console.log('隐藏了')
  }
  
  componentWillReceiveProps(newProps){
    
  }

   _handleChangeTab = (key) => {
      const index = key.i
      const {all,good,share,ask,job} = this.props
      const dic = {all,good,share,ask,job}
      const select = dic[tabs[index].filter].page
      const isFetching = dic[tabs[index].filter].isFetching
      console.log(select,isFetching)

      if (select==0&&isFetching==false){
        //     加载数据
        this.props.dispatch(fetchTopics(tabs[index].filter,1,true));
      }else{
        this.props.dispatch(seleceterTab(tabs[index].filter));
      }
  }

  _clickCell(Object){
    // const {dispatch} = this.props
    // const { navigator } = this.props;    
    // if(navigator) {
    //     navigator.push({
    //     name: 'Detail',
    //     component: Detail,
    //     // 通过导航栏传值
    //     params: {
    //       id:'12123133',
    //       dataSource:Object
    //     }
    //   })
    // }
    
    this.cou.countingStart(0,10000,10000);
  }


  render() {
    const {all,good,share,ask,job,counter,dispatch} = this.props;
    const {silderVisiable} = this.state;
    return (
        <View style={styles.contentStyle} navigator={navigator} >
         <Countv style={{height:50,width:ScreenWidth}} ref={(ref) => this.cou = ref} onFinish={this._finish.bind(this)}/>         
          <Header leftItemAction={this._leftItemAction.bind(this)} rightItemAction={()=>this._rightItemAction()} tabs={tabs}/>
           <ScrollableTabView
            onChangeTab={this._handleChangeTab.bind(this)}
            renderTabBar={() => <DefaultTabBar activeTextColor="#FFF" backgroundColor="#1FBCD2" inactiveTextColor='#FFF'/>}>
            <ListVw tabLabel="全部" style={[ styles.page]} dataSource={all} tab='all' dispatch={dispatch} clickCell={this._clickCell.bind(this)}/>
            <ListVw tabLabel="精华" style={[ styles.page]} dataSource={good} tab='good' dispatch={dispatch} clickCell={this._clickCell.bind(this)}/>
            <ListVw tabLabel="分享" style={[ styles.page]} dataSource={share} tab='share' dispatch={dispatch} clickCell={this._clickCell.bind(this)}/>
            <ListVw tabLabel="问答" style={[ styles.page]} dataSource={ask} tab='ask' dispatch={dispatch} clickCell={this._clickCell.bind(this)}/>
            <ListVw tabLabel="招聘" style={[ styles.page]} dataSource={job} tab='job' dispatch={dispatch} clickCell={this._clickCell.bind(this)}/>
          </ScrollableTabView>
          <Modal animationType={ "fade" } transparent={silderVisiable} visible={silderVisiable} onRequestClose={()=>{}} >
          <SliderFilter touchClose={this._hideSilder.bind(this)}/>
          </Modal>
        </View>
    );
  }
}

function mapStateToProps(state){
  const {index,counter} = state;
//   第一次初始化
  const {all,good,share,ask,job} = index || {all:{isFetching:false,page:1,scrollT:0,topics:[],select:false},
                                             good:{isFetching:false,page:1,scrollT:0,topics:[],select:false},
                                             share:{isFetching:false,page:1,scrollT:0,topics:[],select:false},
                                             ask:{isFetching:false,page:1,scrollT:0,topics:[],select:false},
                                             job:{isFetching:false,page:1,scrollT:0,topics:[],select:false}}
  return {all,good,share,ask,job,index,counter}
}

export default connect(mapStateToProps)(Index)
