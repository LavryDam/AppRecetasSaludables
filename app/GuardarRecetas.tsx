import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import Footer from "./components/ui/footer";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function GuardarRecetas() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <SafeAreaView>
            <Pressable>
              <Feather
                name="arrow-left"
                size={30}
                color="black"
                style={{ position: "absolute", right: 135, bottom: -32 }}
                onPress={() => router.replace("/")}
              />
            </Pressable>
          </SafeAreaView>
          <Text style={styles.title}>Recetas guardadas</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.placeholder}>
            No tienes recetas guardadas todavía.
          </Text>
        </View>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F8E0",
  },
  header: {
    paddingTop: 60,
    backgroundColor: "#FFDAB9",
    paddingVertical: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  placeholder: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
  },
});
