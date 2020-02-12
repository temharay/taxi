import React, {Component} from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AppIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let icon = '';
    let { iconName, iconSize, iconColor,...rest } = this.props;

    if (iconName) {
      // assume ios
      icon = 'ios-' + iconName;
      iconColor =
        iconColor == undefined ? '#00f' : iconColor;
      iconSize =
        iconSize == undefined ? 30 : iconSize;

      if (Platform.OS !== 'ios') {
        icon = 'md-' + iconName;
      }
    }

    return (
      <>
        {icon != '' ? (
          <Icon name={icon} color={iconColor} size={iconSize} {...rest}></Icon>
        ) : null}
      </>
    );
  }
}
