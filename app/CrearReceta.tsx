import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  SafeAreaView,
  Pressable,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function CrearReceta() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSaveRecipe = () => {
    if (!title || !ingredients || !steps) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    Alert.alert("¡Receta creada!", `La receta "${title}" ha sido guardada.`);
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert("Atención", "No seleccionaste ninguna imagen.");
    }
  };

  return (
    <>
      <View style={styles.viewContainer}>
        <SafeAreaView style={{ flexDirection: "row", padding: 5 }}>
          <Pressable style={{ flex: 1 }}>
            <Feather
              name="arrow-left"
              size={30}
              style={{
                position: "absolute",
                left: 16,
                bottom: Platform.OS === "ios" ? -45 : -90,
              }}
              onPress={() => router.replace("/")}
            />
          </Pressable>
        </SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Nueva receta</Text>
          <TextInput
            style={styles.input}
            placeholder="Título de la receta"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Ingredientes (separados por comas)"
            value={ingredients}
            onChangeText={setIngredients}
            multiline
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Pasos para la preparación"
            value={steps}
            onChangeText={setSteps}
            multiline
          />
          <Pressable
            style={({ pressed }) => [
              styles.imageButtonSmall,
              pressed && styles.imageButtonSmallPressed,
            ]}
            onPress={pickImageAsync}
          >
            <Feather
              name="upload"
              size={16}
              color="#333"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.imageButtonSmallText}>Agregar imagen</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleSaveRecipe}>
            <Text style={styles.buttonText}>Guardar receta</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: Platform.OS === "ios" ? 40 : 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#FFDAB9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    elevation: 2,
    width: "60%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageButtonSmall: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#98D7C2", // Verde suave acorde con el fondo
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 2,
    width: "50%",
  },
  imageButtonSmallPressed: {
    backgroundColor: "#7CBFA7", // Color más oscuro al presionar
  },
  imageButtonSmallText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
});
