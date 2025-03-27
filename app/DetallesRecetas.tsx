import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../app/components/ui/constants";
import { useSearchParams } from "expo-router/build/hooks";

const DetallesRecetas = () => {
  const navigation = useNavigation();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [isSaved, setIsSaved] = useState(false);

  const recipe = id ? data.find((item) => item.id === parseInt(id)) : null;

  const toggleSaveRecipe = () => {
    setIsSaved((prevState) => !prevState);
    Alert.alert(
      isSaved ? "Receta retirada" : "Receta guardada",
      isSaved
        ? "La receta se ha eliminado de tus favoritas."
        : "La receta se ha agregado a tus favoritas.",
    );
  };

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Receta no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={28} color="black" />
          </Pressable>
          <Pressable onPress={toggleSaveRecipe} style={styles.saveButton}>
            <FontAwesome
              name="heart"
              size={28}
              color={isSaved ? "red" : "violet"}
            />
          </Pressable>
        </View>
      </SafeAreaView>

      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/imagenCocina.jpg")}
          />
        </View>
        <FlatList
          data={[recipe]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ScrollView style={styles.scrollContent}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.sectionTitle}>Ingredientes:</Text>
              {item.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.listItem}>
                  • {ingredient}
                </Text>
              ))}
              <Text style={styles.sectionTitle}>Preparación:</Text>
              <Text style={styles.description}>{item.instructions}</Text>
            </ScrollView>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DetallesRecetas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  backButton: {
    padding: 10,
  },
  saveButton: {
    padding: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    height: 170,
    width: 170,
    position: "absolute",
    top: -90,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
    marginTop: 75,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  listItem: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginTop: 10,
  },
  scrollContent: {
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 50,
  },
});
