import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
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
            <Feather
              name="arrow-left"
              size={30}
              color="black"
              style={{ position: "absolute", right: 60, bottom: -2 }}
            />
            <Text style={styles.backText}>Volver</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <View style={styles.card}>
        <Text style={styles.title}>¿Qué receta buscas?</Text>
        <View style={styles.inputContainer}>
          <Feather name="search" size={20} color="#999" style={styles.icon} />
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
              style={styles.cancelButton}
              accessibilityLabel="Borrar texto de búsqueda"
            >
              <Text style={styles.cancelText}>Cancelar</Text>
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
    marginBottom: 10,
    paddingTop: 60,
    backgroundColor: "#FFDAB9",
    paddingVertical: 20,
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
    fontSize: 20,
    color: "black",
    marginLeft: 45,
  },
  card: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
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
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  cancelButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cancelText: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
});
