/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T17:38:19+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: JiazhangScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-06T12:56:25+08:00
 */

  //import liraries
  import React, { PureComponent } from 'react'
  import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native'
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
         messageSent: false
       };

      constructor(props: Object) {
          super(props)
        }
      verify() {
        //verify and record user
        this.props.onPress()
      }
      sendMsg() {
        //send verification code message to user
        this.setState({messageSent: true})
      }
      render() {
        let { phone } = this.state;

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
                    value={phone}
                    onChangeText={ (phone) => this.setState({ phone }) }
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
