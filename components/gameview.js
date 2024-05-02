import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import style from "../style.js";
import { decode } from "he";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Gameview({ route }) {
  const { difficulty, id } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const storeScore = async (value) => {
    try {
      await AsyncStorage.setItem("score", JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 10);
    }
    setCurrentQuestion(currentQuestion + 1);
    storeScore(score);
  };

  return (
    <SafeAreaView>
      {/* <Text style={style.title}>Question n° {currentQuestion + 1}</Text> */}
      {/* {questions.length > 0 && (
        <View>
          <Text>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].incorrect_answers.map((answer, index) => (
            <TouchableOpacity key={index} onPress={() => handleAnswer(answer)}>
              <Text>{answer}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() =>
              handleAnswer(questions[currentQuestion].correct_answer)
            }
          >
            <Text>{questions[currentQuestion].correct_answer}</Text>
          </TouchableOpacity>
        </View>
      )} */}

      {questions && currentQuestion < questions.length ? (
        <View style={style.containerQuestion}>
          <Text style={style.title}>Question n° {currentQuestion + 1}</Text>
          <Text>{decode(questions[currentQuestion].category)}</Text>
          <Text>
            Difficulté : {decode(questions[currentQuestion].difficulty)}
          </Text>
          <Text>Score : {score}</Text>
          {/* Affichage de la question */}
          <Text style={style.question}>
            {decode(questions[currentQuestion].question)}
          </Text>
          {/* Affichage des réponses */}
          {questions[currentQuestion].incorrect_answers.map((answer, index) => (
            <TouchableOpacity
              style={style.answer}
              key={index}
              onPress={() => handleAnswer(answer)}
            >
              <Text>{decode(answer)}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            style={style.answer}
            onPress={() =>
              handleAnswer(questions[currentQuestion].correct_answer)
            }
          >
            <Text>{decode(questions[currentQuestion].correct_answer)}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={style.title}>Résultats</Text>
          <Text>Votre score est: {score}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
