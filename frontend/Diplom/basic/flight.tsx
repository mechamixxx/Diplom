import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Grid} from '@ant-design/react-native';

export default class Flight extends React.Component<any, any> {
  render() {
    return (

        <View
          style={{
            flexDirection: 'row',
            height: 40,
            //paddingTop: 15,
            backgroundColor: '#EAF2F8',
            alignItems: 'center',
          }}>
          <Text style={{flex: 0.1, textAlign: 'center', fontSize:12}}>
            {this.props.time_from}
          </Text>
          {/* <Text style={{flex: 0.15, }}>{this.props.time_to}</Text> */}
          <Text style={{flex: 0.14, textAlign: 'center', fontSize:12}}>
            {this.props.flight_number}
          </Text>
          <Text style={{flex: 0.32, textAlign: 'center', fontSize:12}}>
            {this.props.airline}
          </Text>
          <Text style={{flex: 0.3, textAlign: 'center', fontSize:12}}>
            {this.props.airport}
          </Text>
          <Text style={{flex: 0.1, textAlign: 'center', fontSize:12}}>
            {this.props.status}
          </Text>
        </View>
    );
  }
}
