/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-13T12:10:54+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: FixedBar.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-06T13:42:56+08:00
 */
  import React, { PureComponent } from 'react'
  import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image
  } from 'react-native'
  import Icon from 'react-native-vector-icons/Ionicons'
  import px2dp from './px2dp'
  let {width, height} = Dimensions.get('window')

  export default class FixedBar extends PureComponent{
      constructor(props){
        super(props)
      }
      render(){
        let { list, lens } = this.props
        return (
          <View style={styles.cartView}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
               <View style={{flexDirection:'row', alignItems:'center'}}>
                 <Image style={{marginRight:5, width: 20, height:20}} source={require('./shoucang.png')}/>
                 <Text>收藏</Text>
               </View>
               <View style={{flexDirection:'row', alignItems:'center'}}>
                 <Image style={{marginRight:5, width: 20, height:20}} source={require('./chuanzuopin.png')}/>
                 <Text>咨询</Text>
               </View>
            </View>
          </View>
        )
      }
  }

  const styles = StyleSheet.create({
    cartView: {
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
      width,
      height: px2dp(46),
      zIndex: 100,
      backgroundColor:'white',
      justifyContent:'center'
    }
  })
