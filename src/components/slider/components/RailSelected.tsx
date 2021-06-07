import React, { memo } from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import theme from '../../../utils/theme';

interface RailSelectedProps extends ViewProps {

}

const RailSelected: React.FC<RailSelectedProps> = (props) => {
  return (
    <View style={styles.root} {...props} />
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 4,
    backgroundColor: theme.colors.primaryDarker,
    borderRadius: 2,
  },
});