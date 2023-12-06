import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-elements';
import {Card, Carousel, WingBlank} from '@ant-design/react-native';

export interface IPlanProps {}

const Plan: React.FunctionComponent<IPlanProps> = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginLeft: 20,
          marginTop: 15,
          color: '#000000'
        }}>
        СХЕМА АЭРОВОКЗАЛА
      </Text>
      <WingBlank size="lg" style={{marginTop: 15}}>
        <Card>
          <Card.Header
            title="Схема терминала — 1 этаж"
            thumbStyle={{width: 30, height: 30}}
          />
          <Card.Body>
            <Image
              style={{height: 150}}
              source={require('../assets/terminal/terminal-1.png')}
            />
          </Card.Body>
          <Card.Footer content="" extra="" />
        </Card>

        <Card style={{marginTop: 15}}>
          <Card.Header
            title="Схема терминала — 2 этаж"
            thumbStyle={{width: 30, height: 30}}
          />
          <Card.Body>
            <Image 
              style={{height: 120}}
              source={require('../assets/terminal/termila-2.png')}
            />
          </Card.Body>
          <Card.Footer content="" extra="" />
        </Card>
      </WingBlank>
    </View>
  );
};
export default Plan;
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