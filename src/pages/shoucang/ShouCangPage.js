/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T18:08:20+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: ShouCangPage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-04T18:11:29+08:00
 */


 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'
 import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'


 const screenWidth = Dimensions.get('window').width
 const screenHeight = Dimensions.get('window').height
 import { NavigationItem } from '../../widget'

 class ShouCangPage extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
         headerTitle: (
             <TouchableOpacity style={styles.searchBar}>
               <Icon name="ios-search" style={styles.searchIcon} size={20} color="#4F8EF7" />
               <Text style={{color: 'rgb(150,150,153)'}}>搜索我的收藏</Text>
             </TouchableOpacity>
         ),
         headerStyle: { backgroundColor: 'white'},
     })

   constructor(){
     super()
   }

   render(){
     return (
       <ScrollableTabView
          tabBarBackgroundColor='white'
          tabBarUnderlineStyle={{backgroundColor:'rgb(222,117,99)', height:2}}
          tabBarActiveTextColor='rgb(222,117,99)'
          tabBarTextStyle={{top:4, fontWeight: '100'}}
          initialPage={0}
          locked={true}
          renderTabBar={() => <DefaultTabBar />}
        >
          <CaiPu tabLabel='收藏的菜谱'/>
          <CaiDan tabLabel='我的菜单'/>
          <LiShi tabLabel='浏览历史'/>
        </ScrollableTabView>
     )
   }
 }

 class CaiPu extends PureComponent {

   constructor(){
     super()
     this._renderCell = this._renderCell.bind(this)
   }
   _renderCell(){
     return(
       <View style={{paddingBottom: 20, flexDirection:'row', width:screenWidth-20, justifyContent:'space-between'}}>
          <View style={{}}>
            <Image style={{width:(screenWidth-40)/2, height:100}} source={require('./temp1.jpeg')} />
          </View>

          <View style={{width:(screenWidth-40)/2, height: 100, justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>武汉周黑鸭</Text>
            <Text style={{paddingVertical:10, fontSize:12, fontWeight:'100', opacity:0.5}}>比玫瑰还美丽的女R3n-</Text>
            <Text style={{fontSize:12, fontWeight:'100'}}>1人做过</Text>
          </View>
       </View>
     )
   }
   render(){
     return (
       <FlatList
        style={{backgroundColor: 'white', padding:20}}
        data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'}]}
        renderItem={this._renderCell}
      />
     )
   }
 }

 class CaiDan extends PureComponent {

   constructor() {
     super()
     this._renderCell = this._renderCell.bind(this)
   }
   _renderCell() {
     return (
        <View style={{width: screenWidth - 40, height: screenHeight, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
           <Text style={{fontSize:24}}>你好像还未创建过菜单</Text>
           <Text style={{paddingTop:20,fontSize:12}}>用菜单讲你喜欢的菜谱分类，比如：煲汤、早餐、素食、年夜饭。</Text>
        </View>
     )
   }
   render(){
     return (
       <FlatList
        style={{backgroundColor: 'white', padding:20}}
        data={[{key: 'a'}]}
        renderItem={this._renderCell}
      />
     )
   }
 }

 class LiShi extends PureComponent {
   constructor(){
     super()
     this._renderCell = this._renderCell.bind(this)
     this._header = this._header.bind(this)
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
   _header() {
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
        ListHeaderComponent = {this._header.bind(this)}
      />
     )
   }
 }

 const styles = StyleSheet.create({

   searchBar: {
         width: screenWidth - 90,
         height: 30,
         borderRadius: 5,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgb(236,236,234)',
         alignSelf: 'center',
     },
     searchIcon: {
         width: 20,
         height: 20,
         margin: 5,
         alignItems: 'flex-end',
         color: 'rgb(150,150,153)'
     }
 })

export default ShouCangPage;
