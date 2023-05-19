import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const SearchInput = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Icon name="magnify" size={25} color={colors.DARKGRAY} />
      <TextInput
        placeholder="Find for food or restaurant..."
        style={styles.input}
        placeholderTextColor={colors.DARKGRAY}
        value={value}
        onChangeText={onChangeText}
        //secureTextEntry={false}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.DARRWHITE,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.DARKGRAY,
  },
  input: {
    //width: '80%',
    //marginLeft: units.width / 60,
    marginLeft: 3,
    paddingVertical: units.height / 45,
  },
});
