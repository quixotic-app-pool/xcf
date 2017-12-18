/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-12-07T12:15:46+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: Chat.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-17T13:09:28+08:00
 */
// https://stackoverflow.com/questions/35680565/sending-message-to-specific-client-in-socket-io
// Chat Message
// {
//   _id: 1,
//   text: 'My message',
//   createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
//   user: {
//     _id: 2,
//     name: 'React Native',
//     avatar: 'https://facebook.github.io/react/img/logo_og.png',
//   },
//   image: 'https://facebook.github.io/react/img/logo_og.png',
//   // Any additional custom parameters are passed through
// }

// system message
// {
//   _id: 1,
//   text: 'This is a system message',
//   createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
//   system: true,
//   // Any additional custom parameters are passed through
// }

 import React from 'react';
 import { View, Text, AsyncStorage, Dimensions } from 'react-native';
 import SocketIOClient from 'socket.io-client';
 import { GiftedChat } from './src/src';
 import LogIn from '../login/LogInPage'

 const screenHeight = Dimensions.get('window').height
 const screenWidth = Dimensions.get('window').width

 class Main extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       messages: [],
       userId: null,
       loggedIn: true
     };

     this.onReceivedMessage = this.onReceivedMessage.bind(this);
     this.onSend = this.onSend.bind(this);
     this._storeMessages = this._storeMessages.bind(this);
    //  this.userSend = this.userSend.bind(this);
    this._connectSocket()
   }

   // Event listeners
   /**
    * When the server sends a message to this.
    */
   onReceivedMessage(messages) {
     this._storeMessages(messages);
   }

   /**
    * When a message is sent, send the message to the server
    * and store it in this component's state.
    */
   onSend(messages=[]) {
     console.log("going to send message to server: ");
     console.log("messages: " + messages);
     console.log('message[0]: ' + messages[0]);
     this.socket.emit('userMessage', messages[0], this.state.userId);
     this._storeMessages(messages);
   }
   confirmLogIn() {
     this.setState({loggedIn: true})
    //  this._connectSocket()
   }
  async _connectSocket() {
      //这里需要修改，只有当用户正确登录之后我们会尝试连接后台的socket
      this.socket = SocketIOClient('http://localhost:3000');
      //所以不需要去检查，因为这边一定是有指定用户的
      await AsyncStorage.setItem('USER_ID', '13913351453')
    await AsyncStorage.getItem('USER_ID')
        .then((userId) => {
            // individual msg from customer service
            this.socket.on('csmessage', this.onReceivedMessage);
            // msg history saved in server
            this.socket.on('existingMsg', this.receiveExistingMsg.bind(this));
            this.socket.on('userack', this.userAck);
            this.socket.emit('userJoined', userId);
            this.setState({ userId });
        })
        .catch((e) => alert(e));
   }
   receiveExistingMsg(data) {
     // TODO: receive exsiting msg in server
     console.log('geting existing message:' + JSON.stringify(data));
     if(data.info === 'ok') {
       this._storeMessages(data.pack);
     }
   }
   userAck() {
     //here we check if user's meesage has been successfully sent
   }
   render() {
     var user = { _id: this.state.userId || -1 };
     if(this.state.loggedIn) {
       return (
         <GiftedChat
           messages={this.state.messages}
           onSend={this.onSend}
           user={user}
         />
       )
     } else {
       return (
         <LogIn onPress={this.confirmLogIn.bind(this)}/>
       )
     }
   }

   // Helper functions
   _storeMessages(messages) {
     this.setState((previousState) => {
       return {
         messages: GiftedChat.append(previousState.messages, messages),
       };
     });
   }
 }

 module.exports = Main;
