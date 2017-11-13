/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-13T12:11:51+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: px2dp.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-13T12:11:56+08:00
 */



 'use strict';

 import {Dimensions} from 'react-native'

 const deviceH = Dimensions.get('window').height
 const deviceW = Dimensions.get('window').width

 const basePx = 375

 export default function px2dp(px) {
     return px *  deviceW / basePx
 }
