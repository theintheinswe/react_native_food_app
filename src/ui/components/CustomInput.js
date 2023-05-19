import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../themes/Colors';
import { units } from '../../themes/Units';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({value, placeHolder, onChangeText, secure, type}) => {
    const [showPassword, setShowPassWord] = useState(secure)
    
    const handleIcon = () => {
        setShowPassWord(!showPassword);
    }

    return (
    <View style={styles.container}>
        <TextInput
         placeholder={placeHolder}
         value={value}
         keyboardType={type}
         onChangeText={onChangeText}
         secureTextEntry={showPassword}
         style={styles.input}
        />
         {secure && (
        <TouchableOpacity onPress={handleIcon}>
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            size={25}
            color={colors.GRAY}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}
export default CustomInput;

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:colors.DARRWHITE,
        borderRadius:10,
        paddingLeft: units.width / 19,
        paddingLeft:1,
        shadowColor: colors.LIGHTGREY,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        paddingVertical: units.height / 34,
        fontSize: 17,
        flex: 1,
    },
    icon: {
        marginRight: units.width / 16,
    },
})