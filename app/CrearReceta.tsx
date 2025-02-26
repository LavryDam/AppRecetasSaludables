import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  SafeAreaView,
  Pressable,
} from "react-native";
import Footer from "./components/ui/footer";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function CrearReceta() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

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

  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        <SafeAreaView style={{ flexDirection: "row", padding: 5 }}>
          <Pressable style={{ flex: 1 }}>
            <FontAwesome
              name="arrow-left"
              size={30}
              color="black"
              style={{ position: "absolute", left: 16, bottom: -90 }}
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
          <Button
            title="Guardar Receta"
            onPress={handleSaveRecipe}
            color="#4CAF50"
          />
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 80,
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
    textAlignVertical: "top", // Para que el texto comience desde la parte superior
  },
});
