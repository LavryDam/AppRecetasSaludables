import React from "react";
import { StyleSheet, View, Image } from "react-native";

const DetallesRecetas = () => {
  return (
    <View style={style.container}>
      <View style={style.card}>
        <View style={style.card2}>
          {" "}
          <Image
            style={style.imagen}
            source={require("../assets/images/imagenCocina.jpg")}
          />
        </View>
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
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
  },
  card2: {
    backgroundColor: "red",
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },
  imagen: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
