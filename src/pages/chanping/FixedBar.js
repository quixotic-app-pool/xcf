/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-13T17:13:55+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: FixedBar.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-13T17:27:48+08:00
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
             <View style={{flexDirection:'row'}}>
                <View style={{width:width/6, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                  <Image style={{width: 20, height:20}} source={require('./shop.png')}/>
                  <Text style={{marginTop:2, fontSize:10, opacity:0.7}}>店铺</Text>
                </View>
                <View style={{width:width/6, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                  <Image style={{width: 20, height:20}} source={require('./chat.png')}/>
                  <Text style={{marginTop:2, fontSize:10, opacity:0.7}}>联系卖家</Text>
                </View>
                <View style={{borderRightWidth:1, borderColor:'white', width: width/3, height: px2dp(40), backgroundColor:'rgb(249,79,64)', justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color: 'white'}}>加入购物车</Text>
                </View>
                <View style={{width:width/3, backgroundColor:'rgb(249,79,64)',height: px2dp(40), justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color: 'white'}}>立即购买</Text>
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
       height: px2dp(40),
       zIndex: 100,
       backgroundColor:'white',
       justifyContent:'center'
     }
   })
