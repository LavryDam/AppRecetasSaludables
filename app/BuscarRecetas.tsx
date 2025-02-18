import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "./components/ui/footer";

export default function BuscarRecetas() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Buscar Recetas</Text>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F8E0",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
