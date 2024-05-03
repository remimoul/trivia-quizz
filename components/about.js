import React from 'react';
import { View, Text } from 'react-native';
import style from '../style';

export default function About() {
  return (
    <View style={style.container}>
      <Text style={[style.title, { fontSize: 100 }]}>😛​</Text>
      <Text style={style.title}>https://opentdb.com/</Text>
    </View>
  );
}
