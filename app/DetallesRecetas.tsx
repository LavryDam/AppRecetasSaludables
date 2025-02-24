import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View, Image, Text } from "react-native";

const DetallesRecetas = () => {
  return (
    <View style={style.container}>
      <View style={style.card}>
        <View style={style.card2}>
          <Image
            style={style.imagen}
            source={require("../assets/images/imagenCocina.jpg")}
          />
        </View>
        <Text style={style.title}> Pancakes </Text>
        <ScrollView
          contentContainerStyle={style.scrollContent}
          style={style.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Text style={style.text}> Ingredientes: </Text>
          <Text style={style.description}>
            - 1 taza de harina de trigo {"\n"}- 1 taza de leche {"\n"}- 1 huevo{" "}
            {"\n"}- 1 cucharada de azúcar {"\n"}- 1 cucharada de polvo para
            hornear {"\n"}- 1 cucharada de mantequilla derretida {"\n"}- 1 pizca
            de sal
          </Text>
          <Text style={style.text}> Preparación: </Text>
          <Text style={style.description}>
            1. En un recipiente mezcla la harina, la leche, el huevo, el azúcar,
            el polvo para hornear, la mantequilla y la sal.{"\n"}
            2. Calienta un sartén y agrega un poco de mantequilla.{"\n"}
            3. Vierte un poco de la mezcla en el sartén y cocina a fuego medio.
            {"\n"}
            4. Voltea el pancake y cocina por el otro lado.{"\n"}
            5. Repite el proceso con el resto de la mezcla.{"\n"}
            6. Sirve los pancakes con miel, mermelada o frutas.
          </Text>
        </ScrollView>
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
    height: "70%",
    marginTop: 170,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card2: {
    height: 200,
    width: 200,
    position: "absolute",
    top: -100,
  },
  imagen: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 56,
  },
  title: {
    color: "#000",
    fontSize: 28,
    marginTop: 120,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#000",
    fontSize: 20,
    marginVertical: 16,
    marginRight: "60%",
    fontWeight: "bold",
  },
  description: {
    color: "#000",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
