/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-12T07:24:51+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: RootScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-18T18:02:50+08:00
 */
 //import liraries
 import React, { PureComponent } from 'react'
 import { StatusBar } from 'react-native'
 import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

 // import color from './widget/color'
 // import { screen, system, tool } from './common'
 import TabBarItem from './widget/TabBarItem'

 // import JiaZhangDetailScene from './scene/JiaZhang/JiaZhangDetailScene'
 // import JiaJiaoDetailScene from './scene/JiaJiao/JiaJiaoDetailScene'
 // import JiaZhangFormScene from './scene/JiaZhang/JiaZhangFormScene'
 // import JiaJiaoFormScene from './scene/JiaJiao/JiaJiaoFormScene'
 // import DingdanScene from './scene/Dingdan/DingdanScene'

 import HomePage from './pages/home/HomePage'
 import PureList from './pages/home/PureList'
 import HaoWuPage from './pages/haowu/HaoWuPage'
 import PaiHangBangPage from './pages/paihangbang/PaiHangBangPage'
 import FenLeiPage from './pages/fenlei/FenLeiPage'
 import ShiJiPage from './pages/shiji/ShiJiPage'
 import ShouCangPage from './pages/shoucang/ShouCangPage'
 import RecipePage from './pages/recipe/RecipePage'
 import ChanPingPage from './pages/chanping/ChanPingPage'
 import MinePage from './pages/mine/MinePage'
 // import ChatList from './pages/chat/ChatList'
 import ChatPage from './pages/chat/ChatPage'
 import Chat from './pages/chat/Chat'
 import LogInPage from './pages/login/LogInPage'
 // import NearbyScene from './scene/Nearby/NearbyScene'
 // import MessageScene from './scene/Message/MessageScene'
 // import MineScene from './scene/Mine/MineScene'
 // import UserProfileScene from './scene/UserProfile/UserProfileScene'
 // import SettingScene from './scene/Setting/SettingScene'
 // import UserAddressScene from './scene/UserAddress/UserAddressScene'
 // import EditAddressScene from './scene/UserAddress/EditAddressScene'
 // import UserCommentScene from './scene/Comment/UserCommentScene'
 // import FavoriteScene from './scene/Favorite/FavoriteScene'
 // import OrderScene from './scene/Order/OrderScene'
 // import ChatScene from './scene/Chat/ChatScene'


 // import WebScene from './widget/WebScene'
 // import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

 const lightContentScenes = ['Home', 'Mine']

 function getCurrentRouteName(navigationState) {
     if (!navigationState) {
         return null;
     }
     const route = navigationState.routes[navigationState.index];
     // dive into nested navigators
     if (route.routes) {
         return getCurrentRouteName(route);
     }
     return route.routeName;
 }

 // create a component
 class RootScene extends PureComponent {
     constructor() {
         super()
         StatusBar.setBarStyle('light-content')
     }

     render() {
         return (
             <Navigator
                 onNavigationStateChange={
                     (prevState, currentState) => {
                         const currentScene = getCurrentRouteName(currentState);
                         const previousScene = getCurrentRouteName(prevState);
                        //  if (previousScene !== currentScene) {
                        //      if (lightContentScenes.indexOf(currentScene) >= 0) {
                        //          StatusBar.setBarStyle('light-content')
                        //      } else {
                        //          StatusBar.setBarStyle('dark-content')
                        //      }
                        //  }
                     }
                 }
             />
         );
     }
 }

 const Tab = TabNavigator(
     {
         Home: {
             screen: HomePage,
             navigationOptions: ({ navigation }) => ({
                 tabBarLabel: '项目',
                 tabBarIcon: ({ focused, tintColor }) => (
                     <TabBarItem
                         tintColor={tintColor}
                         focused={focused}
                         normalImage={require('./img/pfb_tabbar_homepage2x.png')}
                         selectedImage={require('./img/pfb_tabbar_homepage_selected2x.png')}
                     />
                 )
             }),
         },
         Chat: {
             screen: Chat,
             navigationOptions: ({ navigation }) => ({
                 tabBarLabel: '消息',
                 tabBarIcon: ({ focused, tintColor }) => (
                     <TabBarItem
                         tintColor={tintColor}
                         focused={focused}
                         normalImage={require('./img/pfb_tabbar_order2x.png')}
                         selectedImage={require('./img/pfb_tabbar_order_selected2x.png')}
                     />
                 )
             }),
         },

         Mine: {
             screen: MinePage,
             navigationOptions: ({ navigation }) => ({
                 tabBarLabel: '我的',
                 tabBarIcon: ({ focused, tintColor }) => (
                     <TabBarItem
                         tintColor={tintColor}
                         focused={focused}
                         normalImage={require('./img/pfb_tabbar_mine2x.png')}
                         selectedImage={require('./img/pfb_tabbar_mine_selected2x.png')}
                     />
                 )
             }),
         },
     },
     {
         tabBarComponent: TabBarBottom,
         tabBarPosition: 'bottom',
         swipeEnabled: true,
         animationEnabled: true,
         lazy: true,
         tabBarOptions: {
             activeTintColor: '#00abff',
             inactiveTintColor: '#ffffff',
             style: { backgroundColor: '#FFD700' },
         },
     }

 );

 const Navigator = StackNavigator(
     {
         Tab: { screen: Tab },
        //  Home: { screen: HomePage },
        //  HaoWu: { screen: HaoWuPage },
         PaiHangBang: { screen: Chat },
         FenLei: { screen: FenLeiPage },
         ShiJi: { screen: ShiJiPage },
         PureList: { screen: PureList },
        //  ShouCang: { screen: ShouCangPage },
         Recipe: { screen: RecipePage },
        //  ChanPing: { screen: ChanPingPage },
        //  Mine: { screen: MinePage },
         ChatScreen: { screen: ChatPage },
        //  Web: { screen: WebScene },
        //  GroupPurchase: { screen: GroupPurchaseScene },
        //  Nearby: { screen: NearbyScene },
        //  UserProfile: { screen: UserProfileScene },
        //  Setting: { screen: SettingScene },
        //  UserAddress: { screen: UserAddressScene },
        //  EditAddress: { screen: EditAddressScene },
        //  UserComment: { screen: UserCommentScene },
        //  Favorite: { screen: FavoriteScene },
        //  Order: { screen: OrderScene },
        //  Chat: { screen: ChatScene }
     },
     {
         navigationOptions: {
             headerStyle: { backgroundColor: '#FFD700' },
             headerBackTitle: null,
             headerTintColor: '#ffffff',
             showIcon: true,
         },
     }
 );
 //make this component available to the app
 export default RootScene;
