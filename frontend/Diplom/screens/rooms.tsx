import React from 'react';

import {
  ScrollView,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Platform,
} from 'react-native';
import {DatePicker, Flex, Grid, Button, List} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';

import Room from '../basic/room';

export interface IRoomProps {}

const Rooms: React.FunctionComponent<IRoomProps> = props => {
  const navigation = useNavigation();
  const Item = List.Item;
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#D0D0D0'}}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <List style={{flex:1,backgroundColor:"#D0D0D0"}}>
        <Item style={{backgroundColor:"#D0D0D0"}}>
          <Room
            name="Двухместный номер Standard"
            description="Двуспальная кровать"
            price="8600 Р"
          />
        </Item>
        <Item style={{backgroundColor:"#D0D0D0"}}>
          <Room
            name="Двухместный полулюкс"
            description="Двуспальная кровать"
            price="14 600 Р"
          />
        </Item>
        <Item style={{backgroundColor:"#D0D0D0"}}>
          <Room
            name="Двухместные апартаменты"
            description="Двуспальная кровать"
            price="20 500 Р"
          />
        </Item>
        <Item style={{backgroundColor:"#D0D0D0"}}>
          <Room
            name="Двухместные апартаменты"
            description="Двуспальная кровать"
            price="20 500 Р"
          />
        </Item>
      </List>
    </ScrollView>
  );
};
export default Rooms;
export const title = 'List';
export const description = 'List Example';
