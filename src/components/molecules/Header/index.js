import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ICGithub} from '../../../assets';

const Header = () => (
  <View style={styles.header}>
    <Image style={styles.imageHeader} source={ICGithub} />
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
  },
  imageHeader: {
    height: 46,
    width: 45,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
