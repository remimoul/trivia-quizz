import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../style';
import { useNavigation } from '@react-navigation/native';
import { PieChart } from 'react-native-gifted-charts';

export default function Result({ score }) {
  const navigation = useNavigation();
  const data = [
    { value: score, label: 'Votre score', color: '#2ecc71' },
    { value: 100 - score, label: 'Reste', color: '#95a5a6' },
  ];
  return (
    <View>
      <Text style={style.title}>Résultats</Text>
      <Text style={style.containerResult}>Votre score : {score} /100</Text>
      <View style={style.chartContainer}>
        <PieChart style={style.pieChart} data={data} unit="%" />
      </View>
      <TouchableOpacity
        title="Rejouer"
        style={style.validateButton}
        onPress={() => navigation.navigate('Accueil')}
      >
        <Text style={style.text}>Rejouer</Text>
      </TouchableOpacity>
    </View>
  );
}
