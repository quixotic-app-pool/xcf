/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-14T08:57:48+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: MinePage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-06T11:42:16+08:00
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
         headerStyle: { backgroundColor: 'white'},
     })

   constructor() {
     super()
   }
   _header() {
     return (
       <View>
       <View style={{marginHorizontal:15, flexDirection:'row', justifyContent:'space-between'}}>
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
           <TouchableOpacity style={{marginRight: 30}}>
             <Text style={{fontWeight:'bold', fontSize:12}}>12</Text>
             <Text style={{paddingTop:5, fontSize:12, opacity:0.7}}>收藏</Text>
           </TouchableOpacity>
         </View>
         <TouchableOpacity style={{justifyContent:'center'}}>
           <Text style={{color: 'rgb(248,79,64)', fontSize:14, marginRight:15}}>编辑个人资料</Text>
         </TouchableOpacity>
       </View>

       <View style={{borderBottomWidth:0.5, borderColor:'rgb(230,230,230)',paddingVertical:15,flexDirection:'row', justifyContent:'space-around'}}>
         <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
           <Image style={{width:25, height:25}} source={require('./heart.png')} />
           <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>我的收藏</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
           <Image style={{width:25, height:25}} source={require('./order.png')} />
           <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>已阅读</Text>
         </TouchableOpacity>
       </View>

       <View style={{marginVertical: 5}}>

       </View>
       </View>
     )
   }
   _renderCell(){
     return(
       <View style={{paddingBottom: 20, flexDirection:'row', width:screenWidth-40, justifyContent:'space-between'}}>
          <View style={{}}>
            <Image style={{width:(screenWidth-50)/2, height:100}} source={require('./temp1.jpeg')} />
            <View style={{width:(screenWidth - 50)/2, height:100, flexDirection:'row', alignItems:'flex-start',justifyContent:'flex-start', position: 'absolute'}}>
                <Text style={{padding:2, backgroundColor:'rgb(278,176,15)',color:'white',fontSize:12, fontWeight:'bold'}}>独家</Text>
            </View>
          </View>

          <View style={{width:(screenWidth-50)/2}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>精准配方，媲美周黑鸭的卤鸭脚！</Text>
            <Text style={{paddingVertical:10, fontSize:12, fontWeight:'100', opacity:0.5}}>小云宝妈</Text>
            <Text style={{fontSize:12, fontWeight:'100'}}>7.9分 143人做过</Text>
          </View>
       </View>
     )
   }
   render(){
     return (
       <FlatList
        style={{backgroundColor: 'white', padding:20}}
        data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'}]}
        renderItem = {this._renderCell.bind(this)}
        ListHeaderComponent = {this._header.bind(this)}
      />
     )
   }
 }


 const styles = StyleSheet.create({

 })
