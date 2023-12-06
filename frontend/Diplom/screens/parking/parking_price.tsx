import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native-elements';
import {Card, Carousel, Flex, WingBlank} from '@ant-design/react-native';

export interface IParkingPriceProps {}

const ParkingPrice: React.FunctionComponent<IParkingPriceProps> = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          marginTop: 15,
          marginLeft: 15,
          color: '#333333',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Тарифы платной парковки с 1 мая 2022 года
      </Text>
     
        <View style={{ marginTop: 15,}}>
        <ImageBackground
          source={require('./tarif.png')}
          style={{height: 300}}>
   
        </ImageBackground>
      </View>
    </View>
  );
};
export default ParkingPrice;

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
