import React, { memo } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import theme from '../../../utils/theme';

interface ThumbProps extends ViewProps {

}

const THUMB_RADIUS = 12;

const Thumb: React.FC<ThumbProps> = (props) => {
  return (
    <View style={styles.root} {...props} />
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: theme.colors.primary1,
    backgroundColor: '#ffffff',
  },
});

export default memo(Thumb);