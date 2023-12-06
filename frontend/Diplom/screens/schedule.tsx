import React, {useState, useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {
  Tabs,
  WhiteSpace,
  Button,
  WingBlank,
  Flex,
} from '@ant-design/react-native';
import Flights from './flights';
import axios from 'axios';
import Flight from '../basic/flight';

export interface IBasicTabsExampoleProps {}
interface flightFromHtml {
  time: String;
  flight_number: String;
  airline: String;
  airport: String;
}
const BasicTabsExample: React.FunctionComponent<
  IBasicTabsExampoleProps
> = props => {
  const [flight_to, Setflight_to] = useState(false);
  const [flight_from, Setflight_from] = useState(true);
  const [flight_to_color, Setflight_to_color] = useState('#ABABB9');
  const [flight_from_color, Setflight_from_color] = useState('#FFFFFF');
  const [prilet, Setprilet] = useState('');
  const [flights1, SetFlights1] = useState<Array<flightFromHtml>>();
  const [flights2, SetFlights2] = useState<Array<flightFromHtml>>();
  const [flights3, SetFlights3] = useState<Array<flightFromHtml>>();
  useEffect(() => {
    SetFlights1(getHtml(prilet, getyestoday()));
    SetFlights2(getHtml(prilet, gettoday()));
    SetFlights3(getHtml(prilet, gettomorrow()));
    console.log(1);
  }, [prilet]);
  function gettoday() {
    const date = new Date();
    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day;
  }
  function gettomorrow() {
    const date = new Date();
    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate() + 1);
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day;
  }
  function getyestoday() {
    const date = new Date();
    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate() - 1);
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day;
  }
  function change() {
    let c1 = flight_from_color == '#FFFFFF' ? '#ABABB9' : '#FFFFFF';
    let c2 = flight_to_color == '#FFFFFF' ? '#ABABB9' : '#FFFFFF';
    Setflight_to(!flight_to);
    Setflight_from(!flight_from);
    Setflight_to_color(c2);
    Setflight_from_color(c1);
    if (prilet == '') {
      Setprilet('/prilet');
    } else {
      Setprilet('');
    }
  }

  function getHtml(prilet: string, date: string) {
    const listOfFlights: Array<flightFromHtml> = [];
    const url =
      'https://nasamolete.net/raspisanie-samoletov-yakutsk' +
      prilet +
      '/' +
      date +
      '/';
    console.log(date);
    const fetch = async () => {
      const {data} = await axios.get(url);
      return data;
    };
    fetch().then(response => {
      const aeroplaneRowsRegex = new RegExp(
        '(aeroplane-row)((.|\n)*)(aeroplane-footer)',
      );
      const timeRegex = new RegExp('"time\\">(.*?)<');
      const numberRegex = new RegExp('ahref.*?>(.*?)<');
      const onlyNumberRegex = new RegExp('[A-Z]+[0-9]+');
      const airlineRegex = new RegExp(
        'company">((S7)|(Якутия)|(Полярныеавиалинии)|(ИрАэро))(.*?)<',
      );
      const airportRegex = new RegExp('<ahref=".*?—(.*?)<');
      const aeroplaneRows = aeroplaneRowsRegex.exec(response);
      var count = 1;

      aeroplaneRows?.map(item => {
        const cleanItem = item.replace(/\s/g, '');
        if (count == 1 || count == 3) {
          const aeroplanes = cleanItem.split('aeroplane-footer');
          aeroplanes.map(object => {
            const tempFlight = {} as flightFromHtml;
            const timeTemp = timeRegex.exec(object);
            if (timeTemp != null) {
              const tempflightNumber = onlyNumberRegex.exec(
                numberRegex.exec(object)![1],
              )![0];
              const tempAirline = airlineRegex.exec(object)![1];
              const tempAirport = airportRegex.exec(object)![1];
              tempFlight.time = timeTemp[1];
              tempFlight.flight_number = tempflightNumber;
              tempFlight.airline = tempAirline;
              tempFlight.airport = tempAirport;
              listOfFlights.push(tempFlight);
            }
          });
        }
        count++;
      });
    });
    return listOfFlights;
  }
  const tabs = [{title: 'Вчера'}, {title: 'Сегодня'}, {title: 'Завтра'}];
  const style = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#fff',
  };

  return (
    <View style={{flex: 1}}>
      <Tabs tabs={tabs}>
        <FlatList
          data={flights1}
          renderItem={({item}) => (
            <View style={{marginTop: 5, marginLeft: 7, marginRight: 7}}>
              <Flight
                time_from={item.time}
                flight_number={item.flight_number}
                airline={item.airline}
                airport={item.airport}
                status="расп"
              />
            </View>
          )}
        />
        <FlatList
          data={flights2}
          renderItem={({item}) => (
            <View style={{marginTop: 5, marginLeft: 7, marginRight: 7}}>
              <Flight
                time_from={item.time}
                flight_number={item.flight_number}
                airline={item.airline}
                airport={item.airport}
                status="расп"
              />
            </View>
          )}
        />
        <FlatList
          data={flights3}
          renderItem={({item}) => (
            <View style={{marginTop: 5, marginLeft: 7, marginRight: 7}}>
              <Flight
                time_from={item.time}
                flight_number={item.flight_number}
                airline={item.airline}
                airport={item.airport}
                status="расп"
              />
            </View>
          )}
        />
      </Tabs>
      {/* <ScrollView>{renderFlight()}</ScrollView> */}
      <WingBlank style={{marginBottom: 5}}>
        <Flex justify="center">
          <Button
            onPress={() => {
              change();
            }}
            style={{backgroundColor: '#273746'}}>
            <Text
              style={{
                color: flight_from_color,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Вылет
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}> / </Text>
            <Text
              style={{
                color: flight_to_color,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Прилет
            </Text>
          </Button>
        </Flex>
      </WingBlank>
    </View>
  );
};
export default BasicTabsExample;
export const title = 'Tabs';
export const description = 'Tabs example';
