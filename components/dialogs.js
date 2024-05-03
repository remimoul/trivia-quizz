import React from 'react';
import Dialog from 'react-native-dialog';

export function CorrectAnswerDialog({ visible, onClose }) {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Bonne réponse 🥳​</Dialog.Title>
      <Dialog.Description>+10 points</Dialog.Description>
      <Dialog.Button label="OK" onPress={onClose} />
    </Dialog.Container>
  );
}

export function IncorrectAnswerDialog({ visible, onClose, correctAnswer }) {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Mauvaise réponse 🙄​</Dialog.Title>
      <Dialog.Description>La bonne réponse était : {correctAnswer}</Dialog.Description>
      <Dialog.Button label="OK" onPress={onClose} />
    </Dialog.Container>
  );
}

export function StopDialog({ visible, onClose, onExit }) {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Retour à l'Accueil ?​</Dialog.Title>
      <Dialog.Button label="Non" onPress={onClose} />
      <Dialog.Button label="Oui" onPress={onExit} />
    </Dialog.Container>
  );
}
