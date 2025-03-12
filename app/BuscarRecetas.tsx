import { Feather, Ionicons } from "@expo/vector-icons";
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

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <SafeAreaView>
          <Pressable>
            <Feather
              name="arrow-left"
              size={30}
              color="black"
              style={{ position: "absolute", left: 2, bottom: 20 }}
              onPress={() => router.replace("/")}
            />
          </Pressable>
        </SafeAreaView>
        <Text style={styles.title}>¿Qué receta buscas?</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Escribe el nombre de la receta"
            placeholderTextColor="#999"
            value={text}
            onChangeText={setText}
          />
          {/* Botón Cancelar */}
          {text.length > 0 && (
            <TouchableOpacity
              onPress={() => setText("")}
              style={styles.cancelButton}
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
    padding: 20,
  },
  card: {
    paddingTop: "30%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row", // Coloca el TextInput, ícono y botón en una fila
    alignItems: "center", // Alinea los elementos verticalmente
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10, // Espacio entre el ícono y el TextInput
  },
  input: {
    flex: 1, // Ocupa todo el espacio disponible
    paddingVertical: 10,
    fontSize: 16,
    color: "#333",
  },
  cancelButton: {
    marginLeft: 10, // Espacio entre el TextInput y el botón
  },
  cancelText: {
    fontSize: 16,
    color: "#007BFF", // Color azul para resaltar el botón
    fontWeight: "bold",
  },
});
