import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  Card,
  WhiteSpace,
  WingBlank,
  Button,
  Accordion,
} from '@ant-design/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export interface IRoomProps {
  name: string;
  price: string;
  description: string;
}
const Room: React.FunctionComponent<IRoomProps> = props => {
  const navigation = useNavigation
  const checkCredentials = async () => {
    try {
      const log = await AsyncStorage.getItem('username');
      const pass = await AsyncStorage.getItem('password');
      console.log(log);
      console.log(pass);
      if(log!=null && pass!=null){
        console.log("Успешно сохранен")
      }
      else{
        console.log("Авторизуйтесь")
      }
    } catch (error) {
      console.log('Ошибка при сохранении пароля и логина:', error);
    }
  };
  return (
    <View style={{paddingTop: 30, backgroundColor: '#D0D0D0'}}>
      <WingBlank size="lg" style={{backgroundColor: '#D0D0D0'}}>
        <Card>
          <Card.Header title={props.name} extra={props.price} />
          <Card.Body>
            <View style={{height: 42}}>
              <Text style={{marginLeft: 15, marginRight: 15, color: '#000000'}}>
                {props.description}
              </Text>
              <Text style={{marginLeft: 15, marginRight: 15, color: '#000000'}}>
                Питание не включено
              </Text>
            </View>
            <View>
              <Button
                style={{
                  backgroundColor: '#273746',
                  flex: 0.5,
                  marginLeft: 15,
                  marginRight: 15,
                }}
                onPress=
                {() => {
                 checkCredentials();
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}>
                  Забронировать
                </Text>
              </Button>
            </View>
          </Card.Body>
        </Card>
      </WingBlank>
    </View>
  );
};
export default Room;
