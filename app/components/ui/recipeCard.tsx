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
    setSelectedCategory(category);
  };

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
        data={data}
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
    paddingVertical: 10,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#FAF3E0",
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
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
    flex: 1,
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
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 15,
    backgroundColor: "#FAF3E0",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
