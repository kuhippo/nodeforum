export const SELECT_TAB= "SELECT_TAB";
export const RECORD_SCROLLT = 'RECORD_SCROLLT';
export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
// 上拉刷新 
export const PUll_REFRESH = "PUll_REFRESH";
//下拉加载更多
export const DROP_DOWNLOAD = "DROP_DOWNLOAD";

export function increment() {
  return {
    type: "INCREMENT_COUNTER"
  }
}

//导出减一的方法
export function decrement() {
  return {
    type: "DECREMENT_COUNTER"
  }
}

export const tabs = [
      {
          title: '全部', 
          filter: 'all',
      },
      {
          title: '精华',
          filter: 'good',
      },
      {
          title: '分享',
          filter: 'share',
      },
      {
          title: '问答',
          filter: 'ask',
      },
      {
          title: '招聘',
          filter: 'job',
      } 
  ]


//Mark:上拉刷新Actions
// 方法
const loardDataByTabs = (tab,topics,page,limit) => ({
  type:RECEIVE_TOPICS,
  tab,
  topics,
  page,
  limit
})

//发送请求
function requestTopics(tab){
  return{
    type:REQUEST_TOPICS,
    tab
  }
}

const dropDownLoad = (tab,topics,page,limit) => {
  return{
    type:DROP_DOWNLOAD,
    tab,
    topics,
    page,
    limit
  }
}

//选择action
export const seleceterTab = (tab='all')  => {
  return{
    type:SELECT_TAB,
    tab
  }
}

export const fetchTopics = (tab='all',page=1,needfresh=false) => {
  let limit = 20
   return dispatch => {
      dispatch(requestTopics(tab))
      fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
      .then(response => response.json())
      .then(json => dispatch(loardDataByTabs(tab,json.data,page,limit)))  
  }
}   
    