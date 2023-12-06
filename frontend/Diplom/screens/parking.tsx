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

export interface IParkingProps {}

const Parking: React.FunctionComponent<IParkingProps> = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 22,
      }}>
      <TouchableOpacity  onPress={() => {
          navigation.navigate('ParkingInfo',);
        }}>
        <View style={{backgroundColor: '#DDDDDD', marginTop: 5, height: 40}}>
          <Text style={{marginTop: 10, marginLeft: 15, fontSize:15,color:"#333333"}}>Общая информация</Text>
        </View>
      </TouchableOpacity>

    

      <TouchableOpacity onPress={() => {
          navigation.navigate('ParkingPrice',);
        }}>
        <View style={{backgroundColor: '#DDDDDD', marginTop: 5, height: 40}}>
          <Text style={{marginTop: 10, marginLeft: 15, fontSize:15,color:"#333333"}}>Тарифы</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('ParkingCard',);
        }}>
        <View style={{backgroundColor: '#DDDDDD', marginTop: 5, height: 40}}>
          <Text style={{marginTop: 10, marginLeft: 15, fontSize:15,color:"#333333"}}>
            Заявка на выдачу парковочных карт
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};  
export default Parking;
/*<TouchableOpacity onPress={() => {
          navigation.navigate('ParkingRule',);
        }}>
        <View style={{backgroundColor: '#DDDDDD', marginTop: 5, height: 40}}>
          <Text style={{marginTop: 10, marginLeft: 15, fontSize:15,color:"#333333"}}>
            Правила пользования
          </Text>
        </View>
      </TouchableOpacity>*/
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
