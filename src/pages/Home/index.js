import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Header, Card} from '../../components';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getData = () => {
    axios
      .get('https://api.github.com/users/alannugraha1/repos?page=1')
      .then((response) => {
        const data = response.data;
        this.setState({data});
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        {this.state.data.map((item, index) => (
          <Card key={index} title={item.name} />
        ))}
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  textEmptyData: {
    textAlign: 'center',
    width: '100%',
    marginTop: 16,
  },
});
