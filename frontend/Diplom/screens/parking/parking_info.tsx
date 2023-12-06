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

export interface IParkingInfoProps {}

const ParkingInfo: React.FunctionComponent<IParkingInfoProps> = props => {
  const navigation = useNavigation();
  return (
    <ScrollView>
        <Text style={{marginTop:15,marginLeft:15,color:"#333333",fontSize:15}}>В аэропорту «Якутск» эксплуатируется автоматизированная парковочная система «Парк Мастер», включающая в себя 2 «заезда» и 2 «выезда» и автоматизированную платежную систему.</Text>
        <Text style={{marginTop:15,marginLeft:15,color:"#333333",fontSize:15}}>С июля 2022 г. действующая парковочная система дополнена функцией распознавания номеров. Постоянные клиенты платной парковки, а также водители общественного и специального транспорта могут проезжать не только по пластиковым паркинг-картам, но и по государственному номерному знаку автомобиля без использования карты.</Text>
        <Text style={{marginTop:15,marginLeft:15,color:"#333333",fontSize:15}}>Система современного паркинга способствует упорядочиванию движения автотранспорта на привокзальной площади, а наличие встроенных видеокамер у каждого «заезда» и «выезда» повышает уровень безопасности.</Text>
        <Text style={{marginTop:15,marginLeft:15,color:"#333333",fontSize:15}}>Внимание! Пассажиры, нуждающиеся в медицинском сопровождении при вылете или прилете из/в аэропорт «Якутск», могут подать заявку в Медпункт по телефонам: (4112) 49-10-66, 89681561023. По заявке им обеспечивается доступ на эстакаду аэровокзального комплекса автотранспорта для кратковременного заезда* с целью посадки или высадки, услуга предоставляется бесплатно, при этом наличие парковочной карты не требуется.</Text>
        <Text style={{marginTop:15,marginLeft:15,marginBottom:30,color:"#333333",fontSize:15}}>Подробная информация по оформлению парковочных карт для инвалидов на безвозмездной основе представлена в документе Положение о парковке АО "Аэропорт Якутск", приложение Е. Пожалуйста, ознакомьтесь с перечнем необходимых документов, пройдя по ссылке. Телефон для справок: +7 (4112) 49-53-99 (по рабочим дням).</Text>

    </ScrollView>
  );
};
export default ParkingInfo;

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
