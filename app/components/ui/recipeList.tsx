import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { fetchRecipes } from "../../api";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes("Arrabiata"); // Buscar recetas con la palabra clave "Arrabiata".
        setRecipes(data || []); // Asegurarse de manejar un resultado vacío.
      } catch (error) {
        console.error("Error loading recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Cargando recetas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetas</Text>
      <FlatList
        data={recipes}
        //keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Text style={styles.recipeTitle}></Text>
            <Text></Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  recipeCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
