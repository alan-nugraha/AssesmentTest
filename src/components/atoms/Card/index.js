import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Card = ({title}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
