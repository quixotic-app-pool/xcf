/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-14T08:57:48+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: MinePage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-06T13:36:21+08:00
 */


 import React, { PureComponent } from 'react'
 import { StatusBar, RefreshControl, Alert, View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'
 import LogIn from '../login/LogInPage'

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

   state = {
      loggedIn: true,
      selected: 0,
      refreshing: false
    };

   constructor() {
     super()
     this.chooseTopic = this.chooseTopic.bind(this)
     this.goItem = this.goItem.bind(this)
   }
   chooseTopic(index) {
      this.setState({selected: index, refreshing: true})
      //simulate
      setTimeout(() => {
          this.setState({refreshing: false})
      }, 1500);
   }
   _header() {
     return (
       <View>
       <View style={{borderBottomWidth:0.5, borderColor:'rgb(230,230,230)',flexDirection:'row', justifyContent:'space-around'}}>
         <TouchableOpacity onPress={() => this.chooseTopic(0)} style={[styles.top, this.state.selected === 0 ? styles.selected: null]}>
           <Image style={{width:25, height:25}} source={require('./heart.png')} />
           <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>我的收藏</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.chooseTopic(1)} style={[styles.top, this.state.selected === 1 ? styles.selected: null]}>
           <Image style={{width:25, height:25}} source={require('./order.png')} />
           <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>已阅读</Text>
         </TouchableOpacity>
       </View>

       <View style={{marginVertical: 5}}>

       </View>
       </View>
     )
   }
   goItem() {
     StatusBar.setBarStyle('default', false)
     this.props.navigation.navigate('Recipe', { info: {} })
   }
   _renderCell(){
     return(
       <TouchableOpacity onPress={() => this.goItem()} style={{paddingBottom: 20, flexDirection:'row', width:screenWidth-40, justifyContent:'space-between'}}>
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
   confirmLogIn() {
     this.setState({loggedIn: true})
   }
   _onFreshing() {
     Alert.alert('on refreshing...')
   }
   render(){
     return (
       <View>
         {this.state.loggedIn ?
           <FlatList
             refreshControl={
                  <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onFreshing.bind(this)}
                      tintColor='gray'
                  />
              }
              style={{backgroundColor: 'white', padding:20}}
              data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'}]}
              renderItem = {this._renderCell.bind(this)}
              ListHeaderComponent = {this._header.bind(this)}
          /> : <LogIn onPress={this.confirmLogIn.bind(this)}/>
         }
       </View>
     )
   }
 }


 const styles = StyleSheet.create({
   top: {
     paddingVertical:15,
     flex: 1,
     justifyContent:'center',
     alignItems:'center',
     borderBottomWidth: 5,
     borderColor: '#fff'
   },
   selected: {
     borderColor: 'red'
   }
 })
