import React, {useState, useEffect, useCallback} from 'react';

import {
  View,
  FlatList,
  ListRenderItem,
  VirtualizedList,
  RefreshControl,
} from 'react-native';
import {DatePicker, Flex, Grid, Button} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-elements';
import axios from 'axios';
import Flight from './flight';
import {List} from '@ant-design/react-native';
interface flightFromHtml {
  time: String;
  flight_number: String;
  airline: String;
  airport: String;
}
const Item = List.Item;

export interface IParseProps {
  prilet: string;
  date: string;
}

const Parse: React.FunctionComponent<IParseProps> = props => {
  //const tflights = getHtml(props.prilet,props.date);
  const [flights, setFlights] = useState<Array<flightFromHtml>>([]);
  useEffect(() => {
    setFlights(getHtml(props.prilet, props.date));
  },[]);
  //setFlights(getHtml(props.prilet,props.date))
  //const [changed, setChanged] = useState(true);
  /*useEffect(() => {
    getHtml(props.prilet,props.date);
    console.log(2);
  }, []);*/

  /*useEffect(() => {
    setChanged(!changed)
  }, [flights]);*/
  //setFlights(getHtml(props.prilet,props.date));
  function getHtml(prilet: string, date: string) {
    const listOfFlights: Array<flightFromHtml> = [];
    const url =
      'https://nasamolete.net/raspisanie-samoletov-yakutsk' +
      prilet +
      '/' +
      date +
      '/';
    console.log(date)
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
      const airlineRegex = new RegExp('company">(.*?)<');
      const airportRegex = new RegExp('place">(.*?)<');
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
    /*var newArr = [...flights];
    newArr = listOfFlights;*/

    //setFlights(listOfFlights);

    /*setChanged(false);*/
  }
  //setFlights(getHtml(props.prilet,props.date));
  return (
    <FlatList
      data={flights}
      renderItem={({item}) => (
        <Flight
          time_from={item.time}
          time_to={item.time}
          flight_number={item.flight_number}
          airline={item.airline}
          airport={item.airport}
          status="расп"
        />
      )}
    />
  );
};

export default Parse;
