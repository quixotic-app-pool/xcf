/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-05T17:41:36+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: App.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-12T07:24:29+08:00
 */


import React, { PureComponent } from 'react';
import {
  Platform
} from 'react-native';
import RootScene from './src/RootScene';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends PureComponent<{}> {
  render() {
    return (
      <RootScene />
    );
  }
}
