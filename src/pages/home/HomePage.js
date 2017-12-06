/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T07:27:14+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: HomePage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-06T11:38:14+08:00
 */

import React, { PureComponent } from 'react'
import { InteractionManager, StatusBar, View, Text, Alert, Dimensions, findNodeHandle,StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Search from 'react-native-search-box';
import { BlurView } from 'react-native-blur';
import Modal from 'react-native-modalbox';

import { NavigationItem } from '../../widget'

const screenWidth = Dimensions.get('window').width

class HomePage extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
        headerLeft: (
          <View style={{ width: screenWidth }}>
            <Search
              ref="search_box"
              backgroundColor='white'
              cancelButtonTextStyle={{color: 'black'}}
              beforeFocus={()=>navigation.state.params.topItemActionFocus()}
              onCancel={()=>navigation.state.params.topItemActionCancel()}
              /**
              * There many props that can customizable
              * Please scroll down to Props section
              */
            />

          </View>
        ),
        headerStyle: { backgroundColor: 'white'},
    })


  constructor() {
    super()
    this._layer1 = this._layer1.bind(this)
    this._renderCell1 = this._renderCell1.bind(this)
    this._studioList = this._studioList.bind(this)
    this._renderCell2 = this._renderCell2.bind(this)
    this._shopSpecial = this._shopSpecial.bind(this)
    this._renderCell3 = this._renderCell3.bind(this)
    this._recipeRec = this._recipeRec.bind(this)
    this._renderCell4 = this._renderCell4.bind(this)
    this._chefActivity = this._chefActivity.bind(this)
    this.topItemActionFocus = this.topItemActionFocus.bind(this)
    this.topItemActionCancel = this.topItemActionCancel.bind(this)
    this.state = { viewRef: null, toggle: false };
  }
  componentDidMount() {
        this.props.navigation.setParams({ topItemActionFocus: this.topItemActionFocus, topItemActionCancel: this.topItemActionCancel })
        // Workaround for a tricky race condition on initial load.
        InteractionManager.runAfterInteractions(() => {
          setTimeout(() => {
            this.setState({ viewRef: findNodeHandle(this.refs.bluredView) });
          }, 500);
        });
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
  goOneCategory() {
    StatusBar.setBarStyle('default', false)
    this.props.navigation.navigate('PureList', { info: {} })
  }
  _layer1() {
    return (
      <View style={{marginTop:20, flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity style={{ paddingRight:10, flexDirection: "row"}} onPress={this.goOneCategory.bind(this)}>
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
          <TouchableOpacity onPress={this.goOneCategory.bind(this)}>
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
  goItem() {
    StatusBar.setBarStyle('default', false)
    this.props.navigation.navigate('Recipe', { info: {} })
  }
  _renderCell1(item: Object) {
    console.log(item.key)
    return (
      <TouchableOpacity onPress={this.goItem.bind(this)} style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, width: 25, justifyContent:'center', flexDirection:'row', backgroundColor: '#FFD700', borderRadius:5}}>
              <Text style={{fontSize:10}}>坐标成都</Text>
            </View>
            <Text style={styles.textSize}>经典名小吃...</Text>
          </View>
        </View>

        <View style={{paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontSize: 15}}>发面大包：鲜汁肉&翡翠蔬菜</Text>
          <Text style={{fontSize: 10, color: 'rgb(150,150,153)'}}>522人参与</Text>
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
          <TouchableOpacity onPress={this.goOneCategory.bind(this)}>
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
      <TouchableOpacity onPress={this.goItem.bind(this)} style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
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
          <TouchableOpacity onPress={this.goOneCategory.bind(this)}>
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
      <TouchableOpacity onPress={this.goItem.bind(this)} style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth - 50}}>
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
  _chefActivity() {
    var data4 = [
      {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
      {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
    ]
    return (
      <View>
        <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize: 18}}>项目分类</Text>
          <TouchableOpacity onPress={this.goOneCategory.bind(this)}>
            <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
          </TouchableOpacity>
        </View>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={data4}
          renderItem={this._renderCell4}
        />
      </View>
    )
  }
  _renderCell4(item: Object) {
    return (
      <TouchableOpacity onPress={this.goItem.bind(this)} style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, width: 25, justifyContent:'center', flexDirection:'row', backgroundColor: '#FFD700', borderRadius:5}}>
              <Text style={{fontSize:10}}>烘焙系列</Text>
            </View>
          </View>
        </View>

        <View style={{paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontSize: 15}}>免费申请韩国酱料，上传食谱赢好礼！</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    var latestSearch = ['快手菜','下饭菜', '家常菜']
    var trend = ['蛋糕','红烧肉', '可乐鸡翅','蛋挞','家常菜', '面包','早餐','糖醋排骨',
                '豆腐','牛肉','排骨', '茄子','南瓜饼','虾', '土豆','宫保鸡丁','披萨', '汤','蛋黄酥','南瓜']
    return (
      <View ref={(view) => { this.bluredView = view }}>
        <ScrollView contentContainerStyle={{backgroundColor: 'white', padding: 15}}>
          {this._layer1()}
          {this._studioList()}
          {this._shopSpecial()}
          {this._recipeRec()}
          {this._chefActivity()}
        </ScrollView>
        <Modal style={[styles.modal, styles.modal4]} position={"center"} ref={"modal4"}>
         <Text style={{}}>微信：XXXXX</Text>
         <Text style={{}}>QQ：XXXXX</Text>
         <Text style={{}}>电话：XXXXX</Text>
         <Text style={{}}>小程序：XXXXX</Text>
         <Text style={{}}>网站：XXXXX</Text>
         <Text style={{}}>APP：XXXXX</Text>
        </Modal>
        {this.state.toggle && this.state.viewRef ?
          <BlurView
            style={styles.absolute}
            viewRef={this.state.viewRef}
            blurType="light"
            blurRadius={20}
            downsampleFactor={10}
            overlayColor={'rgba(0, 0, 255, .6)'}   // set a blue overlay
          /> : null
        }
        {this.state.toggle ?
          <ScrollView style={styles.absolute} contentContainerStyle={{backgroundColor: 'transparent', padding: 15, paddingTop:20}}>
              <View>
                <View style={{paddingBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
                  <Text>最近搜索</Text>
                  <Text>清空</Text>
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  {latestSearch.map((item, index)=>
                      <View key={index} style={{borderRadius:3, padding:5, paddingHorizontal:10, marginRight:8, marginBottom: 8, backgroundColor:'rgb(237,238,235)'}}>
                          <Text style={{fontSize:18}}>{item}</Text>
                      </View>
                  )}
                </View>
              </View>
              <View style={{marginTop: 30}}>
                <Text style={{paddingBottom:10, }}>流行搜索</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                  {trend.map((item, index)=>
                      <View key={index} style={{borderRadius:3, padding:5, paddingHorizontal:10, marginRight:8, marginBottom: 8, backgroundColor:'rgb(237,238,235)'}}>
                          <Text style={{fontSize:18}}>{item}</Text>
                      </View>
                  )}
                </View>
              </View>
          </ScrollView>
          : null
        }

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
