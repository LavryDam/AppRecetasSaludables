import React, { useState } from "react";
import { FlatList, Pressable, ScrollView } from "react-native";
import data from "../../components/ui/constants";
import { View, Text, Image, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function RecipeCard() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [
    "Desayuno/Merienda",
    "Comida",
    "Cena",
    "Vegano",
    "Vegetariano",
  ];

  const handleCategorySelect = (category: string) => {
    // Si la categoría seleccionada ya está activa, la deseleccionamos
    setSelectedCategory(selectedCategory === category ? "" : category);
  };

  // Filtra las recetas según la categoría seleccionada
  //array, comprueba si la categoría que recibe es la misma que está buscando, si es así la muestra.
  const filteredData = selectedCategory
    ? data.filter((recipe) => recipe.categories.includes(selectedCategory))
    : data;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <Pressable
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => handleCategorySelect(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <FlatList
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/DetallesRecetas?id=${item.id}`)}
          >
            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                source={require("../../../assets/images/ImagenRecetas.jpg")}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    minHeight: 50, // Asegura que las categorías tengan espacio suficiente
    alignItems: "center", // Centra las categorías verticalmente
  },
  categoryButton: {
    backgroundColor: "#FAF3E0",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 20,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  categoryButtonActive: {
    backgroundColor: "#FFD700",
    borderColor: "#FFC107",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center", // Centra el texto dentro del botón
  },
  categoryTextActive: {
    color: "#FFF",
    fontWeight: "bold",
  },
  scrollContainer: {
    paddingBottom: 60,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "#fff",
  },
  cardImage: {
    width: 120,
    height: 145,
    resizeMode: "cover",
  },
  cardContent: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#FAF3E0",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
  },
});
