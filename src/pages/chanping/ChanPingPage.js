/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-13T13:06:24+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: ChanPing.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-13T17:48:28+08:00
 */

 import React, { PureComponent } from 'react'
 import { View, Text, Alert, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
 import Swiper from 'react-native-swiper';

 const screenWidth = Dimensions.get('window').width
 import { NavigationItem } from '../../widget'
 import FixedBar from './FixedBar'

 export default class ChanPingPage extends PureComponent {

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
         headerLeft: (
           <View style={{flexDirection:'row', left:20}}>
           <NavigationItem
               icon={require('./weixin.png')}
               onPress={() => {
               }}
           />
           <NavigationItem
               icon={require('./qq.png')}
               onPress={() => {
               }}
           />
           </View>
         ),
         headerStyle: { backgroundColor: 'white'},
     })

   constructor(){
     super()
     this._renderCritique = this._renderCritique.bind(this)
     this._renderCritiqueCell = this._renderCritiqueCell.bind(this)
     this._renderSwiper = this._renderSwiper.bind(this)
     this._renderSwiperCell = this._renderSwiperCell.bind(this)
   }

   _renderCritiqueCell(){
     return (
       <View style={{marginRight: 10, borderRadius:4, borderWidth:0.5, borderColor:'rgb(230,230,230)',marginVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth - 180}}>
         <View style={{flex:1, flexDirection: "row"}}>
           <Image style={{borderRadius:4, width:screenWidth - 180, height: 150}} source={require('./temp6.jpeg')}/>
           <View style={{marginHorizontal:10, width:screenWidth - 210, marginTop:10, flexDirection:'row', justifyContent:'space-between',position: 'absolute'}}>
             <View style={{backgroundColor:'rgba(0,0,0, 0.2)',paddingVertical:2, paddingHorizontal:2, justifyContent:'center',borderRadius:5}}>
               <Text style={{color:'white',fontSize:10}}>7天前</Text>
             </View>
             <View style={{paddingVertical:2, paddingHorizontal:2, justifyContent:'center', flexDirection:'row', backgroundColor: 'rgb(252,177,9)', borderRadius:5}}>
              <Text style={{fontSize:10, color:'white'}}>爱尝鲜</Text>
             </View>
           </View>
         </View>

         <View style={{alignItems:'center', top:-20}}>
           <Image style={{borderRadius:20, width:40, height:40}} source={require('./kim.jpeg')} />
           <Text style={{paddingVertical:5}}>MuscleWolf</Text>
           <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
           </View>
         </View>
         <View style={{height:100,paddingHorizontal: 10}}>
           <Text style={{fontSize: 12, opacity:0.8, lineHeight:16}}>
             最近做了蛮多甜点的，不过给大家分享的甜点都是需要烤箱才能做的，
             就有小伙伴问我没有烤箱的宿舍党怎么办？没有烤箱可。
           </Text>
         </View>
       </View>
     )
   }
   _renderCritique(){
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
           <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Image style={{width:15, height:15}} source={require('./star.png')}/>
            <Text style={{fontSize: 12, marginLeft:5}}>4.8星</Text>
           </View>
           <Text style={{fontSize:12, color: 'rgb(248,79,64)'}}>71人评价</Text>
         </View>
         <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
           data={data1}
           renderItem={this._renderCritiqueCell}
         />
       </View>
     )
   }
   _renderSwiper() {
     var data1 = [
       {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
       {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
     ]
     return (
       <View style={{marginTop:10, borderTopWidth:15, borderColor: 'rgba(230,230,230, 0.5)'}}>
         <View style={{paddingTop:20, flexDirection:'row', justifyContent:'center'}}>
           <Text style={{fontSize: 14}}>大家都在买</Text>
         </View>
         <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
           data={data1}
           renderItem={this._renderSwiperCell}
         />
       </View>
     )
   }
   _renderSwiperCell(item: Object) {
     console.log(item.key)
     return (
       <View style={{paddingVertical: 10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 50}}>
         <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
           <Image style={{borderRadius:4, flex: 1, height: 150}} source={require('./temp6.jpeg')}/>
         </View>

         <View style={{paddingRight: 10, paddingTop: 10}}>
           <Text style={{fontSize: 14}}>发面大包：鲜汁肉&翡翠蔬菜</Text>
           <Text style={{fontSize: 12, paddingTop:5}}>￥6.5</Text>
         </View>
       </View>
     )
   }
   render(){
     return (
       <View>
         <ScrollView
          style={{backgroundColor:'white'}}>
            <View style={{height: 300}}>
              <Swiper activeDotColor='rgb(248,79,64)' dotStyle={{top: 20}} activeDotStyle={{top: 20}} showsButtons={false}>
                <View >
                  <Image style={{width: screenWidth, height: 300}} source={require('./temp6.jpeg')}/>
                </View>
                <View >
                  <Image style={{width: screenWidth, height: 300}} source={require('./temp6.jpeg')}/>
                </View>
                <View>
                  <Image style={{width: screenWidth, height: 300}} source={require('./temp6.jpeg')}/>
                </View>
              </Swiper>
            </View>

            <View style={{paddingHorizontal:20}}>
              <View style={{borderBottomWidth:0.4, borderColor: 'rgb(230,230,230)', paddingVertical:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={{fontSize:12, opacity:0.7}}>评分</Text>
                  <Text style={{fontSize:12, opacity:0.7,paddingLeft: 5, color: 'rgb(249,79,64)'}}>4.8</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={{fontSize:12, opacity:0.7}}>月销</Text>
                  <Text style={{fontSize:12, opacity:0.7,paddingLeft: 5, color: 'rgb(249,79,64)'}}>333件</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={{fontSize:12, opacity:0.7}}>总销量</Text>
                  <Text style={{fontSize:12, opacity:0.7,paddingLeft: 5, color: 'rgb(249,79,64)'}}>333件</Text>
                </View>
              </View>

              <View style={{paddingVertical:10}}>
                <Text style={{paddingBottom:5, fontSize:12, opacity:0.8}}>拥有一颗很甜的心</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>十里桃林|正宗红安笤烤红薯5斤装甜蜜薯【坏果/少称包赔】</Text>
              </View>

              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'column'}}>
                  <View style={{paddingVertical:5,flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:14, color:'rgb(249,79,64)', marginRight:2}}>￥ 19.9</Text>
                    <Text style={{textDecorationLine: 'line-through', fontSize:10, opacity:0.8}}>￥51</Text>
                  </View>
                  <View style={{paddingHorizontal:10, paddingVertical:3,borderRadius:2, backgroundColor:'rgb(249,79,64)'}}>
                    <Text style={{color:'white', fontSize:12}}>每日限量优惠</Text>
                  </View>
                </View>
                <Text style={{fontSize:12, opacity:0.7}}>包邮</Text>
              </View>

              <View style={{marginVertical:5, borderRadius:2, backgroundColor:'rgb(235,237,230)', flexDirection:'row', paddingVertical:5, justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{fontSize:14, marginLeft:5,fontWeight:'100'}}>5斤红安甜蜜薯</Text>
                <Image style={{width: 20, height:20}} source={require('./right.png')} />
              </View>

              <View style={{height:30, justifyContent:'center', alignItems:'center',borderRadius:2, borderWidth:1, borderColor: 'rgb(249,79,64)'}}>
                <Text style={{color: 'rgb(249,79,64)', fontWeight:'bold'}}>领取优惠券</Text>
              </View>

              <View style={{borderBottomWidth:0.5, borderColor:'rgb(230,230,230)', marginVertical:5, borderRadius:2, flexDirection:'row', paddingVertical:5, justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:12,fontWeight:'bold', color:'rgb(249,79,64)'}}>促销</Text>
                  <Text style={{fontSize:12, marginLeft:5, fontWeight:'100'}}>每日限量优惠</Text>
                </View>
                <Image style={{width: 20, height:20}} source={require('./right.png')} />
              </View>

              <View>
                {this._renderCritique()}
              </View>

              <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10, borderBottomWidth:0.5, borderTopWidth: 0.5, borderColor:'rgb(230,230,230)'}}>
                  <View style={{marginVertical:10, flexDirection:'row', alignItems:'center'}}>
                    <Image style={{width:30, height:30}} source={require('./temp6.jpeg')} />
                    <View style={{marginLeft:5}}>
                      <Text style={{fontSize:12}}>_十里桃林</Text>
                      <Text style={{fontSize:12, opacity:0.7, marginTop:2}}>商品数：1</Text>
                    </View>
                  </View>
                  <View style={{borderRadius:3, justifyContent:'center',marginVertical:12,paddingHorizontal:3, borderWidth:1, borderColor:'rgb(249,79,64)'}}>
                    <Text style={{color:'rgb(249,79,64)'}}>去逛逛</Text>
                  </View>
              </View>

              <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text style={{fontSize:14, fontWeight:'bold'}}>店铺公告</Text>
                  <Image style={{width: 20, height:20}} source={require('./horn.png')} />
                </View>
                <View style={{marginVertical:5, borderRadius:5, padding:5, backgroundColor:'rgb(255,248,109)'}}>
                  <Text style={{fontSize:12, opacity:0.9, lineHeight:14}}>
                    最近做了蛮多甜点的，不过给大家分享的甜点都是需要烤箱才能做的，
                    就有小伙伴问我没有烤箱的宿舍党怎么办？没有烤箱可。
                    最近做了蛮多甜点的，不过给大家分享的甜点都是需要烤箱才能做的，
                    就有小伙伴问我没有烤箱的宿舍党怎么办？没有烤箱可。
                  </Text>
                </View>
              </View>

              <View>
                {this._renderSwiper()}
              </View>
              <View style={{marginVertical:100}}></View>
            </View>
         </ScrollView>
        <FixedBar ref={"shopbar"} list={[]} lens={{}}/>
       </View>
     )
   }
 }

 const styes= StyleSheet.create({

 })
