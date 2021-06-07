import React, { memo } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import theme from '../../../utils/theme';

interface RailProps extends ViewProps {

}

const Rail: React.FC<RailProps> = (props) => {
  return (
    <View style={styles.root} {...props}/>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.gray4,
  },
});