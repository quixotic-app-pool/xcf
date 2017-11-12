/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T16:30:46+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: ShiJiPage.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-12T18:05:23+08:00
 */

 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'

 const screenWidth = Dimensions.get('window').width
 import { NavigationItem } from '../../widget'

 class ShiJiPage extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
         headerTitle: (
             <TouchableOpacity style={styles.searchBar}>
               <Icon name="ios-search" style={styles.searchIcon} size={20} color="#4F8EF7" />
               <Text style={{color: 'rgb(150,150,153)'}}>搜索商品</Text>
             </TouchableOpacity>
         ),
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

   constructor(){
     super()
     this._topic = this._topic.bind(this)
     this._renderHeader = this._renderHeader.bind(this)
     this._layer1 = this._layer1.bind(this)
     this._hotTopic = this._hotTopic.bind(this)
     this._renderCell1 = this._renderCell1.bind(this)
     this._renderListCell = this._renderListCell.bind(this)
   }
   _topic() {
     return (
       <View style={{paddingTop:20, borderBottomWidth:0.4, borderColor: 'rgb(230,230,230)'}}>
         <View style={{flexDirection: 'row', justifyContent: 'center'}}>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./toaster.png')} />
             <Text style={styles.topicText}>烘焙</Text>
           </View>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./vegi.png')} />
             <Text style={styles.topicText}>果蔬生鲜</Text>
           </View>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./pot.png')} />
             <Text style={styles.topicText}>器具</Text>
           </View>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./ticket.png')} />
             <Text style={styles.topicText}>领券</Text>
           </View>
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'center'}}>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./fastfood.png')} />
             <Text style={styles.topicText}>方便食品</Text>
           </View>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./import.png')} />
             <Text style={styles.topicText}>进口食品</Text>
           </View>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./pear.png')} />
             <Text style={styles.topicText}>时令鲜食</Text>
           </View>
           <View style={styles.topicView}>
             <Image style={styles.topicImg} source={require('./category.png')} />
             <Text style={styles.topicText}>全部分类</Text>
           </View>
         </View>
       </View>

     )
   }

   _layer1() {
     return (
       <View style={{padding:20, paddingBottom:10, paddingHorizontal:10, borderBottomWidth:0.4, borderColor: 'rgb(230,230,230)'}}>
        <Text style={{padding:10, fontWeight:'bold'}}>好店推荐</Text>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <View style={{padding: 5, flexDirection: "column"}}>
            <Image style={{width:(screenWidth - 60)/3, height:(screenWidth - 60)/3}} source={require('./temp1.jpeg')}/>
            <View style={{width:(screenWidth - 60)/3, height:(screenWidth - 60)/3, flexDirection:'row', alignItems:'flex-end',justifyContent:'flex-end', position: 'absolute'}}>
                <Text style={{padding:2, backgroundColor:'rgb(74,77,71)',color:'white',fontSize:12, fontWeight:'bold'}}>包邮</Text>
            </View>
            <View style={{width:(screenWidth - 60)/3, alignItems:'center'}}>
              <Text style={{paddingTop:5, fontSize:12}}>湖北莲藕5斤</Text>
              <Text style={{paddingTop:5, fontSize:12,color: 'rgb(244,75,68)'}}>￥35.8</Text>
              <Text style={{paddingTop:5, paddingVertical:2, fontSize:12, color: 'rgb(150,150,153)'}}>粉糯新鲜正当季</Text>
            </View>
          </View>
          <View style={{padding: 5, flexDirection: "column"}}>
            <Image style={{width:(screenWidth - 60)/3, height:(screenWidth - 60)/3}} source={require('./temp1.jpeg')}/>
            <View style={{width:(screenWidth - 60)/3, height:(screenWidth - 60)/3, flexDirection:'row', alignItems:'flex-end',justifyContent:'flex-end', position: 'absolute'}}>
                <Text style={{padding:2,backgroundColor:'rgb(74,77,71)',color:'white',fontSize:12, fontWeight:'bold'}}>包邮</Text>
            </View>
            <View style={{width:(screenWidth - 60)/3, alignItems:'center'}}>
              <Text style={{paddingTop:5, fontSize:12}}>湖北莲藕5斤</Text>
              <Text style={{paddingTop:5, fontSize:12,color: 'rgb(244,75,68)'}}>￥35.8</Text>
              <Text style={{paddingTop:5, paddingVertical:2, fontSize:12, color: 'rgb(150,150,153)'}}>粉糯新鲜正当季</Text>
            </View>
          </View>
          <View style={{padding: 5, flexDirection: "column"}}>
            <Image style={{width:(screenWidth - 60)/3, height:(screenWidth - 60)/3}} source={require('./temp1.jpeg')}/>
            <View style={{width:(screenWidth - 60)/3, height:(screenWidth - 60)/3, flexDirection:'row', alignItems:'flex-end',justifyContent:'flex-end', position: 'absolute'}}>
                <Text style={{padding:2,backgroundColor:'rgb(74,77,71)',color:'white',fontSize:12, fontWeight:'bold'}}>包邮</Text>
            </View>
            <View style={{width:(screenWidth - 60)/3, alignItems:'center'}}>
              <Text style={{paddingTop:5, fontSize:12}}>湖北莲藕5斤</Text>
              <Text style={{paddingTop:5, fontSize:12,color: 'rgb(244,75,68)'}}>￥35.8</Text>
              <Text style={{paddingTop:5, paddingVertical:2, fontSize:12, color: 'rgb(150,150,153)'}}>粉糯新鲜正当季</Text>
            </View>
          </View>
        </View>
       </View>
     )
   }
   _hotTopic() {
     var data1 = [
       {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
       {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
     ]
     return (
       <View style={{paddingHorizontal:10, paddingBottom:10, borderBottomWidth:1, borderColor: 'rgb(230,230,230)'}}>
         <View style={{paddingTop:20, flexDirection:'row', justifyContent:'space-between'}}>
           <Text style={{fontSize: 14, fontWeight:'100'}}>流行菜单</Text>
         </View>
         <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
           data={data1}
           renderItem={this._renderCell1}
         />
       </View>
     )
   }
   _renderCell1(item: Object) {
     return (
       <View style={{paddingRight: 5, paddingVertical:10,width:(screenWidth - 60)/3}}>
         <View style={{}}>
           <Image style={{height: (screenWidth - 80)/3, width:(screenWidth - 80)/3}} source={require('./temp1.jpeg')}/>
           <View style={{ alignItems:'center',justifyContent:'center',height: (screenWidth - 80)/3, width:(screenWidth - 80)/3, position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)'}}>
               <Text style={{color:'white',fontSize:18, fontWeight:'bold'}}>爱尝鲜</Text>
           </View>
         </View>
       </View>
     )
   }
   _renderHeader(){
     return (
       <View>
        {this._topic()}
        {this._layer1()}
        {this._hotTopic()}
       </View>
     )
   }

   _renderListCell(item, index) {
     return (
       <View key={index} style={{padding: 10}}>
           <Image style={{width:(screenWidth-60)/2, height:(screenWidth-60)/2}} source={require('./temp1.jpeg')}/>
           <View style={{paddingTop:8, width:(screenWidth-60)/2, flexWrap:'wrap'}}>
              <Text style={{paddingVertical:2}}>和泰来|襄阳特产牛肉面/牛杂面 220g</Text>
              <Text style={{paddingVertical:2, fontSize:12, color: 'rgb(150,150,153)'}}>正宗襄阳味，大块肉肉肉...</Text>
              <View style={{flexDirection:'row', width:(screenWidth-60)/2, justifyContent:'space-between'}}>
                <Text style={{fontSize:12,color: 'rgb(244,75,68)'}}>￥13.8</Text>
                <Text style={{fontSize:12, color: 'rgb(150,150,153)'}}>已售178</Text>
              </View>
           </View>
       </View>
     )
   }
   render(){
     return (
       <FlatList
        data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'}, {key: 'f'},{key: 'g'},{key: 'h'}]}
        style={{backgroundColor:'white'}}
        numColumns={2}
        style={{padding:10,backgroundColor:'white'}}
        renderItem={this._renderListCell}
        ListHeaderComponent={this._renderHeader}
      />
     )
   }
 }

 const styles= StyleSheet.create({

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
     topicImg: {
       width: 23,
       height: 23,
       marginBottom: 10
     },
     topicView: {
       margin: 15,
       flexDirection: 'column',
       alignItems: 'center',
       width: (screenWidth - 120)/4
     },
     topicText: {
       fontSize: 12,
     }
 })

export default ShiJiPage
