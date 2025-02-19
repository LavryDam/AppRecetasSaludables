import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Footer = () => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Ionicons
          style={styles.icon}
          name="home-outline"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/GuardarRecetas")}>
        <Ionicons style={styles.icon} name="heart" size={24} color="black" />
      </TouchableOpacity>
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
    height: "10%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Para dispositivos Android, para que la sombra se vea
  },
  icon: {
    marginBottom: 10,
  },
});

export default Footer;
