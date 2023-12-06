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

export interface IParkingRuleProps {}

const ParkingRule: React.FunctionComponent<IParkingRuleProps> = props => {
  const navigation = useNavigation();
  return (
    <View>
        <Text>Правила</Text>
    </View>
  );
};
export default ParkingRule;

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
