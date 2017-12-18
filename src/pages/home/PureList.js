/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-12-04T18:38:28+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: PureList.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-18T17:00:32+08:00
 */

 import React, { PureComponent } from 'react'
 import { InteractionManager, AsyncStorage, View, Text, Dimensions, StatusBar, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native'


 const screenWidth = Dimensions.get('window').width
 import { NavigationItem } from '../../widget'

 export default class PureList extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title,
    });

   constructor(){
     super()
     this.state = {
       refreshing: true,
       pageNum: 0,
       type: ''
     }
     this._renderCell = this._renderCell.bind(this)
     this._header = this._header.bind(this)
     this._onReachEnd = this._onReachEnd.bind(this)
     this._onRefresh = this._onRefresh.bind(this)
   }
   goItem(recipeId) {
     this.props.navigation.navigate('Recipe', { recipeId: recipeId })
   }
   componentDidMount() {
     InteractionManager.runAfterInteractions(() => {
        this.props.navigation.setParams({ title: '加载中' })
        this.setState({type: this.props.navigation.state.params.type})
        this._fetchData()
     })
   }
   async _fetchData() {
     var self = this
     self.setState({refreshing: true})
     var page = self.state.pageNum
     //  var userId = AsyncStorage.getItem('USER_ID')
     var userId = '13913351453'
     //  alert(JSON.stringify(userId))
     await fetch('http://localhost:3000/api/fetchlist?type=' + self.state.type + '&page=' + page + '&userid=' + userId)
            .then(function(response) {
              //获取数据,数据处理
              console.log('get server response when asking for list:' + JSON.stringify(response));
              self.setState({pageNum: self.state.pageNum + 1, refreshing: false})
              self.props.navigation.setParams({ title: self.props.navigation.state.params.type })
            });
   }
   _renderCell(item: Object){
     return(
       <TouchableOpacity onPress={this.goItem.bind(this, item.id)} style={{paddingBottom: 20, flexDirection:'row', width:screenWidth-40, justifyContent:'space-between'}}>
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
   _header() {
    //  ListHeaderComponent = {this._header.bind(this)}
     return (
       <View>
         <Text>it is header</Text>
       </View>
     )
   }
   _onReachEnd() {
    //  alert('to end')
    this._fetchData()
   }
   _onRefresh() {
     alert('refreshing')
   }
   render(){
     return (
       <FlatList
        style={{backgroundColor: 'white', padding:20}}
        data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'},{key: 'g'}, {key: 'h'}]}
        renderItem = {this._renderCell}
        onEndReached = {() => this._onReachEnd()}
        refreshing = {this.state.refreshing}
        onRefresh = {() => this._onRefresh()}
        onEndReachedThreshold = {0.1}
      />
     )
   }
 }
