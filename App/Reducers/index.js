import {
  RECORD_SCROLLT,
  REQUEST_TOPICS,
  RECEIVE_TOPICS,
  SELECT_TAB,
  PUll_REFRESH,
  DROP_DOWNLOAD
 } from '../Actions/actions';




// 当组件第一次发出REQUEST_TOPICS后，需要对其返回的state进行初始化，否则没有topics等属性会报错
function tabDataItem (state = {isFetching:false,page:0,scrollT:0,topics:[]}, action) {

  switch (action.type) {
      //发出  
    case REQUEST_TOPICS:
      return {
        ...state,
        isFetching: true
      }
      //响应
    case RECEIVE_TOPICS:
      if(state.page < action.page){
        let topics = state.topics
        action.topics = topics.concat(action.topics)
      }
      return {
        ...state,
        isFetching: false,
        page:action.page,
        topics:action.topics,
        limit:action.limit
      }
    case RECORD_SCROLLT:
    return {
      ...state,
      scrollT:action.scrollT
    }
    default:
      return state
  }
}


const tabData = (state={},action) => {
  switch(action.type){
    case RECEIVE_TOPICS:
    case REQUEST_TOPICS:
    case RECORD_SCROLLT:
      return{
        ...state,
        [action.tab]:tabDataItem(state[action.tab],action)
      }
    default:
      return state
  }
}


// 返回要是新对象
const allDt = (state={},action) => {

  switch(action.type){
    case SELECT_TAB:
    
      return {...state,select:true}
    //发送请求
    case REQUEST_TOPICS:
      return {...state,isFetching:true}
    //返回请求
    case RECEIVE_TOPICS:
      if  (state.page < action.page){
        let topics = state.topics
        action.topics = topics.concat(action.topics)
      }
      return{
      ...state,
       isFetching:false,
       select:false,
       page:action.page,
       topics:action.topics,
       limit:action.limit
      }
//       下拉加载更多
       return {
         ...state,
        isFetching:false,
        page:action.page} 
    case DROP_DOWNLOAD:
       if(state.page < action.page){
        let topics = state.topics
        action.topics = topics.concat(action.topics)
      }
    default:
      return state
  }
  return state
}


var fstate = 
{ 'all':{isFetching:false,page:0,scrollT:0,topics:[],select:false},
  'good':{isFetching:false,page:0,scrollT:0,topics:[],select:false},
  'share':{isFetching:false,page:0,scrollT:0,topics:[],select:false},
  'ask':{isFetching:false,page:0,scrollT:0,topics:[],select:false},
  'job':{isFetching:false,page:0,scrollT:0,topics:[],select:false}
}

var count = 1;
export default function index(state=fstate,action){

    const allDto = allDt(state[action.tab],action)
    state[action.tab] = allDto
//    需要返回第一个新对象不然监听不到
    const dic =  {all:state.all,good:state.good,share:state.share,ask:state.ask,job:state.job}
   return {all:state.all,good:state.good,share:state.share,ask:state.ask,job:state.job}
}
