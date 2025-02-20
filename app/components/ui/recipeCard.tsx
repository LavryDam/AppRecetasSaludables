import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function recipeCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require("../../../assets/images/ImagenRecetas.jpg")}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Título de la receta</Text>
          <Text style={styles.cardDescription}>Descripción de la receta</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={require("../../../assets/images/ImagenRecetas.jpg")}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Título de la receta</Text>
          <Text style={styles.cardDescription}>Descripción de la receta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    padding: 10,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 4, // sombra en Android
    shadowColor: "#000", // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
