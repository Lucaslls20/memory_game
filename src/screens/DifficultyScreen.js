import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const DifficultyScreen = ({ navigation }) => {
  const [difficulty, setDifficulty] = useState('easy');

  const handleStartGame = () => {
    navigation.navigate('Game', { difficulty });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Difficulty</Text>
      <Picker
        selectedValue={difficulty}
        style={styles.picker}
        onValueChange={(itemValue) => setDifficulty(itemValue)}
      >
        <Picker.Item label="Easy" value="easy" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Hard" value="hard" />
      </Picker>
      <Button title="Start Game" onPress={handleStartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default DifficultyScreen;
