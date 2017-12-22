/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-14T08:57:48+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: MinePage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-21T16:38:29+08:00
 */


 import React, { PureComponent } from 'react'
 import { StatusBar, RefreshControl, Alert, View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'
 import LogIn from '../login/LogInPage'

 import { NavigationItem } from '../../widget'

 const screenWidth = Dimensions.get('window').width
 const screenHeight = Dimensions.get('window').height

 export default class MinePage extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params ? navigation.state.params.title : '加载中',
    });

   state = {
      loggedIn: false,
      selected: 0,
      refreshing: false,
      pageNum: 0,
      data: []
    };

   constructor() {
     super()
     this.chooseTopic = this.chooseTopic.bind(this)
     this.goItem = this.goItem.bind(this)
   }
   async chooseTopic(index, pageNum) {
      var self = this
      self.setState({selected: index, refreshing: true})
      if(pageNum === 0) {
        self.setState({pageNum: 0})
      }
      self.props.navigation.setParams({ title: '加载中' })
      //  var userId = AsyncStorage.getItem('USER_ID')
      var userId = '13913351453'

      await fetch('http://localhost:3000/api/fetchfavoriteorread?index=' + index + '&page=' + this.state.pageNum + '&userid=' + userId)
             .then(function(res){
               return res.json();
             })
             .then(function(response) {
               //获取数据,数据处理
               console.log('get server response when asking for list of favorite or read:' + JSON.stringify(response));
               self.setState({data: response.data})
               self.props.navigation.setParams({ title: '我' })
               self.setState({refreshing: false, pageNum: self.state.pageNum + 1})
             });
   }
   _header() {
     return (
       <View>
       <View style={{borderBottomWidth:0.5, borderColor:'rgb(230,230,230)',flexDirection:'row', justifyContent:'space-around'}}>
         <TouchableOpacity onPress={() => this.chooseTopic(0, 0)} style={[styles.top, this.state.selected === 0 ? styles.selected: null]}>
           <Image style={{width:25, height:25}} source={require('./heart.png')} />
           <Text style={{paddingTop:10,fontSize:12, opacity:0.9}}>我的收藏</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => this.chooseTopic(1, 0)} style={[styles.top, this.state.selected === 1 ? styles.selected: null]}>
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
    //  StatusBar.setBarStyle('default', false)
     this.props.navigation.navigate('Recipe', { info: {} })
   }
   _renderCell(obj: Object){
     var item = obj.item;
     // TODO: here we need to test with other configuration done
     return(
       <TouchableOpacity onPress={() => this.goItem()} style={{paddingBottom: 20, flexDirection:'row', width:screenWidth-40, justifyContent:'space-between'}}>
          <View style={{}}>
            <Image style={{width:(screenWidth-50)/2, height:100}} source={require('./temp1.jpeg')} />
            <View style={{width:(screenWidth - 50)/2, height:100, flexDirection:'row', alignItems:'flex-start',justifyContent:'flex-start', position: 'absolute'}}>
                <Text style={{padding:2, backgroundColor:'rgb(278,176,15)',color:'white',fontSize:12, fontWeight:'bold'}}>独家</Text>
            </View>
          </View>

          <View style={{width:(screenWidth-50)/2, flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontWeight:'bold', fontSize:18}}>精准配方，媲美周黑鸭的卤鸭脚！</Text>
          </View>
       </TouchableOpacity>
     )
   }
   confirmLogIn() {
     this.setState({loggedIn: true})
   }
   _onFreshing() {
     this.chooseTopic(this.state.selected, 0)
   }
   _onReachEnd() {
     this.chooseTopic(this.state.selected, this.state.pageNum)
   }
   render(){
     if(this.state.data) {
       this.state.data.forEach(function(item, index) {
         item.key = index
       })
     }
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
              style={{backgroundColor: 'white', padding:20, height: screenHeight}}
              data={this.state.data}
              renderItem = {this._renderCell.bind(this)}
              ListHeaderComponent = {this._header.bind(this)}
              onEndReached = {() => this._onReachEnd()}
              onEndReachedThreshold = {0.2}
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
