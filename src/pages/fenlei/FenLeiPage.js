/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T14:49:48+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: FenLeiPage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-04T13:34:44+08:00
 */
 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'

 const screenWidth = Dimensions.get('window').width

 class FenLeiPage extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
         headerTitle: (
             <TouchableOpacity style={{}}>
               <Text>菜谱分类</Text>
             </TouchableOpacity>
         ),
         headerStyle: { backgroundColor: 'white'},
     })


   constructor() {
      super()
   }
   _renderCell(item, index) {
     return (
       <View key={index} style={{padding:10}}>
         <View style={{}}>
           <Image style={{width:(screenWidth - 100)/4, height:(screenWidth - 100)/4, borderRadius:5}} source={require('./temp4.jpeg')}/>
           <View style={{shadowRadius:2, shadowOpacity:0.5, shadowOffset:{width:0, height:-10}, shadowColor: 'red',marginTop:(screenWidth - 100)/8, width:(screenWidth - 100)/4, height:(screenWidth - 100)/8, flexDirection:'column', alignItems:'center',justifyContent:'center', position: 'absolute', backgroundColor: 'rgba(123,22,11,0.1)'}}>
               <Text style={{color:'white',fontSize:12, fontWeight:'bold'}}>{item}</Text>
           </View>
         </View>
       </View>
     )
   }
   render(){
     var hotCateg = ['家常菜', '下饭菜', '烘焙', '肉类', '早餐', '蔬菜', '汤粥主食', '松下厨房']
     var caishi = ['快手菜', '素菜', '甜品饮品', '小吃', '零食', '懒人食谱', '下酒菜', '沙拉凉菜']
     var changjing = ['一人食', '宴客', '下午茶', '便当', '烹调方法', '宿舍', '宵夜', '海氏烘培屋']
     var fuliao = ['水果', '蛋类豆类', '奶类', '腌肉腌菜', '调味辅料', '粮油干果', '鱼虾水产']
     var quweifenlei = ['自制', '创意菜', '外貌协会', '厨具', '口味', '小清新', '野菜', '恒顺香醋']
     var dibiao = ['视频菜谱', '异国风味', '大师秘方', '餐厅Cosplay', '节日节气', '影视综艺']
     return (
       <ScrollView style={{padding:10, backgroundColor:'white'}}>
        <View style={{paddingVertical:10}}></View>
        <Text style={{padding:10,fontSize:18,fontWeight:'bold'}}>热门分类</Text>
        <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems:'flex-end'}}>
          {hotCateg.map((item, index)=>
              this._renderCell(item, index)
          )}
        </View>

        <View style={{paddingVertical:10}}></View>
        <Text style={{padding:10,fontSize:18,fontWeight:'bold'}}>菜式</Text>
        <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems:'flex-end'}}>
          {caishi.map((item, index)=>
              this._renderCell(item, index)
          )}
        </View>

        <View style={{paddingVertical:10}}></View>
        <Text style={{padding:10,fontSize:18,fontWeight:'bold'}}>场景</Text>
        <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems:'flex-end'}}>
          {changjing.map((item, index)=>
              this._renderCell(item, index)
          )}
        </View>

        <View style={{paddingVertical:10}}></View>
        <Text style={{padding:10,fontSize:18,fontWeight:'bold'}}>食材辅料</Text>
        <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems:'flex-end'}}>
          {fuliao.map((item, index)=>
              this._renderCell(item, index)
          )}
        </View>

        <View style={{paddingVertical:10}}></View>
        <Text style={{padding:10,fontSize:18,fontWeight:'bold'}}>趣味分类</Text>
        <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems:'flex-end'}}>
          {quweifenlei.map((item, index)=>
              this._renderCell(item, index)
          )}
        </View>

        <View style={{paddingVertical:10}}></View>
        <Text style={{padding:10,fontSize:18,fontWeight:'bold'}}>文化地标</Text>
        <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems:'flex-end'}}>
          {dibiao.map((item, index)=>
              this._renderCell(item, index)
          )}
        </View>
       </ScrollView>
     )
   }
 }

 export default FenLeiPage
