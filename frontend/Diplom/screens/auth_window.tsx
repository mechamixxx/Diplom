import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Double} from 'react-native/Libraries/Types/CodegenTypes';
import Profile from './profile';
import {Flex, WhiteSpace, WingBlank} from '@ant-design/react-native';
import Service from '../basic/service';
import {Avatar} from 'react-native-elements';
export interface IAuthWindowProps {}
interface IUser {
  id: number;
  name: string;
  password: string;
  mail: string;
  phone_number: number;
  money: number;
  full_name: string;
}
interface IHotel {
  id: number;
  name: string;
  address: string;
  mail: string;
  phone_number: number;
}
interface IBookings {
  id: number;
  hotel: IHotel;
  date_from: string;
  date_to: string;
  price: string;
  user: IUser;
}

const AuthWindow: React.FunctionComponent<IAuthWindowProps> = props => {
  
  const [Data, setData] = useState<Array<IBookings>>([]);
  const [UserId, setUserId] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    checkAsyncStorage();
  }, []);
  const checkAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      console.log(value);
      const id = await AsyncStorage.getItem('user_id');  
      if (value !== JSON.stringify(null)) {
        console.log('Значение найдено в AsyncStorage:', value);
        setIsLogin(true);
        GetDate(parseInt(id!));
      } else {
        console.log('Значение не найдено в AsyncStorage.');
      }
    } catch (error) {
      console.log('Ошибка при чтении AsyncStorage:', error);
    }
  };
  function signIn(login1: string, password1: string) {
    console.log(login1, password1);
    const url = 'http://10.0.2.2:6601/users/signin';
    const fetch = async () => {
      const {status, data} = await axios.post(url, {
        name: login1,
        password: password1,
      });
      console.log(data);
      console.log(status);
      console.log(typeof data);
      if (status == 200) {
        GetDate(data);
        saveCredentials(login1, password1, String(data));
        return;
      }
    };
    fetch();
  }
  function GetDate(user_id: number) {
    const fetch = async () => {
      try {
        const url = 'http://10.0.2.2:6601/hotel/book/' + user_id;
        console.log(url);
        const {data} = await axios.get(url);
        const collections: string = JSON.stringify(data);
        const result: Array<IBookings> = JSON.parse(collections);
        setData(result);
        return result;
      } catch (err) {
        console.error(err);
      }
    };
    fetch().then(data => {
      setData(data!);
    });
  }
  const deleteCredentials = async () => {
    try {
      await AsyncStorage.setItem('username', JSON.stringify(null));
      await AsyncStorage.setItem('password', JSON.stringify(null));
      await AsyncStorage.setItem('user_id', JSON.stringify(null));
      setIsLogin(false);
      console.log('Пароль и логин успешно удалены!');
    } catch (error) {
      console.log('Ошибка при удалении пароля и логина:', error);
    }
  };

  const saveCredentials = async (
    storage_username: string,
    storage_password: string,
    storage_id: string,
  ) => {
    try {
      await AsyncStorage.setItem('username', storage_username);
      await AsyncStorage.setItem('password', storage_password);
      await AsyncStorage.setItem('user_id', storage_id);
      console.log('Пароль и логин сохранены успешно!');
      setIsLogin(true);
    } catch (error) {
      console.log('Ошибка при сохранении пароля и логина:', error);
    }
  };
  const formatDate = (dateTimeString:string) => {
      const date = dateTimeString.split('T')[0];
      return date;
    ;
  };
  function renderdata(){
    try{
      return (Data.map(item => (
        <Service
          name={'Отель ' + item.hotel.name}
          description={
            'c '+formatDate(item.date_from) + '   до ' + formatDate(item.date_to) +"                       "+ item.price +"р"
          }
        />
      )))
    }catch{
      console.log('Произошла ошибка:')
    }
  }
  return isLogin ? (
    <View style={{paddingTop: 30}}>
      <WingBlank size="lg">
        <Flex justify="center">
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        </Flex>
      </WingBlank>
      <Flex justify="center">
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Вадим</Text>
      </Flex>
      <WhiteSpace />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'black',
        }}>
        История бронирований
      </Text>
      <ScrollView style={{ height: 320 }}>
        {renderdata()}
      </ScrollView>
        
      
      {/* <WingBlank>
        <WhiteSpace />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            color: 'black',
          }}>
          История бронирований
        </Text>
        <Service
          name="Отель Лайнер"
          description="23.05.23-24.05.23                    Standart  - 4 800р"
        />
      </WingBlank> */}
      <WingBlank style={{marginTop: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#e94f4f',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            deleteCredentials();
          }}>
          <Text style={styles.buttonText}>Выйти из профиля</Text>
        </TouchableOpacity>
      </WingBlank>
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, marginBottom: 20}}>Авторизация</Text>
      <TextInput
        style={{
          width: '80%',
          height: 40,
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Логин"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={{
          width: '80%',
          height: 40,
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signIn(login, password);
        }}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          navigation.navigate('RegistrationWindow');
        }}>
        <Text style={styles.buttonText2}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#273746',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button2: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderColor: '#273746',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText2: {
    color: '#273746',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AuthWindow;
