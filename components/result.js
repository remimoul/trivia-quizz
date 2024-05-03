import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import style from "../style";
import { PieChart } from 'react-native-svg-charts';
import { useNavigation } from '@react-navigation/native';

export default function Result({ score}) {
  const navigation = useNavigation();
  const dataPieChart = [
    {
      key: 1,
      value: score,
      svg: { fill: '#009432' },
    },
    {
      key: 2,
      value: 100 - score,
      svg: { fill: '#a0a0a0' },
    },
  ];

  return (
    <View>
    <Text style={style.title}>Résultats</Text>
    <PieChart style={style.pieChart} data={dataPieChart} />
    <Text style={style.containerResult}>Votre score : {score} /100</Text>
    <TouchableOpacity title="Rejouer" style={style.validateButton} onPress={() => navigation.navigate('Accueil')} >
      <Text style={style.text}>Rejouer</Text>
       </TouchableOpacity>
  </View>
  );
}
