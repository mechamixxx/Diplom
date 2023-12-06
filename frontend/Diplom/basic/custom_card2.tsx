import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, Carousel, WingBlank} from '@ant-design/react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {BackgroundImage} from 'react-native-elements/dist/config';
import {Image} from 'react-native-elements';

export interface ICustomCardProps {
  name: String,
  address: String,
  price: String,
}

const CustomCard2: React.FunctionComponent<ICustomCardProps> = props => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  let carousel: null | Carousel;
  function onHorizontalSelectedIndexChange(index: number) {
    setSelectedIndex(index);
  }
  return (
    <View style={{paddingTop: 30}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Hotel',);
        }}>
          
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title={props.name}
              thumbStyle={{width: 30, height: 30}}
              extra="Якутск"
            />
            <Card.Body>
              <Carousel
                style={styles.wrapper}
                selectedIndex={selectedIndex}
                autoplay
                infinite
                afterChange={onHorizontalSelectedIndexChange}
                ref={ref => (carousel = ref)}>
                <Image
                  source={require('../assets/hotel_лайнер/лайнер1.png')}
                  resizeMode="cover"
                  style={[styles.containerHorizontal]}></Image>
                <Image
                  source={require('../assets/hotel_лайнер/лайнер1.png')}
                  resizeMode="cover"
                  style={[styles.containerHorizontal]}></Image>
                <Image
                  source={require('../assets/hotel_лайнер/лайнер1.png')}
                  resizeMode="cover"
                  style={[styles.containerHorizontal]}></Image>
              </Carousel>
              <View style={{marginTop:15}}>
                <Text style={{marginLeft: 16,fontSize:20}}>{props.price}</Text>
              </View>
            </Card.Body>
            <Card.Footer content="Адрес:" extra={props.address} />
          </Card>
        </WingBlank>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard2;
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
