import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Alert, FlatList, Platform, Pressable, ScrollView } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "../app/components/ui/constants";
import { useSearchParams } from "expo-router/build/hooks";

const DetallesRecetas = () => {
  const navigation = useNavigation();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [isSaved, setIsSaved] = useState(false); // Estado para manejar si la receta está guardada

  const recipe = id ? data.find((item) => item.id === parseInt(id)) : null;

  const toggleSaveRecipe = () => {
    setIsSaved(!isSaved); // Alternar entre guardado y no guardado
    Alert.alert(
      isSaved ? "Receta retirada" : "Receta guardada",
      isSaved
        ? "La receta se ha eliminado de tus favoritas."
        : "La receta se ha agregado a tus favoritas.",
    );
  };

  // Si no se encuentra la receta, mostramos un mensaje
  if (!recipe) {
    return (
      <View style={style.container}>
        <Text>Receta no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <SafeAreaView style={{ flexDirection: "row", padding: 5 }}>
        <Pressable style={{ flex: 1 }}>
          <FontAwesome
            name="heart"
            size={30}
            color={isSaved ? "red" : "violet"}
            style={{ position: "absolute", right: 16, bottom: -40 }}
            onPress={toggleSaveRecipe}
          />
          <Feather
            name="arrow-left"
            size={34}
            color="black"
            style={{ position: "absolute", left: 16, bottom: -43 }}
            onPress={() => navigation.goBack()}
          />
        </Pressable>
      </SafeAreaView>
      <View style={style.card}>
        <View style={style.card2}>
          <Image
            style={style.imagen}
            source={require("../assets/images/imagenCocina.jpg")}
          />
        </View>
        <FlatList
          data={[recipe]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ScrollView style={style.scrollContent}>
              <View>
                <Text style={style.title}>{item.name}</Text>
                <Text style={style.text}>Ingredientes:</Text>
                {item.ingredients.map((ingredient, index) => (
                  <Text key={index} style={style.description}>
                    • {ingredient}
                  </Text>
                ))}
                <Text style={style.text}>Prepración:</Text>
                <Text style={style.description}>{item.instructions}</Text>
              </View>
            </ScrollView>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DetallesRecetas;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  card: {
    backgroundColor: "#fff",
    height: Platform.OS === "ios" ? "65%" : "70%",
    marginTop: 190,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  card2: {
    height: 200,
    width: 200,
    top: -100,
    position: "absolute",
  },
  imagen: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 56,
  },
  title: {
    color: "#000",
    fontSize: 25,
    marginTop: 120,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#000",
    fontSize: 18,
    marginVertical: 16,
    marginRight: "60%",
    fontWeight: "bold",
  },
  description: {
    color: "#000",
    fontSize: 16,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 90,
  },
});
