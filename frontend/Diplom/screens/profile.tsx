import React from 'react';
import {Text, View} from 'react-native';
import {
  Card,
  WhiteSpace,
  WingBlank,
  Flex,
  Button,
} from '@ant-design/react-native';
import {Avatar} from 'react-native-elements';
import Service from '../basic/service';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IProfileProps {

}
const Profile: React.FunctionComponent<IProfileProps>  = () => {

  const navigation = useNavigation();
  const deleteCredentials = async () => {
    try {
      await AsyncStorage.setItem('username', JSON.stringify(null));
      await AsyncStorage.setItem('password', JSON.stringify(null));
      await AsyncStorage.setItem('user_id',JSON.stringify(null));
      console.log('Пароль и логин успешно удалены!');
    } catch (error) {
      console.log('Ошибка при удалении пароля и логина:', error);
    }
  };
  return (
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
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Вадим Павлов</Text>
      </Flex>
      <WingBlank>
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
      </WingBlank>
      <WingBlank style={{marginTop: 15}}>
        <Button type="warning" onPress={() => {deleteCredentials();}}>
          Выйти из профиля
        </Button>
      </WingBlank>
    </View>
  );
}
export default Profile;
