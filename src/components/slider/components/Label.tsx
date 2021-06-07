
import React, { memo } from 'react';
import { View, Text, StyleSheet, ViewProps } from 'react-native';
import theme from '../../../utils/theme';

interface LabelProps extends ViewProps {
    text: string
}

const Label: React.FC<LabelProps> = ({ text, ...restProps }) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: theme.colors.primary1,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default memo(Label);