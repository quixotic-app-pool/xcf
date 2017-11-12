/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T10:36:55+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: HaoWuPage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-12T12:44:57+08:00
 */

 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'
 import ScrollableTabView, { ScrollableTabBar} from 'react-native-scrollable-tab-view'

 import { NavigationItem } from '../../widget'

 const screenWidth = Dimensions.get('window').width

 class HaoWuPage extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
         headerRight: (
           <View style={{ flexDirection: 'row' }}>
               <NavigationItem
                   iconStyle={{}}
                   icon={require('./cart.png')}
                   onPress={() => {
                   }}
               />
           </View>
         ),
         headerStyle: { backgroundColor: 'white'},
     })


   constructor() {
     super()
   }
   render() {
     return (
       <View  style={{flex:1}}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{alignItems:'center',padding: 20}}>
            <Text>用心挑选 简单生活</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <View style={{ padding: 5, flex:1, flexDirection: "row"}}>
              <Image style={{borderRadius:5,flex: 1, height: 100}} source={require('./temp1.jpeg')}/>
            </View>
            <View style={{ padding: 5, flex:1, flexDirection: "row"}}>
              <Image style={{borderRadius:5,flex: 1, height: 100}} source={require('./temp1.jpeg')}/>
            </View>
          </View>
        </View>
        <View style={{flex:1}}>
          <ScrollableTabView
              style={{paddingHorizontal: 10}}
              initialPage={0}
              locked={true}
              renderTabBar={()=><ScrollableTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
              tabBarPosition='overlayTop'
          >
            <CategoryList tabLabel="销魂素食"/>
            <CategoryList tabLabel="精选小厨电"/>
            <CategoryList tabLabel="馋嘴零食"/>
            <CategoryList tabLabel="烘焙发烧友"/>
            <CategoryList tabLabel="调味品"/>
            <CategoryList tabLabel="高人气酒单"/>
          </ScrollableTabView>
          </View>
        </View>
     )
   }
 }
 class CategoryList extends PureComponent {
   constructor() {
     super()
     this._renderCell = this._renderCell.bind(this)
   }
   _renderCell(item, index) {
     return (
       <View key={index} style={{padding: 5}}>
           <Image style={{width:screenWidth/2 - 20, height:screenWidth/2 - 20}} source={require('./temp1.jpeg')}/>
           <View style={{paddingTop:8, width:screenWidth/2 - 20, flexWrap:'wrap'}}>
              <View style={{borderRadius:2, width:24, alignItems:'center', padding:1, backgroundColor: 'rgb(244,75,68)'}}>
                <Text style={{fontSize:10}}>自营</Text>
              </View>
              <Text style={{paddingVertical:2}}>和泰来|襄阳特产牛肉面/牛杂面 220g</Text>
              <Text style={{paddingVertical:2, fontSize:12, color: 'rgb(150,150,153)'}}>正宗襄阳味，大块肉肉肉...</Text>
              <Text style={{paddingVertical:2, fontSize:12, color: 'rgb(150,150,153)'}}>已售178</Text>
              <View style={{flexDirection:'row', width:screenWidth/2 - 30}}>
                <Text style={{fontSize:12,color: 'rgb(244,75,68)'}}>￥13.8</Text>
              </View>
           </View>
       </View>
     )
   }
   render(){
     var data = [
       {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
       {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
     ]
     return (
       <ScrollView>
        <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems:'flex-end'}}>
          {data.map((item, index) =>
              this._renderCell(item, index)
          )}
        </View>
       </ScrollView>
     )
   }
 }


 // define your styles
 const styles = StyleSheet.create({
 });

 export default HaoWuPage;
