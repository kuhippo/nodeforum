import React, { Component } from 'react';
import {ScreenHeight} from '../Commom/Commom'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


const styles = StyleSheet.create({
  cellContainer:{
      backgroundColor:'white',
      height:60,
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'stretch'
  },
  rightContain:{
    flex:1,
    flexDirection:'column',
    marginLeft:5,
//     alignItems:'stretch',
    alignSelf:'center',

    height:50
  },
  topSpan:{
    flex:1,
    flexDirection:'row',
  },
  bottomSpan:{
    flex:1,
    flexDirection:'row',
  },
  line:{
    height:0.5,
    backgroundColor:'gray'
  },
  spanStyle:{
    marginRight:10,
  }
  ,
  imageView:{
    height:40,
    width:40,
    backgroundColor:'red',
    marginLeft:7,
    borderRadius:20
  },
  numTitle:{
    marginRight:7
  },
  font:{
    fontSize:12
  }
})

class ListViewCell extends Component{
  render(){
    const {author,title} = this.props.dataSource
    const {avatar_url} = author
    return(
      <TouchableOpacity onPress={()=>this.props.clickCell(this.props.dataSource)}>
       <View style={styles.cellContainer}>
        <Image style={styles.imageView} source={{uri:avatar_url}}/>
        <View style={styles.rightContain}>
            <View style={styles.topSpan}>
                <Text style={styles.spanStyle}>
                  {
                      "123123"
                  }
                </Text><Text>
                  {title}
                </Text>
            </View>
            <View style={styles.bottomSpan}>
                <Text style={styles.numTitle}>
                  {this.props.numShow}
                </Text><Text>
                  分享
                </Text>
            </View>
            <View style={styles.line}>
            </View>
       </View>
      </View>
    </TouchableOpacity>
    )
  }
}
  
export default ListViewCell;