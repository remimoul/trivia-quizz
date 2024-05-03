import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import style from '../style.js';

export default function Category({ navigation, route }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#badc58',
        borderRadius: 10,
      }}
      onPress={() => categorySelect(item.id)}
    >
      <Text style={{ fontSize: 18 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  const categorySelect = (id) => {
    navigation.navigate('Gameview', {
      id: id,
      difficulty: route.params.difficulty,
    });
  };

  return (
    <>
      <SafeAreaView style={style.appBackground}>
        <Text style={style.title}>Choississez une categorie</Text>
      </SafeAreaView>
      <FlatList
        style={style.appBackground}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
