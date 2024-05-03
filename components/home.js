import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import style from '../style';

export default function Home({ navigation }) {
  const [difficulty, setDifficulty] = useState('easy');

  const startGame = () => {
    navigation.navigate('Category', { difficulty: difficulty });
  };

  return (
    <View style={style.container}>
      <Image style={style.logo} source={require('../assets/logo.png')} />
      <Picker selectedValue={difficulty} onValueChange={(itemValue) => setDifficulty(itemValue)}>
        <Picker.Item label="Facile" value="easy" />
        <Picker.Item label="Moyen" value="medium" />
        <Picker.Item label="Difficile" value="hard" />
      </Picker>
      <Pressable style={style.button} title="Valider" onPress={startGame}>
        <Text style={style.text}>START</Text>
      </Pressable>
    </View>
  );
}
