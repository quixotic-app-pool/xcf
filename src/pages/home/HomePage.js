/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T07:27:14+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: HomePage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-18T17:30:38+08:00
 */

import React, { PureComponent } from 'react'
import { RefreshControl, InteractionManager, StatusBar, View, Text, Alert, Dimensions, findNodeHandle,StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modalbox';

import { NavigationItem } from '../../widget'
Global = require('../../widget/Global')

const screenWidth = Dimensions.get('window').width

class HomePage extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
       title: navigation.state.params ? navigation.state.params.title : '加载中',
   });

  constructor() {
    super()
    this.state = {
      refreshing: true
    }
    this._layer1 = this._layer1.bind(this)
    this._renderCell1 = this._renderCell1.bind(this)
    this._studioList = this._studioList.bind(this)
    this._renderCell2 = this._renderCell2.bind(this)
    this._shopSpecial = this._shopSpecial.bind(this)
    this._renderCell3 = this._renderCell3.bind(this)
    this._recipeRec = this._recipeRec.bind(this)
    this.topItemActionFocus = this.topItemActionFocus.bind(this)
    this.topItemActionCancel = this.topItemActionCancel.bind(this)
  }
  componentDidMount() {
    Global.loggedIn = true
    // StatusBar.setBarStyle('light-content', false)
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.setParams({ title: '加载中' })
      this._fetchMainPageContent()
    })
  }
  async _fetchMainPageContent() {
    var self = this
    self.props.navigation.setParams({ title: '加载中' })
    self.setState({refreshing: true})
    await fetch('http://localhost:3000/api/fetchmainpagecontent')
           .then(function(response) {
             //获取数据,数据处理
             console.log('get server response when asking for list:' + JSON.stringify(response));
             self.props.navigation.setParams({ title: '主页' })
             self.setState({refreshing: false})
           });
  }
  _refreshContent() {
    this._fetchMainPageContent()
  }
  topItemActionFocus(){
      if(this.state.toggle == false){
        this.setState({toggle: true})
      }
      return
  }
  topItemActionCancel(){
      if(this.state.toggle == true){
        this.setState({toggle: false})
      }
      return
  }
  goOneCategory(type) {
    this.props.navigation.navigate('PureList', { type: type })
  }
  _layer1() {
    return (
      <View style={{marginTop:20, flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity style={{ paddingRight:10, flexDirection: "row"}} onPress={this.goOneCategory.bind(this, '本周流行菜谱')}>
          <Image style={{width: (screenWidth - 46 )/2, height: 100}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:55, position: 'absolute', backgroundColor: 'transparent'}}>
            <Text style={styles.textSize}>本周</Text>
            <Text style={styles.textSize}>流行菜谱</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.refs.modal4.open()} tyle={{ paddingLeft: 10, flexDirection: "row"}}>
          <Image style={{width: (screenWidth - 46)/2, height: 100}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:55, position: 'absolute', backgroundColor: 'transparent'}}>
            <Text style={styles.textSize}>联系我们</Text>
            <Text style={styles.textSize}>在线咨询</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  _studioList() {
    var data1 = [
      {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
      {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
    ]
    return (
      <View>
        <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize: 18}}>热门项目</Text>
          <TouchableOpacity onPress={this.goOneCategory.bind(this, '热门项目')}>
            <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={this._renderCell1}
        />
      </View>
    )
  }
  goItem(recipeId) {
    // StatusBar.setBarStyle('default', false)
    this.props.navigation.navigate('Recipe', { recipeId: recipeId })
  }
  _renderCell1(item: Object) {
    console.log(item.key)
    return (
      <TouchableOpacity onPress={this.goItem.bind(this, item.id)} style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, width: 25, justifyContent:'center', flexDirection:'row', backgroundColor: '#FFD700', borderRadius:5}}>
              <Text style={{fontSize:10}}>成都特色</Text>
            </View>
            <Text style={styles.textSize}>经典名小吃...</Text>
          </View>
        </View>

        <View style={{paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontSize: 15}}>发面大包：鲜汁肉&翡翠蔬菜</Text>
        </View>
      </TouchableOpacity>
    )
  }
  _shopSpecial() {
    var data2 = [
      {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
      {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
    ]
    return (
      <View>
        <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize: 18}}>活动折扣</Text>
          <TouchableOpacity onPress={this.goOneCategory.bind(this, '活动折扣')}>
            <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={data2}
          renderItem={this._renderCell2}
        />
      </View>
    )
  }
  _renderCell2(item: Object) {
    return (
      <TouchableOpacity onPress={this.goItem.bind(this, item.id)} style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, width: 25, justifyContent:'center', flexDirection:'row', backgroundColor: '#FFD700', borderRadius:5}}>
              <Text style={{fontSize:10}}>学二送一</Text>
            </View>
          </View>
        </View>

        <View style={{paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontSize: 15}}>10分钟考出留蜜的红薯，全靠这个神器！</Text>
        </View>
      </TouchableOpacity>
    )
  }
  _recipeRec() {
    var data3 = [
      {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
      {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
    ]
    return (
      <View>
        <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize: 18}}>最新上架</Text>
          <TouchableOpacity onPress={this.goOneCategory.bind(this, '最新上架')}>
            <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={data3}
          renderItem={this._renderCell3}
        />
      </View>
    )
  }

  _renderCell3(item: Object) {
    return (
      <TouchableOpacity onPress={this.goItem.bind(this, item.id)} style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth - 50}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, width: 25, justifyContent:'center', flexDirection:'row', backgroundColor: '#FFD700', borderRadius:5}}>
              <Text style={{fontSize:10}}>快手热门</Text>
            </View>
            <Text style={styles.textSize}>猪肉这样做，香到放不下筷...</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    var latestSearch = ['快手菜','下饭菜', '家常菜']
    var trend = ['蛋糕','红烧肉', '可乐鸡翅','蛋挞','家常菜', '面包','早餐','糖醋排骨',
                '豆腐','牛肉','排骨', '茄子','南瓜饼','虾', '土豆','宫保鸡丁','披萨', '汤','蛋黄酥','南瓜']
    return (
      <View style={{backgroundColor: '#ffffff'}}>
        <ScrollView
         refreshControl={
              <RefreshControl
                  onRefresh={() => this._refreshContent()}
                  refreshing={this.state.refreshing}
              />
          }
          contentContainerStyle={{backgroundColor: 'white', padding: 15}}>
          {this._layer1()}
          {this._shopSpecial()}
          {this._studioList()}
          {this._recipeRec()}
        </ScrollView>
        <Modal style={[styles.modal, styles.modal4]} position={"center"} ref={"modal4"}>
         <Text style={{fontWeight: 'bold', paddingBottom: 10}}>微信：flyinghawker</Text>
         <Text style={{fontWeight: 'bold', paddingBottom: 10}}>QQ：775109338</Text>
         <Text style={{fontWeight: 'bold', paddingBottom: 10}}>电话：13913351453</Text>
         <Text style={{fontWeight: 'bold', paddingBottom: 10}}>小程序：《美食项目接不停》</Text>
         <Text style={{fontWeight: 'bold', paddingBottom: 10}}>网站：www.gourmet.com</Text>
        </Modal>
       </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  absolute:{
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
  textSize: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  topicImg: {
    width: 30,
    height: 30,
    marginBottom: 10
  },
  topicView: {
    margin: 15,
    flexDirection: 'column',
    alignItems: 'center'
  },
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
  },
  modal4: {
    height: 300
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default HomePage;
