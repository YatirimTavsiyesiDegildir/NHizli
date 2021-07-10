import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Image,
} from 'react-native';
import {
  Divider,
  Layout,
  TopNavigation,
  Icon,
  TopNavigationAction,
  Text,
  Card,
} from '@ui-kitten/components';

import {LineChart, PieChart, ContributionGraph} from 'react-native-chart-kit';
import {
  SubscriptionWarningCard,
  FriendWarningCard,
} from '../../../Components/Card';

import {OurProgressChart} from '../../../src/component/ProgressChart';
import styles from '../../../src/styles';

export default class GraphsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false, visible2: false, refreshing: false};
  }

  componentDidMount() {}

  PlusIcon = props => <Icon {...props} name="plus-outline" />;
  BellIcon = props => <Icon {...props} name="bell-outline" />;

  renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={this.PlusIcon}
        onPress={() => {
          this.props.navigation.navigate('AddBankAPI');
          this.setState({visible: true});
        }}
      />
    </React.Fragment>
  );

  renderLeftActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={this.BellIcon}
        onPress={() => {
          this.props.navigation.navigate('NotificationsScreen');
          this.setState({visible: true});
        }}
      />
    </React.Fragment>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation
          title={<Text style={styles.miniTitle}>Hazirlan</Text>}
          alignment="center"
          accessoryRight={this.renderRightActions}
          accessoryLeft={this.renderLeftActions}
        />
        <Divider />
        <Layout style={styles.layout}>
          <ScrollView
            style={styles.container}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.setState({refreshing: false})}
              />
            }>
            <Card
              style={[
                styles.card,
                {alignItems: 'flex-start', justifyContent: 'flex-start'},
              ]}>
              <Image
                source={require('../../../src/img/marathon_logo.png')}
                style={{width: 100, height: 100}}
                resizeMode={'contain'}
              />
              <View
                style={{
                  backgroundColor: '#eb008d',
                  width: 310,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 16,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#FFF',
                    fontSize: 24,
                  }}>
                  3 Ay, 27 Gun, 6 Saat
                </Text>
              </View>
            </Card>

            <View style={styles.divider} />

            <Card style={styles.card}>
              <Text category="h4" style={styles.titleTextMedium}>
                Bu Ay Tamamladigin Kosular
              </Text>
              <LineChart
                data={{
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
                  datasets: [
                    {
                      data: [1000, 1200, 1400, 1600, 1800, 2000, 1500, 1700],
                    },
                  ],
                }}
                width={310} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="m"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#FFD6D9',
                  backgroundGradientFrom: '#FF708D',
                  backgroundGradientTo: '#DB2C66',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 16,
                }}
              />
            </Card>

            <View style={styles.divider} />

            <Card style={styles.card}>
              <Text category="h4" style={styles.titleTextMedium}>
                Dayanikligin
              </Text>
              <OurProgressChart />
            </Card>
            <View style={{height: 75}} />
          </ScrollView>

          {/*
                            <Text category={'h5'} style={{textAlign: 'center'}}>
                                Lütfen bir bankanın API'ile bağlantı kurun.
                            </Text>*/}
        </Layout>
      </SafeAreaView>
    );
  }
}

const GraphsStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
  },
  sectionTitle: {
    textAlign: 'center',
  },
});
