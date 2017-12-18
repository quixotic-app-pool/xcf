/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-13T08:50:53+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: recipe.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-18T18:06:04+08:00
 */
 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'
 import ParallaxScrollView from 'react-native-parallax-scroll-view';
 import { RaisedTextButton } from '../../widget/react-native-material-buttons';
 import LogIn from '../login/LogInPage'

 const screenWidth = Dimensions.get('window').width
 import FixedBar from './FixedBar'
 import { NavigationItem } from '../../widget'
 Global = require('../../widget/Global')

 class RecipePage extends PureComponent {

   static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params ? navigation.state.params.title : '加载中',
    });

   constructor() {
     super()
     this.state = {
       recipeId: ''
     }
     this._renderBody = this._renderBody.bind(this)
     this._renderRecipe = this._renderRecipe.bind(this)
     this._renderSteps = this._renderSteps.bind(this)
     this.confirmLogIn = this.confirmLogIn.bind(this)
     this.navigateToChat = this.navigateToChat.bind(this)
   }

   componentDidMount() {
     // StatusBar.setBarStyle('light-content', false)
     this.props.navigation.setParams({ title: '加载中' })
     this._fetchRecipe()
   }
   async _fetchRecipe() {
     var self = this
     self.props.navigation.setParams({ title: '加载中' })
    //  console.log(JSON.stringify(self.props.navigation.state));
    //  self.setState({refreshing: true})
     var recipeId = self.props.navigation.state.params.recipeId
     self.setState({recipeId})
     await fetch('http://localhost:3000/api/fetchrecipe?id=' + recipeId)
            .then(function(response) {
              //获取数据,数据处理
              console.log('get server response when asking for recipe:' + JSON.stringify(response));
              self.props.navigation.setParams({ title: '狗不理包子' })
              self.setState({refreshing: false})
            });
   }
   confirmLogIn() {
     this.setState({loggedIn: true})
   }
   navigateToChat() {
     this.props.navigation.navigate('Chat', {})
   }
   _renderRecipe() {
     var ingredientList =
     [{name: '面粉', weight: '200克'},
      {name: '玉米面', weight: '100克'},
      {name: '白糖', weight: '60克'},
      {name: '鸡蛋', weight: '3个'},
      {name: '葡萄干', weight: '50克'},
      {name: '枸杞', weight: '15克'},
      {name: '核桃仁', weight: '15克'},
      {name: '酵母', weight: '5克'},
      {name: '红枣（喜欢吃红枣的）', weight: '两个'}
      ]
     return (
       <View>
          <View style={{paddingBottom:20, paddingTop:40,flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
              <Text>用料</Text>
              <Image style={{marginLeft:5,width:13, height:13 }} source={require('./scales.png')}/>
            </View>
            <Text>丢进菜篮子</Text>
          </View>
          <View>
            {ingredientList.map((item, index)=>
               <View key={index} style={{paddingVertical:10, flexDirection:'row', borderTopWidth:0.5, borderTopColor: 'rgb(230,230,230)'}}>
                  <Text style={{fontWeight:'100',flex:1}}>{item.name}</Text>
                  <Text style={{fontWeight:'100',flex:1}}>{item.weight}</Text>
               </View>
              )}
          </View>
       </View>
     )
   }
   _renderSteps() {
     var steps =
     [{imgUrl: 'temp5.jpg', content: '先把玉米粉和面粉混合搅拌均匀。然后把三个鸡蛋打散倒入混合的面粉里。'},
      {imgUrl: 'temp5.jpg', content: '取清水把白糖和酵母倒入，搅拌均匀，倒入面粉里，搅拌至没有干粉为止，不能太稀，不能太干，（面糊提起来可以自然滴落）搅拌至没有干面粉为止，放入葡萄干25克，（喜欢红枣的放入去核红枣）再搅拌均匀。不锈钢盆底沾点水，铺好油纸，把面糊倒进去。出锅后很容易就取出来了。（没有油纸就在盆里抹点油，好出模。）'},
      {imgUrl: 'temp5.jpg', content: '把剩下的25克葡萄干，枸杞，核桃仁均匀撒在面糊上。静置20分钟后就可以上锅蒸了，凉水上锅，40分钟就可以拿出来了。'},
      {imgUrl: 'temp5.jpg', content: '好看美味的发糕做好了。可以切块上桌了。'},
      {imgUrl: 'temp5.jpg', content: '好看美味的发糕做好了。可以切块上桌了。'},
      {imgUrl: 'temp5.jpg', content: '好看美味的发糕做好了。可以切块上桌了。'},
      {imgUrl: 'temp5.jpg', content: '好看美味的发糕做好了。可以切块上桌了。'},
      {imgUrl: 'temp5.jpg', content: '好看美味的发糕做好了。可以切块上桌了。'},
      {imgUrl: 'temp5.jpg', content: '好看美味的发糕做好了。可以切块上桌了。'}
      ]
     return (
       <View>
        {steps.map((item, index)=>
            <View key={index} style={{paddingVertical:20, borderTopWidth:0.5, borderTopColor: 'rgb(230,230,230)'}}>
              <Text style={{paddingVertical:10, fontWeight:'bold', fontSize:14}}>步骤{index + 1}</Text>
              <Image style={{width: screenWidth - 40, height: 250 }} source={require('./temp5.jpg')} />
              <Text style={{paddingVertical:10, opacity:0.8, lineHeight:22}}>{item.content}</Text>
            </View>
        )}
       </View>
     )
   }
   _renderBody() {
     return (
       <View style={{padding:20}}>
          <View style={{alignItems:'center', paddingVertical:20, borderBottomWidth:0.5, borderBottomColor: 'rgb(230,230,230)'}}>
            <Text style={{paddingBottom:10, fontSize:24, fontWeight:'bold'}}>葡萄干玉米面发糕</Text>
            <Text style={{fontSize:12, fontWeight:'100'}}>8.2 综合评分 · 79 人最近7天做过</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems:'center', marginVertical:20}}>
            <Image style={{borderRadius:30, width: 60, height:60}} source={require('./kim.jpeg')}/>
            <View style={{marginLeft:10}}>
              <Text style={{fontSize:12, opacity:0.7, paddingBottom:2}}>作者</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontWeight:'100'}}>宇宙大将军</Text>
                <Image style={{width:13, height: 13, marginLeft:10}} source={require('./chef.png')}/>
              </View>
            </View>
          </View>

          <View>
            <Text style={{fontWeight:'100', lineHeight:22}}>
                今天做的葡萄干玉米面发糕，不需要发面，很简单易做。
                有小时候奶奶给我做的味道，很好吃。
                大家回去就可以给宝宝和家人做健康无添加美食了。
                面糊倒进模具，一定要静置20分钟，这样才能发的更好。
            </Text>
          </View>

          <View>
            {this._renderRecipe()}
          </View>

          <RaisedTextButton onPress={()=>{}} style={{marginVertical:20, height:40}} rippleDuration={600} rippleOpacity={0.54} title='收藏'   color='rgb(249,79,64)' titleColor='white' />

          <View>
            {this._renderSteps()}
          </View>

          <View>
            <Text style={{paddingVertical:10, fontWeight:'bold', fontSize:14}}>小贴士</Text>
            <Text style={{fontSize:14, paddingVertical:10, opacity:0.8, lineHeight:18}}>我觉着我写的非常详细，看见很多群友都成功了，而且说比戚风都好吃.
                  但还是有个别人蛋白打的不到位，出炉回缩，时间不够等等，
                  先做自我检查，实在找不到原因再问我，
                  加我微信：gobek666，13个小时时差.留言后慢慢回.</Text>
          </View>

          <View style={{paddingTop:30, paddingBottom:20}}>
            <Text style={{fontSize:10, opacity:0.6}}>菜谱创建于2014-08-16</Text>
          </View>

          <View style={{paddingVertical:30}}></View>
       </View>
     )
   }
   render(){
     return (
       <View style={{flex: 1}}>
         {Global.loggedIn ?
            <View style={{flex: 1}}>
              <ParallaxScrollView
                style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
                backgroundColor="white"
                backgroundSpeed={5}
                contentBackgroundColor="white"
                fadeOutForeground={true}
                parallaxHeaderHeight={300}
                renderStickyHeader={()=>
                  <View key="sticky-header" style={styles.stickySection}>
                      <Text style={styles.stickySectionText}>葡萄干玉米面发糕</Text>
                    </View>
                  }
                stickyHeaderHeight={30}
                renderBackground={()=><Image style={{width: screenWidth, height: 300}} source={require('./temp5.jpg')}/>}
                renderFixedHeader={()=> <View key="fixed-header" style={styles.fixedSection}>
                      <Image style={{marginTop:120, width:20, height: 20}} source={require('./up.png')}/>
                    </View>
                  }>
                  {this._renderBody()}
              </ParallaxScrollView>
              <FixedBar ref={"shopbar"} recipeId={this.state.recipeId} navigate={this.navigateToChat} list={[]} lens={{}}/>
            </View>
            : <LogIn onPress={this.confirmLogIn.bind(this)}/>
          }
       </View>
     )
   }
 }

const styles= StyleSheet.create({

  stickySection: {
    height: 30,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    color: 'black',
    fontSize: 16,
    margin: 6
  },
  fixedSection: {
    position: 'absolute',
    bottom: 5,
    right: 10
  }
})
 export default RecipePage;
