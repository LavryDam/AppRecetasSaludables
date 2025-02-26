import { router } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

export default function recipeCard() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        horizontal={false}
      >
        <View style={styles.card}>
          <Pressable onPress={() => router.push("/DetallesRecetas")}>
            <Image
              style={styles.cardImage}
              source={require("../../../assets/images/ImagenRecetas2.jpg")}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Pancakes</Text>
              <Text style={styles.cardDescription}>
                Con sólo 6 ingredientes, estos pancakes son fáciles de hacer y
                deliciosos.
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../../../assets/images/ImagenRecetas2.jpg")}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Crema de cacao</Text>
            <Text style={styles.cardDescription}>
              Tiene 3 ingredientes y es una crema de cacao casera y saludable.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Pressable onPress={() => router.push("/DetallesRecetas")}>
            <Image
              style={styles.cardImage}
              source={require("../../../assets/images/ImagenRecetas2.jpg")}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Pancakes</Text>
              <Text style={styles.cardDescription}>
                Con sólo 6 ingredientes, estos pancakes son fáciles de hacer y
                deliciosos.
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../../../assets/images/ImagenRecetas2.jpg")}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Crema de cacao</Text>
            <Text style={styles.cardDescription}>
              Tiene 3 ingredientes y es una crema de cacao casera y saludable.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../../../assets/images/ImagenRecetas2.jpg")}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Crema de cacao</Text>
            <Text style={styles.cardDescription}>
              Tiene 3 ingredientes y es una crema de cacao casera y saludable.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={require("../../../assets/images/ImagenRecetas2.jpg")}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Crema de cacao</Text>
            <Text style={styles.cardDescription}>
              Tiene 3 ingredientes y es una crema de cacao casera y saludable.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
//height: Platform.OS === "ios" ? "8%" : "6%",
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  scrollContainer: {
    paddingBottom: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Platform.OS === "ios" ? "8%" : "30%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    width: "45%",
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 160,
  },
  cardContent: {
    padding: 10,
    backgroundColor: "#FAF3E0",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12, // Reducir el tamaño del texto
    color: "#666",
    lineHeight: 18,
  },
});
