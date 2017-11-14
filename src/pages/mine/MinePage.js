/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-14T08:57:48+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: MinePage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-14T09:31:24+08:00
 */


 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'

 import { NavigationItem } from '../../widget'

 const screenWidth = Dimensions.get('window').width

 export default class MinePage extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
         headerTitle: (
             <TouchableOpacity>
               <Text>我</Text>
             </TouchableOpacity>
         ),
         headerRight: (
           <View style={{ flexDirection: 'row' }}>
               <NavigationItem
                   iconStyle={{}}
                   icon={require('./settings.png')}
                   onPress={() => {

                   }}
               />
           </View>
         ),
         headerStyle: { backgroundColor: 'white'},
     })

   constructor() {
     super()
   }

   render(){
     return (
       <ScrollView style={{backgroundColor:'white'}}>
          <View style={{marginVertical:20, marginHorizontal:15, flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{justifyContent:'center'}}>
              <Text style={{fontSize:22, fontWeight:'bold'}}>特朗普大将军</Text>
              <Text style={{marginTop:20,fontSize:10, opacity:0.7}}>2017加入</Text>
            </View>
            <View>
              <Image style={{borderRadius:45, width:90, height:90}} source={require('./trump.jpg')}/>
            </View>
          </View>

          <View style={{paddingBottom:10,borderBottomWidth:0.5, borderColor:'rgb(230,230,230)',flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', marginHorizontal:15, alignItems:'center'}}>
              <View style={{marginRight: 30}}>
                <Text style={{fontWeight:'bold', fontSize:12}}>12</Text>
                <Text style={{paddingTop:5, fontSize:12, opacity:0.7}}>关注</Text>
              </View>
              <View>
                <Text style={{fontWeight:'bold', fontSize:12}}>122</Text>
                <Text style={{paddingTop:5, fontSize:12, opacity:0.7}}>粉丝</Text>
              </View>
            </View>
            <View style={{justifyContent:'center'}}>
              <Text style={{color: 'rgb(248,79,64)', fontSize:14, marginRight:15}}>编辑个人资料</Text>
            </View>
          </View>

          <View style={{borderBottomWidth:0.5, borderColor:'rgb(230,230,230)',paddingVertical:15,flexDirection:'row', justifyContent:'space-around'}}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:25, height:25}} source={require('./heart.png')} />
              <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>我的收藏</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:25, height:25}} source={require('./order.png')} />
              <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>订单</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:25, height:25}} source={require('./pig.png')} />
              <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>优惠</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:25, height:25}} source={require('./chart.png')} />
              <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>统计</Text>
            </View>
          </View>

          <View style={{marginVertical: 50}}>

          </View>
       </ScrollView>
     )
   }
 }


 const styles = StyleSheet.create({

 })
