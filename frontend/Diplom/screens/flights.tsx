import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {List} from '@ant-design/react-native';
import Flight from '../basic/flight';
import {Text} from 'react-native-elements';
import Parse from '../basic/parse';
import axios from 'axios';

const Item = List.Item;
const Brief = Item.Brief;
export interface IFlightsProps {
  prilet: string;
  date: string;
}

interface flightFromHtml {
  time: String;
  flight_number: String;
  airline: String;
  airport: String;
}

const Flights: React.FunctionComponent<IFlightsProps> = props => {
  console.log(props.prilet)
    return <Parse prilet={props.prilet} date={props.date}/>;
};

export default Flights;
export const title = 'List';
export const description = 'List Example';
