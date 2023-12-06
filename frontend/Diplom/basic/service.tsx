import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Card, WhiteSpace, WingBlank} from '@ant-design/react-native';

export default class Service extends React.Component<any, any> {
  render() {
    return (
      <View style={{paddingTop: 30}}>
        <WingBlank size="lg">
          <TouchableOpacity>
            <Card>
              <Card.Header
                title={this.props.name}
                thumbStyle={{width: 30, height: 30}}
              />
              <Card.Body>
                <View style={{height: 42}}>
                  <Text style={{marginLeft: 16, color:"#333333"}}>{this.props.description}</Text>
                </View>
              </Card.Body>
            </Card>
          </TouchableOpacity>
        </WingBlank>
      </View>
    );
  }
}
