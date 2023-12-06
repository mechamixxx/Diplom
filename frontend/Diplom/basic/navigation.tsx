import React from 'react';
import {Text, View, Image} from 'react-native';
import {Icon, SearchBar, TabBar} from '@ant-design/react-native';
import BasicTabsExample from '../screens/schedule';
import BasicListExample from '../screens/hotels';
import Services from '../screens/services';
import Profile from '../screens/profile';
import AuthWindow from '../screens/auth_window';
export default class BasicTabBarExample extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  
  renderContent(pageText: any) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{margin: 50}}>{pageText}</Text>
      </View>
    );
  }

  renderSchedule() {
    return (<BasicTabsExample />);
  }

  renderHotels() {
    return <BasicListExample/>;
  }

  renderServices() {
    
    return <Services/>;
  }

  renderProfile() {
    
    return <AuthWindow/>;
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#000000"
        tintColor="#84ccea"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Табло"
          icon={<Image source={require('../assets/icons/calendar.png')} />}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}>
          {this.renderSchedule()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Image source={require('../assets/icons/bed.png')} />}
          title="Отели"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderHotels()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Image source={require('../assets/icons/apps.png')} />}
          title="Услуги"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}>
          {this.renderServices()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Image source={require('../assets/icons/user.png')} />}
          title="Профиль"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderProfile()}
        </TabBar.Item>
      </TabBar>
    );
  }
}

