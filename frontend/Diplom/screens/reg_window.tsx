import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
export interface IRegsProps {}

interface IRegistration {
  name: String, 
  password: String,
  mail: String,
  phone_number: String,
  money: Number,
  full_name: String
}
const RegistrationWindow: React.FunctionComponent<IRegsProps> = props => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [money, setMoney] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigation();

  // const Registration = async (f_name:String, f_password:String, f_mail:String, f_phone_number:String, f_full_name:String) => {
  //   try {
  //     const response = await axios.post('http://localhost:6601/users/signup', {
  //       name: f_name,
  //       password: f_password,
  //       mail: f_mail,
  //       phone_number: f_phone_number,
  //       money: '12312',
  //       full_name: f_full_name,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  function Registration(f_name:String, f_password:String, f_mail:String, f_phone_number:Number, f_full_name:String){
    const url = 'http://10.0.2.2:6601/users/signup';
    console.log(f_name,f_password,f_mail,f_phone_number,f_full_name)
    const fetch = async () => {
      const {status} = await axios.post(url, {
        name: f_name,
        password: f_password,
        mail: f_mail,
        phone_number: 123123,
        money: 99999,
        full_name: f_full_name,
      });
      if (status == 200) {
        return;
      }
    };
    console.log(fetch());
    return fetch();
  }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Регистрация</Text>
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Логин"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Подтвердите пароль"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Номер телефона"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Имя"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{Registration(login,password,email,parseInt(phoneNumber),name);navigate.goBack();}}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
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
export default RegistrationWindow;
