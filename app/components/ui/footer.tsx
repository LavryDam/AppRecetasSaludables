import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Pressable onPress={() => router.push("/")}>
        <Ionicons
          style={styles.icon}
          name="home-outline"
          size={30}
          color="black"
        />
      </Pressable>
      <Pressable onPress={() => router.push("/BuscarRecetas")}>
        <Ionicons style={styles.icon} name="search" size={30} color="black" />
      </Pressable>
      <Pressable onPress={() => router.push("/GuardarRecetas")}>
        <Ionicons style={styles.icon} name="heart" size={30} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "8%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Para dispositivos Android, para que la sombra se vea
  },
  icon: {
    marginBottom: 5,
  },
});

export default Footer;
