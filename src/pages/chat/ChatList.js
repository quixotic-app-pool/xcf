/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-12-04T13:24:47+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: ChatList.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-18T16:29:35+08:00
 */

  import React, { PureComponent } from 'react'
  import { RefreshControl, Alert, StatusBar, View, Text, Dimensions, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native'
  import Icon from 'react-native-vector-icons/Ionicons'

  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width
  import { NavigationItem } from '../../widget'
  import LogIn from '../login/LogInPage'

  class ChatList extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
          headerTitle: (
              <TouchableOpacity style={{}}>
                <Text>WeiChat</Text>
              </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: 'white'},
      })

    state = {
       loggedIn: true,
       refreshing: false
     };
    constructor(){
      super()
      this._renderListCell = this._renderListCell.bind(this)
      this.goChat = this.goChat.bind(this)
    }
    goChat(info: Object) {
        // StatusBar.setBarStyle('default', false)
        this.props.navigation.navigate('ChatScreen', { info: {} })
    }
    _renderListCell(item, index) {
      return (
        <TouchableOpacity onPress={this.goChat} key={index} style={{padding: 4, flexDirection: 'row', borderBottomWidth:0.4, borderColor: 'rgb(230,230,230)'}}>
          <View>
            <Image style={{borderRadius:3, width:50, height:50}} source={require('./trump.jpg')}/>
          </View>
          <View style={{width: screenWidth - 129, paddingLeft: 5, flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: 16, marginBottom: 5}}>小芳</Text>
            <Text style={{fontSize: 12, opacity: 0.7}}>[10条] 来成都找我玩吧</Text>
          </View>
          <View style={{width: 60, marginRight: 15}}>
            <Text style={{opacity: 0.7, fontSize: 12}}>1:23pm</Text>
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
      var latestSearch = ['快手菜','下饭菜', '家常菜']
      return (
        <View style={{backgroundColor:'white', height: screenHeight}}>
          {this.state.loggedIn ?
            <FlatList
            refreshControl={
                 <RefreshControl
                     refreshing={this.state.refreshing}
                     onRefresh={this._onFreshing.bind(this)}
                     tintColor='gray'
                 />
             }
             data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'},{key: 'h'}]}
             style={{padding:10,backgroundColor:'white'}}
             renderItem={this._renderListCell}
           /> : <LogIn onPress={this.confirmLogIn.bind(this)}/>
          }
        </View>

      )
    }
  }

  const styles= StyleSheet.create({

  })

 export default ChatList
