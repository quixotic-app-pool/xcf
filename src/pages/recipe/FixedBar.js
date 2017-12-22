/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-13T12:10:54+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: FixedBar.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-21T17:11:22+08:00
 */
  import React, { PureComponent } from 'react'
  import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    AsyncStorage
  } from 'react-native'
  import Icon from 'react-native-vector-icons/Ionicons'
  import px2dp from './px2dp'
  let {width, height} = Dimensions.get('window')

  export default class FixedBar extends PureComponent{
      constructor(props){
        super(props)
        this.addFavorite = this.addFavorite.bind(this)
        this.goAsk = this.goAsk.bind(this)
      }
      async addFavorite() {
        var userId = AsyncStorage.getItem('USER_ID')
        // TODO: here we need to check what user_id looks like when valid
        if(false){
          await fetch('http://localhost:3000/api/addFavorite?userId=' + userId + '&recipeId=' + this.props.recipeId)
                 .then(function(response) {
                   //获取数据,数据处理
                   console.log('get server response when adding favorite:' + JSON.stringify(response));
                 });
        } else {
          this.props.leftPress()
        }
      }
      goAsk() {
         this.props.navigate()
      }
      render(){
        let { list, lens } = this.props
        return (
          <View style={styles.cartView}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
               <TouchableOpacity onPress={this.addFavorite} style={{flexDirection:'row', alignItems:'center'}}>
                 <Image style={{marginRight:5, width: 20, height:20}} source={require('./shoucang.png')}/>
                 <Text>收藏</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.goAsk} style={{flexDirection:'row', alignItems:'center'}}>
                 <Image style={{marginRight:5, width: 22, height:22}} source={require('./question.png')}/>
                 <Text>咨询</Text>
               </TouchableOpacity>
            </View>
          </View>
        )
      }
  }

  const styles = StyleSheet.create({
    cartView: {
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
      width,
      height: px2dp(46),
      zIndex: 100,
      backgroundColor:'white',
      justifyContent:'center'
    }
  })
