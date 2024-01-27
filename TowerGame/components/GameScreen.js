import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const testUserTower = ['Apple', 'Banana', 'Orange'];
  const testOpponentTower = ['Car', 'Plane', 'Train']


  const [userTower, setUserTower] = useState(testUserTower);
  const [opponentTower, setOpponentTower] = useState(testOpponentTower);
  const [currentWord, setCurrentWord] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);

  // Function to handle submitting a guess
  const handleGuessSubmit = () => {
    if (currentWord.trim() !== '') {
      // Add the guessed word to the user's tower
      setUserTower([...userTower, currentWord]);

      // Add the guessed word to the list of guessed words
      setGuessedWords([...guessedWords, currentWord]);

      // Clear the current word input
      setCurrentWord('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TOWER</Text>

      <View style={styles.towerContainer}>
        <View style={styles.tower}>
          <Text style={styles.towerTitle}>You</Text>
          {userTower.map((word,index) => (
            <Text key={index}>{word}</Text>
          ))}
        </View>

        <View style={styles.tower}>
          <Text style={styles.towerTitle}>Opp</Text>
          {opponentTower.map((word,index) => (
            <Text key={index}>{word}</Text>
          ))}
        </View>
      </View>

      <View style={styles.guessContainer}>
        <Text style={styles.guessLabel}>Can I get a...</Text>
        <TextInput
          style={styles.input}
          value={currentWord}
          onChangeText={(text) => setCurrentWord(text)}
        />
        <TouchableOpacity
          onPress={handleGuessSubmit}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 20,
  },
  towerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  tower: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  towerTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  guessContainer: {
    marginTop: 20,
    width: '100%',
  },
  guessLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
