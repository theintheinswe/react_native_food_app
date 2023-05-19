import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import BasketCard from '../components/BasketCard';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import CustomButton from '../components/CustomButton';
import basketApi from '../../services/api/basketApi';
import {useIsFocused} from '@react-navigation/native';

const Basket = ({navigation}) => {
  const {data, loading, error, getBasketDataApi} = basketApi();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getBasketDataApi();
    }
  }, [isFocused]);

  const renderBasketCard = ({item}) => <BasketCard item={item} />;

  const renderEmptyCard = () => (
    <Text style={styles.emptyText}>Empty of List</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Basket</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderBasketCard}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
        ListEmptyComponent={renderEmptyCard}
      />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Prome Code" style={{flex: 1}} />
        <TouchableOpacity style={styles.promeButton}>
          <Text style={styles.promeText}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>SubTotal:</Text>
          <Text style={styles.priceText}>75 $</Text>
        </View>
        <View style={[styles.priceContainer, {marginTop: units.height / 81}]}>
          <Text style={styles.priceTitle}>Delivery:</Text>
          <Text style={styles.priceText}>5 $</Text>
        </View>
        <View style={[styles.priceContainer, {marginTop: units.height / 81}]}>
          <Text style={styles.priceTitle}>Total:</Text>
          <Text style={styles.priceText}>80 $</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Checkout" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: units.height / 34,
  },
  title: {
    color: colors.DARK,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  list: {
    marginTop: units.height / 40,
    maxHeight: units.height / 2.5,
    backgroundColor: colors.WHITE,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.DARRWHITE,
    borderRadius: 100,
    paddingHorizontal: units.width / 31,
    paddingVertical: units.height / 101,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: units.height / 34,
    marginHorizontal: units.width / 17,
  },
  promeButton: {
    backgroundColor: colors.ORANGE,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: units.width / 14,
    paddingVertical: units.width / 50,
  },
  promeText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.WHITE,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHTGREY,
    paddingBottom: units.height / 81,
  },
  priceTitle: {
    fontSize: 16,
    color: colors.DARK,
  },
  bottomContainer: {
    marginHorizontal: units.width / 17,
  },
  priceText: {
    fontSize: 19,
    color: colors.DARK,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: units.height / 50,
    marginHorizontal: units.width / 7,
    marginBottom: units.height / 81,
  },
  emptyText: {
    color: colors.ORANGE,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
});
