import React from 'react';
import {Image, ScrollView, Touchable, View} from 'react-native';
import {List} from '@ant-design/react-native';
import Service from '../basic/service';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Item = List.Item;
const Brief = Item.Brief;

export interface IServicesProps {}

const Services: React.FunctionComponent<IServicesProps> = props => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#f5f5f9'}}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <List>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Parking',);
          }}>
          <Item>
            <Service name="Парковка" description="Удобное место для временного хранения автомобилей в аэропорту Якутска." />
          </Item>
        </TouchableOpacity>

        <Item>
          <Service name="VIP-зона" description="Элитное пространство, предназначенное для комфортного отдыха и обслуживания." />
        </Item>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Plan',);
          }}>
          <Item>
            <Service name="План Аэропорта" description="Схема расположения объектов и инфраструктуры" />
          </Item>
        </TouchableOpacity>
      </List>
    </ScrollView>
  );
};

export default Services;

export const title = 'List';
export const description = 'List Example';
