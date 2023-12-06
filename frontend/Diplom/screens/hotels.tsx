import React from 'react';
import {Text, View} from 'react-native';
import {ListView} from '@ant-design/react-native';
import CustomCard from '../basic/custom_card';
import CustomCard2 from '../basic/custom_card2';
export default class BasicListExample extends React.Component<any, any> {
  state = {
    layout: 'list',
  };
  sleep = (time: any) =>
    new Promise(resolve => setTimeout(() => resolve(''), time));
  onFetch = async (
    page = 1,
    startFetch: (arg0: string[], arg1: number) => void,
    abortFetch: () => void,
  ) => {
    try {
      //This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 5;
      if (this.state.layout === 'grid') {
        pageLimit = 60;
      }
      const skip = (page - 1) * pageLimit;

      //Generate dummy data
      let rowData = Array.from(
        {length: pageLimit},
        (_, index) => `item -> ${index + skip}`,
      );

      //Simulate the end of the list if there is no more data returned from the server
      if (page === 3) {
        rowData = [];
      }

      //Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(0);
      startFetch(rowData, pageLimit);
    } catch (err) {
      abortFetch(); //manually stop the refresh or pagination if it encounters network error
    }
  };

  renderItem = (item: any) => {
    return  <CustomCard name="azimut" address="пр. Ленина, 24" price="5 346р"></CustomCard>;
  };

  render() {
    return (
      // <ListView
      //   onFetch={this.onFetch}
      //    keyExtractor={(item: any, index: any) =>
      //     `${this.state.layout} - ${item} - ${index}`
      //    }
      //   renderItem={this.renderItem}
      //    numColumns={this.state.layout === 'list' ? 1 : 3}

      // />
      <View>
        <CustomCard name="AZIMUT" address="пр. Ленина, 24" price="3 600р"></CustomCard>
        <CustomCard2 name="Лайнер" address="ул. Быковского, 7" price="4 800р"></CustomCard2>
      </View>
    );
  }
}

export const title = 'ListView';
export const description = 'ListView Example';
