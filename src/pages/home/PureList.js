/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-12-04T18:38:28+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: PureList.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-06T13:00:10+08:00
 */

 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, StatusBar, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'


 const screenWidth = Dimensions.get('window').width
 import { NavigationItem } from '../../widget'

 export default class PureList extends PureComponent {
   constructor(){
     super()
     this._renderCell = this._renderCell.bind(this)
     this._header = this._header.bind(this)
   }
   goItem() {
     StatusBar.setBarStyle('default', false)
     this.props.navigation.navigate('Recipe', { info: {} })
   }
   _renderCell(){
     return(
       <TouchableOpacity onPress={this.goItem.bind(this)} style={{paddingBottom: 20, flexDirection:'row', width:screenWidth-40, justifyContent:'space-between'}}>
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
       </TouchableOpacity>
     )
   }
   _header() {
    //  ListHeaderComponent = {this._header.bind(this)}
     return (
       <View>
         <Text>it is header</Text>
       </View>
     )
   }
   render(){
     return (
       <FlatList
        style={{backgroundColor: 'white', padding:20}}
        data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'}]}
        renderItem = {this._renderCell}
      />
     )
   }
 }
