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

export default function CrearReceta() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [isChecked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const handleBackPress = () => {
    router.replace("/");
  };

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

  const handleCheckBox = (key: keyof typeof isChecked) => {
    setChecked((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <View style={styles.viewContainer}>
      <SafeAreaView style={styles.headerContainer}>
        <Pressable onPress={handleBackPress} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
      </SafeAreaView>
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          marginTop: 25,
          fontWeight: "bold",
        }}
      >
        Crear nueva receta
      </Text>
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
        <Text style={styles.categoria}>Categoría:</Text>
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
        <Pressable style={styles.button} onPress={handleSaveRecipe}>
          <Text style={styles.buttonText}>Guardar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#FFDAB9",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Platform.OS === "ios" ? 20 : 0,
    marginLeft: Platform.OS === "ios" ? 15 : 0,
  },
  container: {
    flex: 1,
    padding: 25,
    marginTop: Platform.OS === "ios" ? 10 : 0,
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
    borderRadius: 8,
    marginTop: 30,
    elevation: 2,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  categoria: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
