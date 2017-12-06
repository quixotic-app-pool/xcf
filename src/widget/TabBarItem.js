/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-12-04T11:29:57+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: TabBarItem.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-04T11:30:10+08:00
 */



//import liraries
import React, { PureComponent } from 'react'
import { Image } from 'react-native'

// create a component
class TabBarItem extends PureComponent {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        );
    }
}

//make this component available to the app
export default TabBarItem;
