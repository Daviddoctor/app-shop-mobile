import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import logo from './assets/logo-shop.jpg';

const App = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissonResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); //Permiso para abrir la galería
    if (permissonResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }

  return <View style={styles.container}>
    <Text style={styles.title}>SafeWatch</Text>
    <Image
      source={{ uri: selectedImage !== null ? selectedImage.localUri : "https://picsum.photos/200/200" }}
      style={styles.image}
    ></Image>
    <Button
      color="blue"
      title="Press me"
      onPress={() => Alert.alert('Hello!!')}
    />
    <TouchableOpacity
      onPress={openImagePickerAsync}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Press me</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "azure"
  },
  title: {
    fontSize: 30
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "contain"
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})

export default App;