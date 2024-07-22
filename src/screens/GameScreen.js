import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

const GameScreen = ({ route }) => {
  const { difficulty } = route.params;
  const [images, setImages] = useState([]);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    // Inicialize imagens baseadas na dificuldade
    const numImages = difficulty === 'easy' ? 6 : difficulty === 'medium' ? 12 : 18;
    setImages(Array.from({ length: numImages }, (_, i) => ({ id: i, src: null, matched: false })));
  }, [difficulty]);

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      // Substitua a lógica abaixo com a lógica de atualização de imagens
      console.log(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game ({difficulty})</Text>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            {item.src ? <Image source={{ uri: item.src }} style={styles.image} /> : <Text>?</Text>}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
      <RNCamera
        ref={(ref) => setCamera(ref)}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <Button title="Take Picture" onPress={takePicture} />
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
  card: {
    flex: 1,
    margin: 5,
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  camera: {
    flex: 0,
    width: '100%',
    height: 200,
  },
});

export default GameScreen;
