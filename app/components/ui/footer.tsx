import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Pressable onPress={() => router.replace("/")}>
        <Ionicons
          style={styles.icon}
          name="home-outline"
          size={25}
          color="black"
        />
      </Pressable>
      <Pressable onPress={() => router.replace("/BuscarRecetas")}>
        <Ionicons style={styles.icon} name="search" size={25} color="black" />
      </Pressable>
      <Pressable onPress={() => router.replace("/GuardarRecetas")}>
        <Ionicons style={styles.icon} name="heart" size={25} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFDAB9",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "6%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Para dispositivos Android, para que la sombra se vea
  },
  icon: {
    marginBottom: -1,
  },
});

export default Footer;
