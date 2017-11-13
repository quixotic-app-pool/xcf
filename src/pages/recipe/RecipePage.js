/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-13T08:50:53+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: recipe.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-13T12:15:37+08:00
 */
 import React, { PureComponent } from 'react'
 import { View, Text, Dimensions, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'
 import ParallaxScrollView from 'react-native-parallax-scroll-view';
 import { RaisedTextButton } from '../../widget/react-native-material-buttons';

 const screenWidth = Dimensions.get('window').width
 import FixedBar from './FixedBar'
 import { NavigationItem } from '../../widget'

 class RecipePage extends PureComponent {
   static navigationOptions = ({ navigation }) => ({
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

   constructor() {
     super()
     this._renderBody = this._renderBody.bind(this)
     this._renderRecipe = this._renderRecipe.bind(this)
     this._renderSteps = this._renderSteps.bind(this)
     this._renderOther = this._renderOther.bind(this)
     this._renderOtherCell = this._renderOtherCell.bind(this)
     this._renderOtherRecipeCell = this._renderOtherRecipeCell.bind(this)
     this._renderComments = this._renderComments.bind(this)
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
   _renderOtherCell(item: Object) {
     return (
       <View style={{borderWidth:0.5, borderColor: 'rgb(230,230,230)', paddingVertical: 10, marginRight:10, flexDirection:'column', alignItems:'center', width: screenWidth/2 - 40}}>
         <View style={{flex:1, flexDirection: "row"}}>
           <Image style={{flex: 1, height: 100}} source={require('./temp5.jpg')}/>
         </View>

         <View style={{flexDirection:'column', padding:10,height:150}}>
           <View style={{flexDirection:'row', alignItems:'center'}}>
             <Image style={{borderRadius:10, width: 20, height:20}} source={require('./kim.jpeg')}/>
             <Text style={{fontSize: 10, paddingLeft:10, opacity:0.5}}>宇宙大将军</Text>
           </View>
           <View style={{height: 100, alignItems:'center', justifyContent:'center'}}>
            <Text style={{lineHeight:18, fontSize:14, opacity:0.8}}>超级好吃，炸出了鳞片，脆的一塌糊涂...</Text>
          </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
             <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image style={{width: 25, height: 25}} source={require('./like.png')}/>
              <Text style={{fontSize: 10}}>  666</Text>
             </View>
             <Text style={{fontSize: 10, color: 'rgb(150,150,153)'}}>1小时前</Text>
           </View>
         </View>
       </View>
     )
   }
   _renderOther() {
     var data1 = [
       {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
       {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
     ]
     return (
       <View style={{borderTopWidth:0.5, borderTopColor: 'rgb(230,230,230)'}}>
         <View style={{paddingTop:20, paddingBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
           <Text style={{fontSize: 16}}>大家做的这道菜</Text>
           <Text style={{fontSize:15, color: 'rgb(249,79,64)'}}>所有作品</Text>
         </View>
         <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
           data={data1}
           renderItem={this._renderOtherCell}
         />
       </View>
     )
   }
   _renderComments() {
     var comments = [
       {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
       {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
     ]
     return (
       <View style={{borderTopWidth:0.5, borderTopColor: 'rgb(230,230,230)'}}>
         <View style={{paddingTop:20, paddingBottom:10, flexDirection:'row', justifyContent:'space-between'}}>
           <Text style={{fontSize: 16}}>这道菜的留言</Text>
           <Text style={{fontSize:15, color: 'rgb(249,79,64)'}}>153条留言</Text>
         </View>
         <View>
          {comments.map((item, index)=>
            <View key={index} style={{paddingVertical:10, borderBottomWidth:0.5, borderBottomColor: 'rgb(230,230,230)'}}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                  <Image style={{borderRadius:15, width: 30, height:30}} source={require('./kim.jpeg')}/>
                  <Text style={{fontSize: 10, paddingLeft:10, opacity:0.5}}>宇宙大将军</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <Image style={{width: 25, height: 25}} source={require('./like.png')}/>
                  <Text style={{fontSize: 10}}>666</Text>
                </View>
              </View>

              <View style={{paddingVertical:10}}>
                <Text style={{fontSize:12, opacity:0.8, lineHeight:14}}>老师，你好！如果没有微波炉，用电池炉加热玉米油油温要多少度合适呢？</Text>
                <View style={{flexDirection:'row', paddingVertical:5}}>
                  <Text  style={{fontSize:10, opacity:0.5}}>2018-2-11</Text><Text  style={{fontSize:10, opacity:0.8}}> · 举报</Text>
                </View>
              </View>

              <View>
                <View style={{flexDirection:'row'}}>
                  <Text  style={{fontSize:12, opacity:0.8, lineHeight:14, color: 'rgb(233,140,58)'}}>作者的回复：</Text>
                  <Text  style={{fontSize:12, opacity:0.8, lineHeight:14}}>按方子操作不会失败</Text>
                </View>
                <Text  style={{paddingVertical:10, fontSize:10, opacity:0.5}}>2018-2-21</Text>
              </View>
            </View>
          )}
         </View>
       </View>
     )
   }
   _renderOtherRecipeCell(item: Object) {
     return (
       <View style={{paddingVertical: 10, flexDirection:'column', width: screenWidth - 50}}>
         <View style={{paddingRight: 10, flex:1, flexDirection: "row"}}>
           <Image style={{flex: 1, height: 200}} source={require('./temp5.jpg')}/>
         </View>

         <View style={{paddingTop: 10, paddingHorizontal: 5, flexDirection:'row', justifyContent:'space-between'}}>
           <View style={{justifyContent:'center'}}>
             <Text style={{fontSize: 15}}>白菜炒木耳</Text>
             <Text style={{paddingTop:10, fontSize: 10, color: 'rgb(150,150,153)'}}>22人做过</Text>
           </View>
           <View style={{alignItems:'center'}}>
             <Image style={{borderRadius:18, width: 36, height:36}} source={require('./kim.jpeg')}/>
             <Text style={{paddingTop:5, fontSize: 10, paddingLeft:10, opacity:0.5}}>宇宙大将军</Text>
           </View>
         </View>
       </View>
     )
   }
   _renderOtherRecipe() {
     var data1 = [
       {key:'1', author: 'yanyanfoo', title: '发面大包：鲜汁肉&翡翠蔬菜', imgUrl: './temp1.jpeg', numOfJoin: '583'},
       {key:'2', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'3', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'4', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'},
       {key:'5', author: 'sandcastle', title: '芝麻瓜子仁酥糖&椰香杏仁酥糖', imgUrl: './temp1.jpeg', numOfJoin: '424'}
     ]
     return (
       <View style={{borderTopWidth:0.5, borderTopColor: 'rgb(230,230,230)'}}>
         <View style={{paddingTop:20, paddingBottom:10}}>
           <Text style={{fontSize: 16}}>作者其他菜谱</Text>
         </View>
         <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
           data={data1}
           renderItem={this._renderOtherRecipeCell}
         />
       </View>
     )
   }
   _renderAddedRecipe() {
     var data = [{},{}]
     return (
       <View style={{borderTopWidth:0.5, borderTopColor: 'rgb(230,230,230)'}}>
         <View style={{paddingTop:20, paddingBottom:10}}>
           <Text style={{fontSize: 16}}>被加入的菜单</Text>
         </View>
         {data.map((item, index)=>
            <View key={index} style={{flexDirection:'row', paddingVertical:10}}>
              <Image style={{width: (screenWidth-40)/2, height: 100}} source={require('./temp5.jpg')} />
              <View style={{paddingLeft:10, justifyContent:'center',width: (screenWidth-40)/2}}>
                <Text style={{fontWeight:'bold',fontSize: 16}}>实践美食</Text>
                <Text style={{paddingTop:20, fontSize:12, opacity:0.8}}>5道菜谱</Text>
              </View>
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

          <RaisedTextButton onPress={()=>{}} style={{marginVertical:20, height:40}} rippleDuration={600} rippleOpacity={0.54} title='一键买齐'   color='rgb(249,79,64)' titleColor='white' />

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

          <View>
            {this._renderOther()}
          </View>

          <View>
            {this._renderComments()}
          </View>

          <View>
            {this._renderOtherRecipe()}
          </View>

          <View>
            {this._renderAddedRecipe()}
          </View>
          <View style={{paddingVertical:30}}></View>
       </View>
     )
   }
   render(){
     return (
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
          <FixedBar ref={"shopbar"} list={[]} lens={{}}/>
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
