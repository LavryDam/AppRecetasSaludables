import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "./components/ui/footer";

export default function GuardarRecetas() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Recetas guardadas</Text>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F8E0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
