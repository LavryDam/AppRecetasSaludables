import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Platform } from "react-native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";

export default function BuscarRecetas() {
  const [text, setText] = useState("");

  const handleBackPress = () => {
    router.replace("/");
  };

  const handleClearInput = () => {
    setText("");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Pressable
            onPress={handleBackPress}
            style={styles.backButton}
            accessibilityLabel="Volver a la pantalla principal"
          >
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
        </View>
      </SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.title}>¿Qué receta buscas?</Text>
        <View style={styles.inputContainer}>
          <Feather name="search" size={20} color="#999" />
          <TextInput
            style={styles.input}
            placeholder="Escribe el nombre de la receta"
            placeholderTextColor="#999"
            value={text}
            onChangeText={setText}
            accessibilityLabel="Campo de búsqueda de recetas"
          />
          {text.length > 0 && (
            <TouchableOpacity
              onPress={handleClearInput}
              style={styles.clearButton}
              accessibilityLabel="Borrar texto de búsqueda"
            >
              <Feather name="x-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 20 : 60,
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
  },
  backText: {
    marginLeft: 8,
    fontSize: 20,
    color: "#333",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    height: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  clearButton: {
    marginLeft: 10,
  },
});
