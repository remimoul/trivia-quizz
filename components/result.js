import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../style';
import { useNavigation } from '@react-navigation/native';

export default function Result({ score }) {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={style.title}>Résultats</Text>
      <Text style={style.containerResult}>Votre score : {score} /100</Text>
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
