import React, { useEffect } from "react";
import { View, Image, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import style from "../style";

export default function Result({ navigation }) {
  const getScore = async () => {
    try {
      const value = await AsyncStorage.getItem("score");
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchScore = async () => {
      const score = await getScore();
      console.log(score); // Do something with the score
    };

    fetchScore();
  }, []);

  return (
    <View style={style.container}>
      <Text>Score: {score}</Text>
    </View>
  );
}
