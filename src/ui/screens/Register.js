import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CircleImage from '../../assets/svgs/circle.svg';
import OrangeCircleImage from '../../assets/svgs/orangeCircle.svg';
import {units} from '../../themes/Units';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialMediaCard from '../components/SocialMediaCard';
import {colors} from '../../themes/Colors';
import {Formik} from 'formik';
import * as Yup from 'yup';
import authFirebase from '../../services/firebase/auth';

const Register = ({navigation}) => {
  const {loading, createUser} = authFirebase();

  const initailLoginValue = {
    email: '',
    password: '',
    repassword: '',
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is not in correct format')
      .required('This field is required'),
    password: Yup.string()
      .min(6, 'Password must be a minimum of 6 characters')
      .required('This field is required'),
    repassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same')
      .required('This field is required'),
  });

  const handleRegister = values => {
    createUser(values.email, values.password, onClickLogin);
  };

  const onClickLogin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.imageContainer}>
          <CircleImage />
          <OrangeCircleImage />
        </View>
        <Formik
          initialValues={initailLoginValue}
          onSubmit={handleRegister}
          validationSchema={loginValidationSchema}>
          {({values, errors, touched, handleChange, handleSubmit}) => (
            <>
              <View style={styles.bodyContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={{marginTop: units.height / 27}}>
                  <Text style={styles.labelText}>Email</Text>
                  <CustomInput
                    type="email-address"
                    placeHolder="Your Email Address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>

                <View style={{marginTop: units.height / 27}}>
                  <Text style={styles.labelText}>Password</Text>
                  <CustomInput
                    placeHolder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secure
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>

                <View style={{marginTop: units.height / 27}}>
                  <Text style={styles.labelText}>Password</Text>
                  <CustomInput
                    placeHolder="Re Password"
                    value={values.repassword}
                    onChangeText={handleChange('repassword')}
                    secure
                  />
                  {errors.repassword && touched.repassword && (
                    <Text style={styles.errorText}>{errors.repassword}</Text>
                  )}
                </View>
              </View>

              <View style={{marginTop: units.height / 25}}>
                <View style={styles.singInContainer}>
                  <CustomButton title="Sign Up" onPress={handleSubmit} />
                  <View style={styles.signUpContainer}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={onClickLogin}>
                      <Text style={styles.forgotText}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyContainer: {
    paddingHorizontal: units.width / 14,
    marginTop: units.height / 40,
  },
  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: '600',
  },
  labelText: {
    color: colors.DARKGRAY,
    fontSize: 16,
    marginBottom: units.height / 67,
  },
  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },
  forgotText: {
    textAlign: 'center',
    color: colors.ORANGE,
  },
  singInContainer: {
    marginHorizontal: units.width / 9,
    marginVertical: units.height / 25,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: units.height / 25,
  },
});
