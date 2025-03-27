import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function GuardarRecetas() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace("/")}
        >
          <Feather name="arrow-left" size={24} color="black" />
          <Text style={styles.backText}>Recetas guardadas</Text>
        </Pressable>
      </SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.placeholder}>
          No tienes recetas guardadas todavía.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  backText: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  placeholder: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
  },
});
