import React, { Component,PropTypes } from 'react';  
import {ScreenHeight,ScreenWidth} from '../Commom/Commom';
import ListViewCell from './ListViewCell';
import PullToRefreshListView from 'react-native-smart-pull-to-refresh-listview'
import TimerEnhance from 'react-native-smart-timer-enhance'
import * as actions from '../Actions/actions'

import {  
  Text,  
  View,  
  Platform,  
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ListView,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native'; 

//List View
class ListVw extends  Component{

  // 构造 
      constructor(props) {
        super(props);
        this._dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            //sectionHeaderHasChanged: (s1, s2) => s1 !== s2, 
        });
 
      let dataList = []
 
        this.state = {
            first: true,
            dataList: dataList,
            dataSource: this._dataSource.cloneWithRows(dataList),
        }
    }

  _renderActivityIndicator() {
        return ActivityIndicator ? (
            <ActivityIndicator
                style={{marginRight: 10,}}
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        ) : Platform.OS == 'android' ?
            (
                <ProgressBarAndroid
                    style={{marginRight: 10,}}
                    color={'#ff0000'}
                    styleAttr={'Small'}/>
 
            ) :  (
            <ActivityIndicatorIOS
                style={{marginRight: 10,}}
                animating={true}
                color={'#ff0000'}
                size={'small'}/>
        )
    }

  //插入真实Dom后调用
   componentDidMount(){
    this._pullToRefreshListView.beginRefresh()

   }

//    shouldComponentUpdate(){

//        return true
//    }

   //新参数时回调用此方法
   componentWillReceiveProps(newProps){  

    const {dataSource} = newProps;
    const {topics,isFetching,selectedTab,scrollT,dispatch,select} = dataSource;
    console.log(dataSource,this.props.dataSource)

    //判断数据源是否相同
    if (dataSource.topics==this.props.dataSource.topics){
        console.log('数据源相同')
    }else{
        console.log('数据源不同')
        this._pullToRefreshListView.endRefresh()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
            dataSource:ds.cloneWithRows(topics)
        })
    }

    // if (isFetching == true || select == true){

    // }else{
        
    // }
   }


  //加载更多
    _onLoadMore = () => {
     console.log('下拉刷新了')
    }

// 上拉刷新
   _onRefresh = () => {
       const { dispatch,tab } = this.props
       dispatch(actions.fetchTopics(tab,0))
    }

  // 上拉刷新
  _renderHeader = (viewState) => {
        let {pullState, pullDistancePercent} = viewState
        let {refresh_none, refresh_idle, will_refresh, refreshing,} = PullToRefreshListView.constants.viewState
        pullDistancePercent = Math.round(pullDistancePercent * 100)
        switch(pullState) {
            case refresh_none:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull down to refresh</Text>
                    </View>
                )
            case refresh_idle:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>pull down to refresh{pullDistancePercent}%</Text>
                    </View>
                )
            case will_refresh:
                return (
                    <View style={{height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        <Text>release to refresh{pullDistancePercent > 100 ? 100 : pullDistancePercent}%</Text>
                    </View>
                )
            case refreshing:
                return (
                    <View style={{flexDirection: 'row', height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink',}}>
                        {this._renderActivityIndicator()}<Text>refreshing</Text>
                    </View>
                )
        }
    }
      // Cell
    _renderRow = (rowData, sectionID, rowID) => {
        return (
           <ListViewCell dataSource={rowData} clickCell={this.props.clickCell}/>
        )
    }
  
  render(){
    return (
        <View  >
            <PullToRefreshListView
                ref={ (component) => this._pullToRefreshListView = component }
                viewType={PullToRefreshListView.constants.viewType.listView}
                contentContainerStyle={{}}
                // style={{marginTop: Platform.OS == 'ios' ? 64 : 56, }}
                initialListSize={20}
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                pageSize={20}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
                //renderSeparator={(sectionID, rowID) => <View style={styles.separator} />} 
                onRefresh={this._onRefresh}
                onLoadMore={this._onLoadMore}
                pullUpDistance={35}
                pullUpStayDistance={50}
                pullDownDistance={35}
                pullDownStayDistance={50}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    itemHeader: {
        height: 35,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        backgroundColor: 'blue',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        height: 60,
        //borderBottomWidth: StyleSheet.hairlineWidth, 
        //borderBottomColor: '#ccc', 
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
 
    contentContainer: {
        paddingTop: 20 + 44,
    },
 
    thumbnail: {
        padding: 6,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        overflow: 'hidden',
    },
 
    textContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default TimerEnhance(ListVw);