/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BasicTabBarExample from './basic/navigation';
import Hotel from './basic/hotel';
import Rooms from './screens/rooms';
import Plan from './screens/plan';
import Parking from './screens/parking';
import ParkingInfo from './screens/parking/parking_info';
import ParkingPrice from './screens/parking/parking_price';
import ParkingRule from './screens/parking/parking_rule';
import ParkingCard from './screens/parking/parking_card';
import RegistrationWindow from './screens/reg_window';
import Profile from './screens/profile';
import AuthWindow from './screens/auth_window';
function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BasicTabBarExample}
          options={{title: 'Главное'}}
        />
        <Stack.Screen
          name="Hotel"
          component={Hotel}
          options={{title: 'Отель'}}
        />
        <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={{title: 'Выбрать комнату'}}
        />
        <Stack.Screen
          name="Plan"
          component={Plan}
          options={{title: 'План аэропорта'}}
        />
        <Stack.Screen
          name="Parking"
          component={Parking}
          options={{title: 'Парковка'}}
        />
         <Stack.Screen
          name="ParkingInfo"
          component={ParkingInfo}
          options={{title: 'Общая информация'}}
        />
        <Stack.Screen
          name="ParkingPrice"
          component={ParkingPrice}
          options={{title: 'Тарифы'}}
        />
        <Stack.Screen
          name="ParkingRule"
          component={ParkingRule}
          options={{title: 'Правила пользования'}}
        />
        <Stack.Screen
          name="ParkingCard"
          component={ParkingCard}
          options={{title: 'Заявка на карту'}}
        />
        <Stack.Screen
          name="RegistrationWindow"
          component={RegistrationWindow}
          options={{title: 'Регистрация'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Профиль'}}
        />
        <Stack.Screen
          name="AuthWindow"
          component={AuthWindow}
          options={{title: 'Авторизация'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => <App />;
