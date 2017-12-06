/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T13:45:12+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: PaiHangBangPage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-04T14:37:26+08:00
 */
 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native'

const screenWidth = Dimensions.get('window').width

class PaiHangBangPage extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={{}}>
              <Text>排行榜</Text>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: 'white'},
    })

  constructor(){
    super()
    this._renderCell1 = this._renderCell1.bind(this)
  }
  _renderCell1(item: Object) {
    return (
      <View style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth - 50}}>
        <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
          <Image style={{borderRadius:5,flex: 1, height: 250}} source={require('./temp3.jpeg')}/>
          <View style={{width:screenWidth - 50, flexDirection:'column', alignItems:'center',justifyContent:'center',height: 250, width: screenWidth - 60, position: 'absolute', backgroundColor: 'transparent'}}>
              <Text style={{color:'white',fontSize:18, fontWeight:'bold'}}>猎奇向!</Text>
              <Text style={{color:'white',fontSize:10, paddingTop:5}}>12个菜谱</Text>
          </View>
        </View>
      </View>
    )
  }
  render() {
    var data1 = [
      {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
      {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
      {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
    ]
    return (
      <ScrollView style={{ backgroundColor: 'white', padding: 15}}>
        <View style={{width:screenWidth - 30, paddingVertical:10, flexDirection:'row', justifyContent:'center'}}>
          <View style={{padding: 5, flex:1, flexDirection: "row"}}>
            <Image style={{borderRadius:4, flex: 1, height: 150}} source={require('./temp3.jpeg')}/>
            <View style={{borderRadius:10, padding:4, marginLeft: 5, marginTop:-5, position: 'absolute', backgroundColor: 'rgb(244,176,38)'}}>
              <Text style={{fontSize:12, color: 'white'}}>9分以上的菜谱</Text>
            </View>
            <View style={{marginLeft: 20, marginTop:110, position: 'absolute', backgroundColor: 'transparent'}}>
              <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>高分菜谱</Text>
              <Text style={{paddingTop:5,color: 'white', fontSize:12}}>十几万道菜里9分以上 的菜谱，绝赞</Text>
            </View>
          </View>
        </View>

        <View style={{width:screenWidth - 30, flexDirection:'row', justifyContent:'center'}}>
          <View style={{padding: 5, flex:1, flexDirection: "row"}}>
            <Image style={{borderRadius:4, flex: 1, height: 150}} source={require('./temp3.jpeg')}/>
            <View style={{borderRadius:10, padding:4, marginLeft: 5, marginTop:-5, position: 'absolute', backgroundColor: 'rgb(244,176,38)'}}>
              <Text style={{fontSize:12, color: 'white'}}>1000人做过的菜谱</Text>
            </View>
            <View style={{marginLeft: 20, marginTop:110, position: 'absolute', backgroundColor: 'transparent'}}>
              <Text style={{color: 'white', fontSize:18, fontWeight:'bold'}}>荣誉殿堂</Text>
              <Text style={{paddingTop:5,color: 'white', fontSize:12}}>高人气菜谱，正在通往食谱之巅</Text>
            </View>
          </View>
        </View>

        <View style={{width:screenWidth - 30, paddingVertical:10,borderBottomWidth:1, borderColor: 'rgb(230,230,230)'}}>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={{padding: 5, flex:1, flexDirection: "row"}}>
              <Image style={{borderRadius:5,flex: 1, height: 100}} source={require('./temp3.jpeg')}/>
              <View style={{marginLeft: 20, marginTop:75, position: 'absolute', backgroundColor: 'transparent'}}>
                <Text style={{fontWeight:'bold',color:'white'}}>十月最佳</Text>
              </View>
            </View>
            <View style={{padding: 5, flex:1, flexDirection: "row"}}>
              <Image style={{borderRadius:5,flex: 1, height: 100}} source={require('./temp3.jpeg')}/>
              <View style={{marginLeft: 20, marginTop:75, position: 'absolute', backgroundColor: 'transparent'}}>
                <Text style={{fontWeight:'bold',color:'white'}}>视频菜谱</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={{padding: 5, flex:1, flexDirection: "row"}}>
              <Image style={{borderRadius:5,flex: 1, height: 100}} source={require('./temp3.jpeg')}/>
              <View style={{marginLeft: 20, marginTop:75, position: 'absolute', backgroundColor: 'transparent'}}>
                <Text style={{fontWeight:'bold',color:'white'}}>新秀菜谱</Text>
              </View>
            </View>
            <View style={{padding: 5, flex:1, flexDirection: "row"}}>
              <Image style={{borderRadius:5,flex: 1, height: 100}} source={require('./temp3.jpeg')}/>
              <View style={{marginLeft: 20, marginTop:75, position: 'absolute', backgroundColor: 'transparent'}}>
                <Text style={{fontWeight:'bold',color:'white'}}>编辑选新</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{paddingBottom:20, borderBottomWidth:1, borderColor: 'rgb(230,230,230)'}}>
          <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontSize: 14, fontWeight:'100'}}>流行菜单</Text>
          </View>
          <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
            data={data1}
            renderItem={this._renderCell1}
          />
        </View>

        <View>
          <View style={{paddingVertical:20}}>
            <Text style={{fontSize: 14, fontWeight:'100'}}>市集排行榜</Text>
          </View>

          <View style={{paddingBottom:10,borderBottomWidth:1, borderColor:'rgb(230,230,230)', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>市集爆款</Text>
              <Text style={{fontSize: 12, paddingTop:10,fontWeight:'100'}}>最近30天销量最高</Text>
            </View>
            <Image style={{borderRadius:5,width: 60, height:60}} source={require('./temp3.jpeg')}/>
          </View>

          <View style={{paddingVertical:10,borderBottomWidth:1, borderColor:'rgb(230,230,230)', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>市集上新</Text>
              <Text style={{fontSize: 12, paddingTop:10,fontWeight:'100'}}>最新上架商品</Text>
            </View>
            <Image style={{borderRadius:5,width: 60, height:60}} source={require('./temp3.jpeg')}/>
          </View>

          <View style={{paddingVertical:20}}>
            <Text style={{fontSize: 14, fontWeight:'100'}}>用户排行榜</Text>
          </View>

          <View style={{paddingBottom:10,borderBottomWidth:1, borderColor:'rgb(230,230,230)', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>认证厨师</Text>
              <Text style={{fontSize: 12, paddingTop:10,fontWeight:'100'}}>厨房中认证的菜谱作者</Text>
            </View>
            <Image style={{borderRadius:30,width: 60, height:60}} source={require('./temp3.jpeg')}/>
          </View>

          <View style={{paddingVertical:10,borderBottomWidth:1, borderColor:'rgb(230,230,230)', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <View>
              <Text style={{fontSize: 16, fontWeight:'bold'}}>作品达人</Text>
              <Text style={{fontSize: 12, paddingTop:10,fontWeight:'100'}}>作品超过100的厨友</Text>
            </View>
            <Image style={{borderRadius:30,width: 60, height:60}} source={require('./temp3.jpeg')}/>
          </View>
          <View style={{padding:20}}></View>

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({


})

export default PaiHangBangPage;
