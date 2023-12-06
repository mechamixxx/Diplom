import React, {useEffect, useState} from 'react';

import {
  ScrollView,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {DatePicker, Flex, Grid, Button} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-elements';
import {color} from 'react-native-elements/dist/helpers';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IHotelProps {}

const Hotel: React.FunctionComponent<IHotelProps> = props => {
  const [UserId, setUserId] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('user_id');
        if (value !== JSON.stringify(null)) {
          // Значение было найдено
          console.log('Значение:', value);
          setUserId(parseInt(value!));
          setIsLogin(true);
        } else {
          // Значение не было найдено
          console.log('Значение не найдено');
        }
      } catch (error) {
        console.log('Ошибка при получении значения:', error);
      }
    };
    fetchData();
  }, []);
  const [dateDiff,setDateDiff] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [price,setPrice] = useState(0)
  const selectItem = item => {
    
    setSelectedItem(item);
    const names = item.split('-')[0];
    const prices = item.split('-')[1];
    setPrice(prices);
    setIsOpen(false);
  };

  const items = ['Эконом-3600', 'Стандарт-4500', 'Люкс-6000'];

  const navigation = useNavigation();
  const datePicker = false;
  const date = new Date();
  const value = new Date();
  const discription =
    'AZIMUT Отель Якутск - это бизнес-отель в центре города Якутска. Отель располагает 95 гостиничными номерами различных категорий от Стандартов до Люкс Супериор.';
  const name = 'Азимут';
  const address = 'пр. Ленина, 24';
  const phone_number = '8 (411) 239-13-13';

  const [date_from, setDateFrom] = useState(new Date());

  const [date_to, setDateTo] = useState(new Date());
  const [dateFromPicker, setDateFromPicker] = useState(false);
  const [dateToPicker, setDateToPicker] = useState(false);
  function showDateFromPicker() {
    setDateFromPicker(true);
  }

  function showDateToPicker() {
    setDateToPicker(true);
  }
  function onDateFromSelected(event, value) {
    var asd = Math.abs(date_from.getDate() - date_to.getDate())+1
    setDateDiff(asd);
    setDateFrom(value);
    setDateFromPicker(false);
  }
  function onDateToSelected(event, value) {
    var asd = Math.abs(date_from.getDate() - date_to.getDate())+1
    setDateDiff(asd);
    setDateTo(value);
    setDateToPicker(false);
  }
  function addBooking(
    user_id: number,
    hotelId: number,
    date_from: Date,
    date_to: Date,
    price: number,
  ) {
    if (isLogin == true) {
      const url = 'http://10.0.2.2:6601/hotel/book';
      const fetch = async () => {
        const {status, data} = await axios.post(url, {
          userId: user_id,
          hotelId: hotelId,
          date_from: date_from,
          date_to: date_to,
          price: 4500,
        });
        console.log(data);
        console.log(status);
        console.log(typeof data);
        if (status == 200) {
          Alert.alert('Успешно!', 'Бронь была успешно выполнена.');

          return;
        }
      };
      return fetch();
    } else {
      Alert.alert('Зарегестрируйтесь');
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: '#D0D0D0'}}>
      <View>
        <ImageBackground
          source={require('../assets/hotel_AZIMUT/AZIMUT1.png')}
          style={{width: 450, height: 200}}></ImageBackground>
      </View>
      <ScrollView>
        <View style={{marginLeft: 15, marginRight: 15}}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              marginTop: 15,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 25, color: '#000000', marginLeft: 10}}>
              {name}
            </Text>
            <Text style={{fontSize: 16, color: '#000000', marginLeft: 15}}>
              Адрес: {address}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
                marginLeft: 15,
                marginBottom: 10,
              }}>
              239 м от центра Якутска
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              marginTop: 15,
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginLeft: 10,
                  flex: 0.9,
                }}>
                Выбрать дату заезда:
              </Text>
              {dateFromPicker && (
                <DateTimePicker
                  value={date_from}
                  mode={'date'}
                  is24Hour={true}
                  onChange={onDateFromSelected}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: 320,
                    height: 260,
                    display: 'flex',
                  }}
                />
              )}

              {!dateFromPicker && (
                <View style={{margin: 10}}>
                  <Button
                    style={{backgroundColor: '#273746'}}
                    onPress={showDateFromPicker}>
                    <Text style={{color: '#ffffff'}}>
                      {date_from.toLocaleDateString()}
                    </Text>
                  </Button>
                </View>
              )}
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#000000',
                  marginLeft: 10,
                  flex: 0.9,
                }}>
                Выбрать дату выезда:
              </Text>
              {dateToPicker && (
                <DateTimePicker
                  value={date_to}
                  mode={'date'}
                  is24Hour={true}
                  onChange={onDateToSelected}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: 320,
                    height: 260,
                    display: 'flex',
                  }}
                />
              )}

              {!dateToPicker && (
                <View style={{margin: 10}}>
                  <Button
                    style={{backgroundColor: '#273746'}}
                    onPress={showDateToPicker}>
                    <Text style={{color: '#ffffff'}}>
                      {date_to.toLocaleDateString()}
                    </Text>
                  </Button>
                </View>
              )}
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                marginTop: 15,
                marginBottom: 10,
                alignItems: 'center',
                marginRight: 20,
                marginLeft: 10,
              }}>
              <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
                <Text style={styles.headerText}>
                  {selectedItem || 'Выбрать комнату'}
                </Text>
              </TouchableOpacity>
              {isOpen && (
                <View style={styles.dropdown}>
                  {items.map(item => (
                    <TouchableOpacity
                      key={item}
                      style={styles.dropdownItem}
                      onPress={() => selectItem(item)}>
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              <TouchableOpacity
                style={styles.header}
                onPress={() => {
                  addBooking(UserId, 1, date_from, date_to, price*dateDiff);
                }}>
                <Text style={{color: '#FFFFFF'}}>Забронировать</Text>
              </TouchableOpacity>
              <Text style={{marginTop:10,fontSize:18,color:"#000000"}}>Сумма: {price*dateDiff} Р</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              marginTop: 15,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                marginLeft: 10,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Политика отеля
            </Text>
            <Text style={{fontSize: 16, color: '#000000', marginLeft: 15}}>
              Заселение и выезд
            </Text>
            <Text style={{fontSize: 14, color: '#000000', marginLeft: 15}}>
              Время заселения: c 14:00
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#000000',
                marginLeft: 15,
                marginBottom: 10,
              }}>
              Время выезда: до 12.00
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  header: {
    marginTop: 10,
    alignContent: 'flex-start',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#273746',
    width: 300,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  dropdown: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#273746',
    backgroundColor: 'white',
    width: 150,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#273746',
  },
});
export default Hotel;
