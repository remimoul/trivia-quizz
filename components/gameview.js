import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import style from "../style.js";
import { decode } from "he";
import Dialog from "react-native-dialog";
import { FontAwesome } from '@expo/vector-icons';
import Result from './result';

export default function Gameview({ route,navigation }) {
  const { difficulty, id } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogStopVisible, setDialogStopVisible] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [correctDialogVisible, setCorrectDialogVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Permet de mélanger les réponses pour ne pas avoir la bonne réponse en dernier en utilisant l'algorithme de Fisher-Yates
  // https://www.youtube.com/watch?v=60A-G7irEqI
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((json) => {
        if (Array.isArray(json.results)){
            const questions = json.results.map((question) => ({
          ...question,
          answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }));
        setQuestions(questions);
        } else {
          console.error('Unexpected data structure:', json);
        }
      
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setCorrectAnswer(null); 
  };

  const validateAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correct_answer) {
      setScore(score + 10);
      setCorrectDialogVisible(true);
    }else{
      setDialogVisible(true);
      setCorrectAnswer(questions[currentQuestion].correct_answer);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null); 
  };

  const dialogClose = () => {
    setDialogVisible(false);

  };

  const dialogCorrectClose = () => {
    setCorrectDialogVisible(false);
  };

  const exitConfirm = () => {
    navigation.navigate('Accueil');
    setDialogStopVisible(false);
  };

  const showDialogStop = () => {
    setDialogStopVisible(true);
  };

  const dialogStopClose = () => {
    setDialogStopVisible(false);
  };

  return (
    <SafeAreaView style={style.headerTitle}>
      {questions && currentQuestion < questions.length ? (
        <View style={style.containerQuestion}>
          <View style={style.containerNumQuestion}>
     <Text style={style.title}>Question n° {currentQuestion + 1}</Text>
          <TouchableOpacity onPress={showDialogStop} style={{ marginRight: 20 }}>
              <FontAwesome name="stop" size={35} color="red" />
          </TouchableOpacity> 
          <Dialog.Container visible={dialogStopVisible}>
        <Dialog.Title>Retour à l'Accueil ?​</Dialog.Title>
        <Dialog.Button label="Non" onPress={dialogStopClose} />
        <Dialog.Button label="Oui" onPress={exitConfirm} />
      </Dialog.Container>
          </View>
     

          <Text style={style.infoGame}>{decode(questions[currentQuestion].category)}</Text>
          <Text style={style.infoGame}>Level : {decode(questions[currentQuestion].difficulty)}</Text>
          <Text style={style.infoGame}>Score : <Text style={style.scoreStyle}>{score}</Text> </Text>

          {/* Affichage de la question */}
          <Text style={style.question}>
            {decode(questions[currentQuestion].question)}
          </Text>
          {/* Affichage des réponses */}
          {questions[currentQuestion].answers.map((answer, index) => (
            <TouchableOpacity
              style={[style.answer, selectedAnswer === answer && { backgroundColor:"green" }]}
              key={index}
              onPress={() => handleAnswer(answer)}
            >
              <Text>{decode(answer)}</Text>
            </TouchableOpacity>
          ))}

          {selectedAnswer && (
            <TouchableOpacity
              style={style.validateButton}
              onPress={validateAnswer}
            >
              <Text style={style.text}>Valider</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <Result score={score}></Result>
      )}

<Dialog.Container visible={correctDialogVisible}>
        <Dialog.Title>Bonne réponse 🥳​</Dialog.Title>
        <Dialog.Description>
          +10 points
        </Dialog.Description>
        <Dialog.Button label="OK" onPress={dialogCorrectClose} />
      </Dialog.Container>

<Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Mauvaise réponse 🙄​</Dialog.Title>
        <Dialog.Description>
          La bonne réponse était : {correctAnswer ? decode(correctAnswer) : ""}
        </Dialog.Description>
        <Dialog.Button label="OK" onPress={dialogClose} />
      </Dialog.Container>
    </SafeAreaView>
  );
}
