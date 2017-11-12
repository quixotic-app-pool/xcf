/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T07:27:14+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: HomePage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-12T10:34:56+08:00
 */

import React, { PureComponent } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { NavigationItem } from '../../widget'

const screenWidth = Dimensions.get('window').width

class HomePage extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
              <Icon name="ios-search" style={styles.searchIcon} size={20} color="#4F8EF7" />
              <Text style={{color: 'rgb(150,150,153)'}}>搜索菜谱、食材</Text>
            </TouchableOpacity>
        ),
        headerRight: (
          <View style={{ flexDirection: 'row' }}>
              <NavigationItem
                  iconStyle={{}}
                  icon={require('./basket.png')}
                  onPress={() => {

                  }}
              />
          </View>
        ),
        headerLeft: (
          <NavigationItem
              icon={require('./plus.png')}
              onPress={() => {
              }}
          />
        ),
        headerStyle: { backgroundColor: 'white'},
    })


  constructor() {
    super()
    this._topic = this._topic.bind(this)
    this._layer1 = this._layer1.bind(this)
    this._ads1 = this._ads1.bind(this)
    this._ads2 = this._ads2.bind(this)
    this._renderCell1 = this._renderCell1.bind(this)
    this._studioList = this._studioList.bind(this)
    this._renderCell2 = this._renderCell2.bind(this)
    this._shopSpecial = this._shopSpecial.bind(this)
    this._renderCell3 = this._renderCell3.bind(this)
    this._recipeRec = this._recipeRec.bind(this)
    this._renderCell4 = this._renderCell4.bind(this)
    this._chefActivity = this._chefActivity.bind(this)
  }

  _topic() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.topicView}>
          <Image style={styles.topicImg} source={require('./utensil.png')} />
          <Text>厨房好物</Text>
        </View>
        <View style={styles.topicView}>
          <Image style={styles.topicImg} source={require('./toaster.png')} />
          <Text>厨房问答</Text>
        </View>
        <View style={styles.topicView}>
          <Image style={styles.topicImg} source={require('./crown.png')} />
          <Text>排行榜</Text>
        </View>
        <View style={styles.topicView}>
          <Image style={styles.topicImg} source={require('./category.png')} />
          <Text>菜谱分类</Text>
        </View>
      </View>
    )
  }

  _layer1() {
    return (
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{padding: 5, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 100}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:55, position: 'absolute', backgroundColor: 'transparent'}}>
            <Text style={styles.textSize}>本周</Text>
            <Text style={styles.textSize}>流行菜谱</Text>
          </View>
        </View>
        <View style={{padding: 5, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 100}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:55, position: 'absolute', backgroundColor: 'transparent'}}>
            <Text style={styles.textSize}>查看好友</Text>
            <Text style={styles.textSize}>并关注我们</Text>
          </View>
        </View>
      </View>
    )
  }

  _ads1() {
    return (
      <View style={{flex:1, flexDirection: "row", paddingVertical: 10}}>
        <Image style={{flex:1, height: 100}} source={require('./temp2.jpeg')}/>
      </View>
    )
  }
  _ads2() {
    return (
      <View style={{flex:1, flexDirection: "row", paddingVertical: 10}}>
        <Image resizeMode={'center'} style={{flex:1, height: 100}} source={require('./temp2.jpeg')}/>
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
          <Text style={{fontSize: 18}}>厨studio课堂</Text>
          <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
        </View>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
          data={data1}
          renderItem={this._renderCell1}
        />
      </View>
    )
  }
  _renderCell1(item: Object) {
    console.log(item.key)
    return (
      <View style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, width: 25, justifyContent:'center', flexDirection:'row', backgroundColor: 'white', borderRadius:5}}>
              <Text style={{fontSize:10}}>讲师</Text>
            </View>
            <Text style={styles.textSize}>sanyanfoo...</Text>
          </View>
        </View>

        <View style={{paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontSize: 15}}>发面大包：鲜汁肉&翡翠蔬菜</Text>
          <Text style={{fontSize: 10, color: 'rgb(150,150,153)'}}>522人参与</Text>
        </View>
      </View>
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
          <Text style={{fontSize: 18}}>市集精选折扣</Text>
          <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
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
      <View style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, width: 25, justifyContent:'center', flexDirection:'row', backgroundColor: 'white', borderRadius:5}}>
              <Text style={{fontSize:10}}>达人推荐</Text>
            </View>
          </View>
        </View>

        <View style={{paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontSize: 15}}>10分钟考出留蜜的红薯，全靠这个神器！</Text>
        </View>
      </View>
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
          <Text style={{fontSize: 18}}>市集精选折扣</Text>
          <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
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
      <View style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth - 50}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
          <View style={{marginLeft: 20, marginTop:200, position: 'absolute', backgroundColor: 'transparent'}}>
            <View style={{paddingVertical:2, justifyContent:'center', flexDirection:'column', flexWrap: 'wrap'}}>
              <Text style={styles.textSize}>猪肉这样做，香到放不下筷...</Text>
              <Text style={{fontSize: 12, color: 'white'}}>62道菜谱</Text>
            </View>
          </View>
        </View>
      </View>
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
          <Text style={{fontSize: 18}}>厨房活动</Text>
          <Text style={{fontSize:15, color: 'rgb(150,150,153)'}}>查看全部</Text>
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
      <View style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 20}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{flex: 1, height: 250}} source={require('./temp1.jpeg')}/>
        </View>

        <View style={{paddingRight: 10, paddingTop: 10}}>
          <Text style={{fontSize: 15}}>免费申请韩国酱料，上传食谱赢好礼！</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: 'white', padding: 15}}>
        {this._topic()}
        {this._layer1()}
        {this._ads1()}
        {this._studioList()}
        {this._shopSpecial()}
        {this._recipeRec()}
        {this._chefActivity()}
        {this._ads2()}
      </ScrollView>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  textSize: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  topicImg: {
    width: 23,
    height: 23,
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
});

export default HomePage;
