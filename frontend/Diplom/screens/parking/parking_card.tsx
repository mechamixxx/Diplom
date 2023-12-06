import React, {useEffect, useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Image, Input} from 'react-native-elements';

import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IParkingCardProps {}

const ParkingCard: React.FunctionComponent<IParkingCardProps> = props => {
  const [isLogin,setIsLogin]=useState(false);
  const [UserId,setUserId] = useState(0);
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
  const navigation = useNavigation();
  const [dateFromPicker, setDateFromPicker] = useState(false);
  const [dateToPicker, setDateToPicker] = useState(false);

  const [sum, setSum] = useState(0);

  const [date_from, setDateFrom] = useState(new Date());

  const [date_to, setDateTo] = useState(new Date());

  const [dateDiff,setDateDiff] = useState(0);

  const [carNumber,setCarNumber] = useState("")

  function showDateFromPicker() {
    setDateFromPicker(true);
  }

  function showDateToPicker() {
    setDateToPicker(true);
  }
  function onDateFromSelected(event, value) {
    console.log("1111111111111111111111")
    console.log(date_from.getDate());
    console.log(date_to.getDate());
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
  function Parking(user_id:number, price:number, date_from:Date,date_to:Date,car_number:string) {
    if(isLogin==true){const url = 'http://10.0.2.2:6601/users/parking';
    const fetch = async () => {
      const {status, data} = await axios.post(url, {
        userId: user_id,
        price: price,
        date_from: date_from,
        date_to: date_to,
        car_number: car_number
      });
      console.log(data);
      console.log(status);
      console.log(typeof data);
      if (status == 200) {
        Alert.alert('Успешно!', 'Заявка была успешно отправлена.');
        return;
      }
    };
    return fetch();}else{
      return Alert.alert('Зарегестрируйтесь');
    }
    
  }
  return (
    <View>
      <Text
        style={{
          marginTop: 15,
          marginLeft: 15,
          color: '#333333',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Оформление абонемента
      </Text>
      <Text
        style={{marginTop: 15, marginLeft: 15, color: '#333333', fontSize: 15}}>
        Государственный номер транспортного средства
      </Text>
      <Input style={{backgroundColor: '#DDDDDD', marginTop: 15}} value={carNumber} onChangeText={(text) => setCarNumber(text)}></Input>
      <Text
        style={{marginTop: 15, marginLeft: 15, color: '#333333', fontSize: 15}}>
        Дата начала абонемента*
      </Text>

      <Input>{date_from.toLocaleDateString()}</Input>
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
            title="Выбрать"
            color="#273746"
            onPress={showDateFromPicker}
          />
        </View>
      )}

      <Text
        style={{marginTop: 15, marginLeft: 15, color: '#333333', fontSize: 15}}>
        Дата конца абонемента*
      </Text>
      <Input>{date_to.toLocaleDateString()}</Input>
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
          <Button title="Выбрать" color="#273746" onPress={showDateToPicker} />
        </View>
      )}
      <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
        <Text style={{color: '#333333', fontSize: 20}}>Стоимость: </Text>
        <Text style={{color: '#333333', fontSize: 20}}>{dateDiff*400} Р</Text>
      </View>
      <View style={{margin: 10}}>
        <Button title="Отправить заявку" color="#273746" onPress={()=>{Parking(UserId,dateDiff*400,date_from,date_to,carNumber)}}/>
      </View>
    </View>
  );
};
export default ParkingCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
