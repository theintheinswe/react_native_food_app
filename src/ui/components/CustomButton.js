import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ORANGE,
    borderRadius: 29,
    paddingVertical: units.height / 35,
    alignItems: 'center',
  },
  title: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});
