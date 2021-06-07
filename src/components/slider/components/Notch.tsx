import React, { memo } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import theme from '../../../utils/theme';

interface NotchProps extends ViewProps {

}


const Notch: React.FC<NotchProps> = props => {
  return (
    <View style={styles.root} {...props}/>
  );
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: theme.colors.primary1,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});