import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const img = require("../../../assets/images/libroCocina.jpg");

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={img}
        style={{ width: 100, height: 100, borderRadius: 20 }}
      />
      <Text style={styles.title}>Yummy Yummy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", // Alinea los elementos en fila
    alignItems: "center", // Centra los elementos verticalmente
    padding: 10, // Agrega algo de padding
    gap: 15, // Espacio entre los elementos
    marginBottom: 650, // Margen inferior
  },
  title: {
    fontSize: 24,
  },
});

export default Header;
