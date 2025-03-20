import React, { useState } from "react";
import Checkbox from "expo-checkbox";
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
  const [isChecked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

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

  const handleCheckBox = (key: keyof typeof isChecked) => {
    setChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Alterna el estado del checkbox específico
    }));
  };

  return (
    <>
      <View style={styles.viewContainer}>
        <SafeAreaView
          style={{ flexDirection: "row", alignItems: "center", padding: 25 }}
        >
          <Pressable
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => router.replace("/")}
          >
            <Feather name="arrow-left" size={30} color="#333" />
            <Text style={{ marginLeft: 8, fontSize: 20, color: "#333" }}>
              Inicio
            </Text>
          </Pressable>
        </SafeAreaView>
        <View style={styles.container}>
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
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked.checkbox1}
              onValueChange={() => handleCheckBox("checkbox1")}
              color={"#4CAF50"}
            />
            <Text style={styles.paragraph}>Desayuno/Merienda</Text>
            <Checkbox
              style={styles.checkbox}
              value={isChecked.checkbox2}
              onValueChange={() => handleCheckBox("checkbox2")}
              color={"#4CAF50"}
            />
            <Text style={styles.paragraph}>Comida</Text>
          </View>
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked.checkbox3}
              onValueChange={() => handleCheckBox("checkbox3")}
              color={"#4CAF50"}
            />
            <Text style={styles.paragraph}>Cena</Text>
            <Checkbox
              style={styles.checkbox}
              value={isChecked.checkbox4}
              onValueChange={() => handleCheckBox("checkbox4")}
              color={"#4CAF50"}
            />
            <Text style={styles.paragraph}>Vegetariana</Text>
            <Checkbox
              style={styles.checkbox}
              value={isChecked.checkbox5}
              onValueChange={() => handleCheckBox("checkbox5")}
              color={"#4CAF50"}
            />
            <Text style={styles.paragraph}>Vegana</Text>
          </View>
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
            <Text style={styles.buttonText}>Guardar</Text>
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
    padding: 25,
    marginTop: Platform.OS === "ios" ? 40 : -25,
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
    borderColor: "#ccc",
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
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 30,
    elevation: 2,
    width: "100%",
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
    marginTop: 15,
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
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
