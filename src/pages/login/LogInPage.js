/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T17:38:19+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: JiazhangScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-17T11:25:55+08:00
 */

  //import liraries
  import React, { PureComponent } from 'react'
  import { AsyncStorage, View, Text, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native'
  import { TextField } from 'react-native-material-textfield';
  import { RaisedTextButton } from '../../widget/react-native-material-buttons';
  import CountdownCircle from 'react-native-countdown-circle'

  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  // create a component
  class LogInPage extends PureComponent {

      static navigationOptions = ({ navigation }) => ({
          title: '登录',
          headerStyle: { backgroundColor: '#fff' }
      })

      state = {
         phone: '',
         veriCode: '',
         messageSent: false
       };

      constructor(props: Object) {
          super(props)
        }
      verify() {
        //verify and record user
        try {
          console.log('verifing request sending...:' + this.state.veriCode);
          var number = AsyncStorage.getItem(this.state.phone)
          var param = { sixdigitcode: this.state.veriCode, number: number }
          if(param.sixdigitcode.length !== 6) {
            alert('请输入正确格式的验证码')
            return
          }
          var self = this
          fetch('http://localhost:8080/api/verify', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            }).then(function(response) {
                //获取数据,数据处理
                console.log('get server response when asking for verification:' + JSON.stringify(response));
                if(response.body.err === 0) {
                  alert('电话号码不正确')
                } else if(response.body.err === 1) {
                  alert('验证码不正确')
                } else {
                  this.props.onPress()
                }

            });
        } catch(e) {
               //捕获异常消息
        }
      }
      sendMsg() {
        //send verification code message to user
        try {
          console.log('verifing request sending...:' + this.state.phone);
          var param = { number: this.state.phone }
          if(param.number.length !== 11) {
            alert('请输入正确手机号码')
            return
          }
          var self = this
          fetch('http://localhost:8080/api/requestcode', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(param)
            }).then( async function(response) {
                //获取数据,数据处理
                console.log('get server response when asking for code: ' + JSON.stringify(response));
                // here we get user_id
                // if(response)
                try {
                  await AsyncStorage.setItem('USER_ID', param.number)
                  self.setState({messageSent: true})
                } catch (e) {

                }

            });
        } catch(e) {
               //捕获异常消息
        }
      }
      render() {
        let { phone, veriCode} = this.state;

          return (
              <View style={styles.container}>
                <TextField
                  label='请输入手机号'
                  value={phone}
                  onChangeText={ (phone) => this.setState({ phone }) }
                />
                <View style={{flexDirection: 'row'}}>
                  <TextField
                    containerStyle={{flex:2}}
                    label='请输入手机收到的验证码'
                    value={veriCode}
                    onChangeText={ (veriCode) => this.setState({ veriCode }) }
                  />
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    {this.state.messageSent ?
                      <CountdownCircle
                          seconds={59}
                          radius={20}
                          borderWidth={8}
                          color="#FFD700"
                          bgColor="#fff"
                          textStyle={{ fontSize: 15 }}
                          onTimeElapsed={()=>this.setState({messageSent: false})}
                      />
                       : <TouchableOpacity onPress={this.sendMsg.bind(this)} style={{backgroundColor:'rgb(230, 230, 230)', borderRadius: 10, padding: 5}}><Text style={{fontSize: 16}}>发送验证码</Text></TouchableOpacity> }
                  </View>
                </View>
                <RaisedTextButton  onPress={this.verify.bind(this)} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='确认'   color='#039BE5' titleColor='white' />
              </View>
          );
      }

  }

  // define your styles
  const styles = StyleSheet.create({
      container: {
          padding: 20,
          paddingTop: 24,
          backgroundColor: '#fff',
          height: screenHeight
      }
  });
  //make this component available to the app
  export default LogInPage;
