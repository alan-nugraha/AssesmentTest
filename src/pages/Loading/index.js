import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

class Loading extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading</Text>
      </View>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
